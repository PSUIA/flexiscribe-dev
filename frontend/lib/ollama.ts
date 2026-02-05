/**
 * Ollama API integration for Gemma 3 1B
 */

const OLLAMA_BASE_URL = process.env.OLLAMA_BASE_URL || 'http://localhost:11434';

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Fisher-Yates shuffle algorithm for randomizing array order
 * Used to randomize MCQ answer positions
 */
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]; // Create a copy to avoid mutating original
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Normalize text for comparison (lowercase, trim, remove extra spaces)
 */
function normalizeText(text: string): string {
  return text.toLowerCase().trim().replace(/\s+/g, ' ');
}

/**
 * Check if two questions are semantically similar (for deduplication)
 */
function areQuestionsSimilar(q1: string, q2: string): boolean {
  const norm1 = normalizeText(q1);
  const norm2 = normalizeText(q2);
  
  // Exact match after normalization
  if (norm1 === norm2) return true;
  
  // Check if one is a substring of the other (with length threshold)
  const minLength = Math.min(norm1.length, norm2.length);
  if (minLength > 20) { // Only for substantial questions
    if (norm1.includes(norm2) || norm2.includes(norm1)) return true;
  }
  
  return false;
}

/**
 * Escape special regex characters in a string
 */
function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Get a rotating slice of the transcript for each batch
 * This prevents mode collapse by exposing the model to different content each attempt
 */
function getTranscriptSlice(
  transcript: string,
  batchIndex: number,
  windowSize: number = 2000,
  overlap: number = 200
): string {
  const step = windowSize - overlap;
  const start = (batchIndex * step) % Math.max(transcript.length - windowSize, 1);
  const end = Math.min(start + windowSize, transcript.length);
  
  // If we've wrapped around and the slice is too small, start from beginning
  if (end - start < windowSize / 2 && transcript.length > windowSize) {
    return transcript.slice(0, windowSize);
  }
  
  return transcript.slice(start, end);
}

// ============================================================================
// VALIDATION FUNCTIONS
// ============================================================================

/**
 * Check for placeholder patterns in MCQ choices
 */
function hasPlaceholderText(choice: string): boolean {
  const placeholderPatterns = [
    /option [a-d]/i,
    /wrong answer/i,
    /correct answer/i,
    /plausible/i,
    /choice [1-4]/i,
    /^[a-d]$/i
  ];
  return placeholderPatterns.some(pattern => pattern.test(choice));
}

/**
 * Validate and fix a single MCQ item
 * Returns object with { valid: boolean, item: any, rejectionReason?: string }
 */
function validateMCQItem(item: any): { valid: boolean; item: any; rejectionReason?: string } {
  // Check choices array
  if (!item.choices || item.choices.length !== 4) {
    return { 
      valid: false, 
      item, 
      rejectionReason: `Invalid choices array (length: ${item.choices?.length}, expected: 4)` 
    };
  }
  
  // Check for placeholder text
  for (const choice of item.choices) {
    if (hasPlaceholderText(choice)) {
      return { 
        valid: false, 
        item, 
        rejectionReason: `Placeholder text detected in choice: "${choice}"` 
      };
    }
  }
  
  // Validate answerIndex
  if (typeof item.answerIndex !== 'number' || item.answerIndex < 0 || item.answerIndex > 3) {
    return { 
      valid: false, 
      item, 
      rejectionReason: `Invalid answerIndex: ${item.answerIndex} (must be 0-3)` 
    };
  }
  
  // Validate explanation exists
  if (!item.explanation || item.explanation.trim().length < 10) {
    return { 
      valid: false, 
      item, 
      rejectionReason: 'Missing or insufficient explanation (min 10 characters)' 
    };
  }
  
  // CRITICAL FIX: Randomize the position of the correct answer
  // This prevents "B is always correct" problem
  const correctChoice = item.choices[item.answerIndex];
  const shuffledChoices = shuffleArray(item.choices);
  const newAnswerIndex = shuffledChoices.indexOf(correctChoice);
  
  const fixedItem = {
    ...item,
    choices: shuffledChoices,
    answerIndex: newAnswerIndex
  };
  
  // STRICT validation: explanation MUST align with correct answer
  if (fixedItem.explanation && fixedItem.choices[fixedItem.answerIndex]) {
    const answer = normalizeText(fixedItem.choices[fixedItem.answerIndex]);
    const explanation = normalizeText(fixedItem.explanation);
    
    // Check if explanation mentions the correct answer
    const answerWords = answer.split(' ');
    let mentionsAnswer = false;
    
    for (const word of answerWords) {
      if (word.length > 3 && explanation.includes(word)) {
        mentionsAnswer = true;
        break;
      }
    }
    
    if (!mentionsAnswer) {
      return { 
        valid: false, 
        item: fixedItem, 
        rejectionReason: `Explanation does not reference the correct answer: "${answer}"` 
      };
    }
    
    // Check if explanation contradicts by mentioning wrong answers more
    for (let i = 0; i < fixedItem.choices.length; i++) {
      if (i !== fixedItem.answerIndex) {
        const wrongAnswer = normalizeText(fixedItem.choices[i]);
        const wrongWords = wrongAnswer.split(' ');
        
        // If explanation focuses more on a wrong answer, reject it
        for (const word of wrongWords) {
          if (word.length > 5 && explanation.split(word).length > explanation.split(answerWords[0]).length + 1) {
            return { 
              valid: false, 
              item: fixedItem, 
              rejectionReason: `Explanation focuses on wrong answer: "${wrongAnswer}"` 
            };
          }
        }
      }
    }
  }
  
  return { valid: true, item: fixedItem };
}

/**
 * Auto-fix fill-in-blank sentence to include [blank] marker
 * Returns fixed sentence or null if unable to fix
 */
function autoFixFillInBlank(sentence: string, answer: string): string | null {
  if (sentence.includes('[blank]')) {
    return sentence; // Already has blank marker
  }
  
  const trimmedAnswer = answer.trim();
  
  // Strategy 1: Exact case-insensitive match with word boundaries
  const exactRegex = new RegExp(`\\b${escapeRegex(trimmedAnswer)}\\b`, 'i');
  if (exactRegex.test(sentence)) {
    const fixed = sentence.replace(exactRegex, '[blank]');
    console.log(`Auto-fixed (exact): "${trimmedAnswer}" → [blank]`);
    return fixed;
  }
  
  // Strategy 2: Multi-word answer matching
  const answerWords = trimmedAnswer.split(/\s+/);
  if (answerWords.length > 1) {
    const words = sentence.split(/\b/);
    
    for (let i = 0; i < words.length; i++) {
      if (normalizeText(words[i]) === normalizeText(answerWords[0])) {
        // Check if multi-word answer matches
        let matches = true;
        for (let j = 1; j < answerWords.length; j++) {
          const wordIndex = i + j * 2; // Account for word boundaries
          if (wordIndex >= words.length || normalizeText(words[wordIndex]) !== normalizeText(answerWords[j])) {
            matches = false;
            break;
          }
        }
        
        if (matches) {
          // Replace the matched portion
          const endIndex = i + (answerWords.length - 1) * 2 + 1;
          words.splice(i, endIndex - i, '[blank]');
          const fixed = words.join('');
          console.log(`Auto-fixed (multi-word): "${trimmedAnswer}" → [blank]`);
          return fixed;
        }
      }
    }
  }
  
  console.warn(`Could not auto-fix: answer "${trimmedAnswer}" not found in: "${sentence}"`);
  return null;
}

/**
 * Validate and fix a single fill-in-blank item
 * Returns object with { valid: boolean, item: any, rejectionReason?: string }
 */
function validateFillInBlankItem(item: any): { valid: boolean; item: any; rejectionReason?: string } {
  if (!item.sentence || !item.answer) {
    return { 
      valid: false, 
      item, 
      rejectionReason: 'Missing sentence or answer' 
    };
  }
  
  // Auto-fix: add [blank] marker if missing
  const fixedSentence = autoFixFillInBlank(item.sentence, item.answer);
  if (!fixedSentence) {
    return { 
      valid: false, 
      item, 
      rejectionReason: `Could not auto-fix: answer "${item.answer}" not found in sentence` 
    };
  }
  
  // Validate distractors
  if (!item.distractors || item.distractors.length !== 3) {
    return { 
      valid: false, 
      item, 
      rejectionReason: `Invalid distractors (length: ${item.distractors?.length}, expected: 3)` 
    };
  }
  
  return {
    valid: true,
    item: {
      ...item,
      sentence: fixedSentence
    }
  };
}

/**
 * Validate a single flashcard item
 * Returns object with { valid: boolean, item: any, rejectionReason?: string }
 */
function validateFlashcardItem(item: any): { valid: boolean; item: any; rejectionReason?: string } {
  if (!item.front || !item.back) {
    return { 
      valid: false, 
      item, 
      rejectionReason: 'Missing front or back content' 
    };
  }
  
  // Ensure both have meaningful content (not just whitespace)
  if (normalizeText(item.front).length < 3 || normalizeText(item.back).length < 10) {
    return { 
      valid: false, 
      item, 
      rejectionReason: `Insufficient content (front: ${normalizeText(item.front).length} chars, back: ${normalizeText(item.back).length} chars)` 
    };
  }
  
  return { valid: true, item };
}

/**
 * Validate quiz items structure and content
 * Returns object with { validItems: any[], rejectedItems: any[] }
 * Also randomizes MCQ answer positions to prevent "B is always correct" issue
 */
function validateQuizItems(
  items: any[], 
  type: string, 
  existingItems: Set<string> = new Set()
): { validItems: any[]; rejectedItems: any[] } {
  const validItems: any[] = [];
  const rejectedItems: any[] = [];
  
  for (const item of items) {
    let validationResult: { valid: boolean; item: any; rejectionReason?: string };
    
    // Type-specific validation
    if (type === 'MCQ') {
      validationResult = validateMCQItem(item);
      
      // Check for duplicates
      if (validationResult.valid) {
        const questionKey = normalizeText(validationResult.item.question);
        if (existingItems.has(questionKey)) {
          validationResult = {
            valid: false,
            item: validationResult.item,
            rejectionReason: 'Duplicate question detected'
          };
        } else {
          existingItems.add(questionKey);
        }
      }
    } else if (type === 'FILL_IN_BLANK') {
      validationResult = validateFillInBlankItem(item);
      
      // Check for duplicates
      if (validationResult.valid) {
        const sentenceKey = normalizeText(validationResult.item.sentence);
        if (existingItems.has(sentenceKey)) {
          validationResult = {
            valid: false,
            item: validationResult.item,
            rejectionReason: 'Duplicate sentence detected'
          };
        } else {
          existingItems.add(sentenceKey);
        }
      }
    } else if (type === 'FLASHCARD') {
      validationResult = validateFlashcardItem(item);
      
      // Check for duplicates
      if (validationResult.valid) {
        const frontKey = normalizeText(validationResult.item.front);
        if (existingItems.has(frontKey)) {
          validationResult = {
            valid: false,
            item: validationResult.item,
            rejectionReason: 'Duplicate flashcard front detected'
          };
        } else {
          existingItems.add(frontKey);
        }
      }
    } else {
      continue; // Unknown type
    }
    
    if (validationResult.valid) {
      validItems.push(validationResult.item);
    } else {
      rejectedItems.push({
        ...validationResult.item,
        _rejected: true,
        _rejectionReason: validationResult.rejectionReason
      });
      console.warn(`Rejected item: ${validationResult.rejectionReason}`);
    }
  }
  
  return { validItems, rejectedItems };
}

export interface OllamaGenerateRequest {
  model: string;
  prompt: string;
  stream?: boolean;
  format?: 'json';
  options?: {
    temperature?: number;
    top_p?: number;
    top_k?: number;
  };
}

export interface OllamaGenerateResponse {
  model: string;
  created_at: string;
  response: string;
  done: boolean;
}

/**
 * Generate text using Ollama
 */
export async function generateWithOllama(
  prompt: string,
  options: {
    model?: string;
    temperature?: number;
    requireJson?: boolean;
  } = {}
): Promise<string> {
  // Auto-select best available model if not specified
  let modelToUse = options.model;
  if (!modelToUse) {
    modelToUse = await getBestAvailableModel();
    console.log(`Auto-selected model: ${modelToUse}`);
  }
  
  const {
    temperature = 0.7,
    requireJson = false,
  } = options;

  try {
    const requestBody: OllamaGenerateRequest = {
      model: modelToUse,
      prompt,
      stream: false,
      options: {
        temperature,
      },
    };

    if (requireJson) {
      requestBody.format = 'json';
    }

    const response = await fetch(`${OLLAMA_BASE_URL}/api/generate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Ollama API error: ${response.status} ${response.statusText}. Model: ${modelToUse}. Response: ${errorText}`);
    }

    const data: OllamaGenerateResponse = await response.json();
    return data.response;
  } catch (error) {
    console.error('Error calling Ollama:', error);
    throw new Error(`Failed to generate with Ollama: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

/**
 * Check if Ollama is available
 */
export async function checkOllamaAvailability(): Promise<boolean> {
  try {
    const response = await fetch(`${OLLAMA_BASE_URL}/api/tags`, {
      method: 'GET',
    });
    return response.ok;
  } catch (error) {
    console.error('Ollama is not available:', error);
    return false;
  }
}

/**
 * Get list of available Ollama models
 */
export async function getAvailableModels(): Promise<string[]> {
  try {
    const response = await fetch(`${OLLAMA_BASE_URL}/api/tags`, {
      method: 'GET',
    });
    
    if (!response.ok) {
      return [];
    }
    
    const data = await response.json();
    return data.models?.map((m: any) => m.name) || [];
  } catch (error) {
    console.error('Error fetching models:', error);
    return [];
  }
}

/**
 * Find the best available small model for quiz generation
 */
export async function getBestAvailableModel(): Promise<string> {
  const models = await getAvailableModels();
  
  // Priority order: prefer smaller, faster models
  const preferredModels = [
    'gemma3:1b',
    'gemma2:2b',
    'gemma:2b', 
    'phi3:mini',
    'tinyllama',
    'llama3.2:1b',
    'qwen2.5:0.5b',
  ];
  
  for (const preferred of preferredModels) {
    const found = models.find(m => m.startsWith(preferred.split(':')[0]));
    if (found) return found;
  }
  
  // Fallback to any available model
  return models[0] || 'gemma3:1b';
}

/**
 * Generate quiz using Ollama with structured prompts (auto-selects best available model)
 * Implements batch processing with deduplication to ensure exact count
 */
export async function generateQuizWithGemma(
  transcript: string,
  type: 'MCQ' | 'FILL_IN_BLANK' | 'FLASHCARD',
  difficulty: 'EASY' | 'MEDIUM' | 'HARD',
  count: number
): Promise<any> {
  // Track generation time
  const startTime = Date.now();
  
  // Dynamic temperature based on quiz type for better accuracy
  // Lower = more factual, Higher = more creative
  const baseTemperature = type === 'MCQ' ? 0.25 : type === 'FILL_IN_BLANK' ? 0.35 : 0.5;

  // Track unique items across batches to prevent duplicates
  const seenItems = new Set<string>();
  const allValidItems: any[] = [];
  const allRejectedItems: any[] = [];
  
  // Batch configuration - CRITICAL: Use smaller batches for HARD difficulty
  const BASE_BATCH_SIZE = difficulty === 'HARD' ? 1 : 5;
  const MAX_ATTEMPTS = Math.max(Math.ceil(count / BASE_BATCH_SIZE) * 5, 30);
  
  let attempts = 0;
  let consecutiveFailures = 0;
  
  console.log(`Starting quiz generation: ${count} ${type} items at ${difficulty} difficulty`);
  console.log(`Configuration: BASE_BATCH_SIZE=${BASE_BATCH_SIZE}, MAX_ATTEMPTS=${MAX_ATTEMPTS}`);
  console.log(`Base temperature: ${baseTemperature}`);
  
  try {
    // Generate batches until we have enough valid, unique items
    while (allValidItems.length < count && attempts < MAX_ATTEMPTS) {
      const remainingCount = count - allValidItems.length;
      
      // Get rotating transcript slice to prevent mode collapse
      const transcriptSlice = getTranscriptSlice(transcript, attempts);
      console.log(`\nBatch ${attempts + 1}: Using transcript slice (chars ${attempts * 1200 % transcript.length}-${(attempts * 1200 % transcript.length) + transcriptSlice.length})`);
      
      // Dynamic batch size based on recent failure rate
      let batchSize = BASE_BATCH_SIZE;
      if (attempts > 0) {
        const recentRejectionRate = allRejectedItems.length / (allValidItems.length + allRejectedItems.length);
        if (recentRejectionRate > 0.6) {
          batchSize = Math.max(1, Math.floor(BASE_BATCH_SIZE / 2)); // Halve batch size
          console.log(`High rejection rate (${Math.round(recentRejectionRate * 100)}%), reducing batch size to ${batchSize}`);
        }
      }
      
      const batchCount = Math.min(batchSize, remainingCount);
      
      // Temperature decay: start creative, get more factual with retries
      // Keep floor at 0.2 to prevent excessive repetition
      const temperature = Math.max(
        baseTemperature - (consecutiveFailures * 0.02),
        0.2
      );
      
      if (temperature !== baseTemperature) {
        console.log(`Temperature decayed to ${temperature.toFixed(2)} after ${consecutiveFailures} consecutive low-quality batches`);
      }
      
      // Extract recently used concepts for memory injection
      const recentConcepts = Array.from(seenItems).slice(-5);
      
      console.log(`Batch ${attempts + 1}: Requesting ${batchCount} items (${allValidItems.length}/${count} collected)`);
      
      // Generate batch with rotating content and concept memory
      const batchPrompt = buildPrompt(type, difficulty, batchCount, transcriptSlice, recentConcepts);
      const rawResponse = await generateWithOllama(batchPrompt, {
        temperature,
        requireJson: true,
      });
      
      // Parse response
      let parsedResponse;
      try {
        parsedResponse = JSON.parse(rawResponse);
      } catch (parseError) {
        console.error(`Batch ${attempts + 1}: JSON parse error`, parseError);
        attempts++;
        continue;
      }
      
      // Validate batch
      if (!parsedResponse.items || !Array.isArray(parsedResponse.items)) {
        console.warn(`Batch ${attempts + 1}: Invalid response structure`);
        attempts++;
        continue;
      }
      
      // Validate and deduplicate items
      const { validItems: validBatchItems, rejectedItems: rejectedBatchItems } = validateQuizItems(parsedResponse.items, type, seenItems);
      
      allValidItems.push(...validBatchItems);
      allRejectedItems.push(...rejectedBatchItems);
      
      // Track consecutive failures for temperature decay
      if (validBatchItems.length === 0) {
        consecutiveFailures++;
      } else {
        consecutiveFailures = 0; // Reset on success
      }
      
      console.log(`Batch ${attempts + 1}: Generated ${parsedResponse.items.length}, Valid: ${validBatchItems.length}, Rejected: ${rejectedBatchItems.length}, Total Valid: ${allValidItems.length}/${count}`);
      
      // Show progress percentage
      const progress = Math.min(100, Math.round((allValidItems.length / count) * 100));
      console.log(`Progress: ${progress}% complete (${allValidItems.length}/${count} valid items collected)`);
      
      attempts++;
      
      // Check if we've reached the target
      if (allValidItems.length >= count) {
        console.log(`✓ Target reached! Collected ${allValidItems.length} valid items in ${attempts} attempts`);
        break;
      }
      
      // Safety valve: downgrade difficulty if stuck
      if (attempts > 10 && allValidItems.length < count * 0.3) {
        console.warn(`⚠ Low progress after ${attempts} attempts. Consider using MEDIUM or EASY difficulty for better results with this model.`);
      }
    }
    
    // Final validation
    if (allValidItems.length === 0) {
      throw new Error('No valid quiz items generated after multiple attempts');
    }
    
    // Trim to exact count if we got more
    const finalItems = allValidItems.slice(0, count);
    
    // Calculate elapsed time
    const endTime = Date.now();
    const elapsedMs = endTime - startTime;
    const elapsedSeconds = Math.floor(elapsedMs / 1000);
    const minutes = Math.floor(elapsedSeconds / 60);
    const seconds = elapsedSeconds % 60;
    const timeString = minutes > 0 ? `${minutes}m ${seconds}s` : `${seconds}s`;
    
    console.log(`\n=== Generation Complete ===`);
    console.log(`Requested: ${count}`);
    console.log(`Valid items generated: ${allValidItems.length}`);
    console.log(`Final items (after trimming): ${finalItems.length}`);
    console.log(`Rejected items: ${allRejectedItems.length}`);
    console.log(`Total attempts: ${attempts}`);
    console.log(`Success rate: ${Math.round((allValidItems.length / (allValidItems.length + allRejectedItems.length)) * 100)}%`);
    console.log(`Time elapsed: ${timeString}`);
    console.log(`===========================\n`);
    
    if (finalItems.length < count) {
      console.warn(`Generated ${finalItems.length} valid items out of ${count} requested (${attempts} attempts)`);
    } else {
      console.log(`Successfully generated ${finalItems.length} items in ${attempts} attempts`);
    }
    
    return {
      type: type === 'MCQ' ? 'mcq' : type === 'FILL_IN_BLANK' ? 'fill_blank' : 'flashcard',
      difficulty: difficulty.toLowerCase(),
      items: finalItems,
      rejectedItems: allRejectedItems,
      stats: {
        requested: count,
        generated: finalItems.length,
        rejected: allRejectedItems.length,
        attempts: attempts
      }
    };
    
  } catch (error) {
    console.error('Error generating quiz with Gemma:', error);
    throw new Error(`Failed to generate quiz: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

// ============================================================================
// PROMPT BUILDING FUNCTIONS
// ============================================================================

/**
 * Build the appropriate prompt based on quiz type
 */
function buildPrompt(
  type: 'MCQ' | 'FILL_IN_BLANK' | 'FLASHCARD',
  difficulty: 'EASY' | 'MEDIUM' | 'HARD',
  count: number,
  transcript: string,
  recentConcepts: string[] = []
): string {
  switch (type) {
    case 'MCQ':
      return buildMCQPrompt(difficulty, count, transcript, recentConcepts);
    case 'FILL_IN_BLANK':
      return buildFillInBlankPrompt(difficulty, count, transcript, recentConcepts);
    case 'FLASHCARD':
      return buildFlashcardPrompt(difficulty, count, transcript, recentConcepts);
    default:
      throw new Error(`Unknown quiz type: ${type}`);
  }
}

/**
 * Build MCQ generation prompt with all quality controls
 */
function buildMCQPrompt(difficulty: string, count: number, transcript: string, recentConcepts: string[] = []): string {
  const difficultyGuidelines = {
    EASY: '- Focus on basic facts, definitions, and direct recall\n- Questions should test if student remembers key information\n- Correct answer should be clearly stated in the content',
    MEDIUM: '- Test understanding and application of concepts\n- Questions should require connecting ideas\n- Choices should be plausible but distinguishable',
    HARD: '- Test analysis, evaluation, and synthesis\n- Questions should require critical thinking\n- All choices should seem reasonable at first glance'
  };

  const conceptMemory = recentConcepts.length > 0 ? `

DO NOT REPEAT THESE PREVIOUSLY USED CONCEPTS:
${recentConcepts.map(c => `- ${c}`).join('\n')}

You MUST cover DIFFERENT concepts not listed above.` : '';

  return `You are an expert educational quiz creator. Your task is to create multiple-choice questions based ONLY on the provided content.

CONTENT TO ANALYZE:
${transcript}
${conceptMemory}

⚠️ CRITICAL - STAY ON TOPIC:
- Generate questions ONLY about the topics, concepts, and facts in the content above
- DO NOT generate questions from your general knowledge about other subjects
- If the content is about linguistics, DO NOT create biology questions
- If the content is about history, DO NOT create science questions
- Your questions MUST directly relate to what you just read in the CONTENT section
- Each question must reference specific information that appears in the content

YOUR TASK: Create exactly ${count} multiple-choice questions at ${difficulty} difficulty about THE TOPICS IN THE CONTENT ABOVE.

DIFFICULTY GUIDELINES:
${difficultyGuidelines[difficulty as keyof typeof difficultyGuidelines]}

QUALITY REQUIREMENTS:
1. Each question must be clear and unambiguous
2. All 4 choices must be grammatically consistent
3. Wrong choices (distractors) must be plausible but clearly incorrect
4. Avoid "all of the above" or "none of the above" options
5. The explanation must reference specific content from the transcript

CRITICAL CONSTRAINT:
- The correct answer MUST be explicitly stated or directly paraphrased from the content
- Do NOT infer information not clearly mentioned in the content
- Do NOT create questions about topics not covered in the content
- Stick closely to the facts and terminology used in the source material

NO REDUNDANCY:
- Each question MUST cover a DIFFERENT concept, fact, or aspect from the content
- Do NOT ask about the same topic twice in different words
- Spread questions across the entire content, not just one section
- Avoid questions that test the same knowledge point

CITATION REQUIREMENT:
- Every correct answer must be traceable to a specific sentence in the content
- If you cannot find supporting text, DO NOT use that question

EXPLANATION RULE (MANDATORY - CRITICAL FOR VALIDATION):
Your explanation MUST explicitly repeat key words from the CORRECT choice verbatim.
The explanation must justify ONLY the correct answer, not any distractors.
If the explanation does not contain recognizable text from the correct choice, the question is INVALID.

Bad explanation example (WILL BE REJECTED):
✗ "It adds a prefix to the beginning of a word."

Good explanation example (WILL PASS VALIDATION):
✓ "The correct answer is 'Energy production through ATP' because mitochondria produce ATP through cellular respiration, making them the powerhouse of the cell."

SELF-CHECK BEFORE FINAL OUTPUT (FAIL = DISCARD ITEM):
For each question:
1. TOPIC CHECK: Is this question about a topic actually mentioned in the content? If NO → discard immediately
2. Find the exact sentence in content that supports the correct answer
3. Verify all incorrect options contradict or are absent from the content  
4. Verify explanation directly references the supporting content
5. CRITICAL: Does the explanation explicitly mention words from the correct choice? If NO → discard
6. Could the explanation also justify ANY wrong option? If YES → discard
7. Is this question similar to any previously generated? If YES → discard
If any check fails, regenerate that item silently or reduce the count.

⚠️ BEFORE YOU START:
Read the content above carefully. Identify the main topic (e.g., is it about language? science? history? math?).
ALL your questions must be about THAT topic and use information from THAT content.
DO NOT default to generic science or other memorized questions.

OUTPUT FORMAT (JSON only, no markdown, no extra text):
{
  "type": "mcq",
  "difficulty": "${difficulty.toLowerCase()}",
  "items": [
    {
      "question": "[Question about the ACTUAL topic in the content above]",
      "choices": [
        "[Specific answer from content]",
        "[Plausible distractor related to content topic]",
        "[Another plausible distractor]",
        "[Third plausible distractor]"
      ],
      "answerIndex": 0,
      "explanation": "The correct answer is '[choice text]' because [specific fact from the content that supports this answer]."
    }
  ]
}

CRITICAL - ACTUAL CONTENT ONLY:
- DO NOT use generic placeholders like "Option A", "Wrong answer 1", "Correct answer from content"
- Every choice must be a SPECIFIC, CONCRETE answer derived from the actual content
- The question must reference specific facts, terms, or concepts from the content
- The explanation must quote or paraphrase the exact supporting sentence

RANDOMIZATION WILL BE HANDLED AUTOMATICALLY:
- You can place the correct answer at any position (0, 1, 2, or 3)
- The system will automatically shuffle choices after generation
- Focus on creating high-quality, content-accurate questions

CRITICAL RULES:
- Generate EXACTLY ${count} items in the array
- answerIndex must be 0, 1, 2, or 3 (0-based index)
- Return ONLY the JSON object, no other text
- Ensure all JSON is valid and properly formatted`;
}

/**
 * Build fill-in-blank generation prompt
 */
function buildFillInBlankPrompt(difficulty: string, count: number, transcript: string, recentConcepts: string[] = []): string {
  const difficultyGuidelines = {
    EASY: '- Remove simple key terms that are clearly defined\n- Answer should be a single word or short phrase\n- The blank should be easy to identify from context',
    MEDIUM: '- Remove important concepts that require understanding\n- Answer may be a phrase or technical term\n- Context clues should help but not make it obvious',
    HARD: '- Remove complex terms or relationships\n- May require deeper understanding to identify\n- Multiple terms might fit, but one is most accurate'
  };

  const conceptMemory = recentConcepts.length > 0 ? `

DO NOT REPEAT THESE PREVIOUSLY USED TERMS:
${recentConcepts.map(c => `- ${c}`).join('\n')}

You MUST use DIFFERENT terms not listed above.` : '';

  return `You are an expert educational quiz creator. Your task is to create fill-in-the-blank questions based ONLY on the provided content.

CONTENT TO ANALYZE:
${transcript}
${conceptMemory}

⚠️ CRITICAL - STAY ON TOPIC:
- Create fill-in-blank sentences ONLY from the content above
- DO NOT use sentences from your general knowledge
- The blanked term MUST appear in the content provided
- Each sentence must be directly taken or adapted from the content

YOUR TASK: Create exactly ${count} fill-in-the-blank questions at ${difficulty} difficulty using THE CONTENT ABOVE.

DIFFICULTY GUIDELINES:
${difficultyGuidelines[difficulty as keyof typeof difficultyGuidelines]}

QUALITY REQUIREMENTS:
1. Use [blank] to mark where the answer goes
2. The sentence must make sense and provide enough context
3. The answer must be directly from or implied by the content
4. Distractors should be related terms that could confuse students
5. Avoid blanking the first or last word of a sentence

CRITICAL CONSTRAINT:
- The answer MUST be explicitly mentioned in the content
- Do NOT infer terms not present in the text
- The sentence context must match how the term is used in the content

NO REDUNDANCY:
- Each question MUST test a DIFFERENT term or concept
- Do NOT create multiple blanks for the same answer
- Spread questions across different topics in the content

CITATION REQUIREMENT:
- Find the sentence where the answer appears
- Ensure your fill-in-blank sentence preserves the same meaning
- Don't change the context or relationships

SELF-CHECK BEFORE FINAL OUTPUT:
For each question:
1. Find the exact sentence containing the answer
2. Verify your sentence preserves the original meaning
3. Confirm distractors are related but clearly wrong
4. Confirm only the correct answer fits logically
If any check fails, regenerate that item silently.

OUTPUT FORMAT (JSON only, no markdown, no extra text):
{
  "type": "fill_blank",
  "difficulty": "${difficulty.toLowerCase()}",
  "items": [
    {
      "sentence": "Photosynthesis occurs in the [blank] of plant cells, where light energy is converted to chemical energy.",
      "answer": "chloroplasts",
      "distractors": ["mitochondria", "nucleus", "ribosomes"]
    }
  ]
}

CRITICAL - MUST USE [blank] MARKER:
- Every sentence MUST contain exactly one [blank] marker
- The [blank] must be where the answer belongs in the original content
- The sentence must be grammatically correct and make complete sense
- The answer must fit naturally when replacing [blank]

DISTRACTORS MUST BE SPECIFIC:
- Distractors must be actual terms from similar categories (not generic placeholders)
- They must be plausible enough that someone who didn't read carefully might choose them
- They must be clearly wrong based on the content

CRITICAL RULES:
- Generate EXACTLY ${count} items in the array
- Each item must have exactly 3 distractors
- Distractors must be plausible alternatives
- Return ONLY the JSON object, no other text
- Ensure all JSON is valid and properly formatted`;
}

/**
 * Build flashcard generation prompt
 */
function buildFlashcardPrompt(difficulty: string, count: number, transcript: string, recentConcepts: string[] = []): string {
  const difficultyGuidelines = {
    EASY: '- Front: Simple term or concept name\n- Back: Clear, concise definition\n- Focus on basic vocabulary and fundamental ideas',
    MEDIUM: '- Front: Concept or principle\n- Back: Explanation with examples or applications\n- Connect multiple ideas when relevant',
    HARD: '- Front: Complex scenario or relationship\n- Back: Detailed analysis or comparison\n- May include implications and connections'
  };

  const conceptMemory = recentConcepts.length > 0 ? `

DO NOT REPEAT THESE PREVIOUSLY USED TOPICS:
${recentConcepts.map(c => `- ${c}`).join('\n')}

You MUST cover DIFFERENT topics not listed above.` : '';

  return `You are an expert educational quiz creator. Your task is to create flashcards based ONLY on the provided content.

CONTENT TO ANALYZE:
${transcript}
${conceptMemory}

⚠️ CRITICAL - STAY ON TOPIC:
- Create flashcards ONLY about topics in the content above
- DO NOT create flashcards from your general knowledge
- Both front and back must reference information from the content
- Focus on the actual subject matter presented in the content

YOUR TASK: Create exactly ${count} flashcards at ${difficulty} difficulty using THE CONTENT ABOVE.

DIFFICULTY GUIDELINES:
${difficultyGuidelines[difficulty as keyof typeof difficultyGuidelines]}

QUALITY REQUIREMENTS:
1. Front should be a clear question or prompt
2. Back should provide complete, accurate information
3. Keep both sides concise but informative
4. Use complete sentences on the back
5. Ensure information is directly from the content

CRITICAL CONSTRAINT:
- All information on the back MUST be explicitly from the content
- Do NOT add interpretations or inferences
- Use exact terminology from the content

NO REDUNDANCY:
- Each flashcard MUST cover a DIFFERENT concept or topic
- Do NOT create multiple cards about the same thing
- Spread cards across various aspects of the content

SELF-CHECK BEFORE FINAL OUTPUT:
For each flashcard:
1. Verify the back information appears in content
2. Verify terminology matches the source material
3. Verify you didn't mix up similar concepts
If any check fails, regenerate that item silently.

OUTPUT FORMAT (JSON only, no markdown, no extra text):
{
  "type": "flashcard",
  "difficulty": "${difficulty.toLowerCase()}",
  "items": [
    {
      "front": "What is the function of the Golgi apparatus?",
      "back": "The Golgi apparatus processes and packages proteins and lipids produced by the endoplasmic reticulum, preparing them for transport to other parts of the cell or for secretion outside the cell."
    }
  ]
}

CRITICAL - COMPLETE INFORMATION REQUIRED:
- Front must be a specific, clear question or term (not generic like 'What is X?')
- Back must provide a complete, accurate explanation directly from content
- Both front and back must contain substantive content (no placeholders or generic text)
- The back should be 1-3 complete sentences with specific details

CRITICAL RULES:
- Generate EXACTLY ${count} items in the array
- Front must be a question or clear prompt
- Back must be informative and accurate
- Return ONLY the JSON object, no other text
- Ensure all JSON is valid and properly formatted`;
}
