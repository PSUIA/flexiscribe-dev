# Quiz Generation Template Guide (v2.0)

## Overview
This guide explains how to use the comprehensive `quiz_generation_template.json` structure for generating high-quality quizzes from lecture transcription summaries. The template now includes enhanced metadata, concept mapping, relationship tracking, and Bloom's Taxonomy alignment for more intelligent quiz generation.

## Template Structure

### 1. Metadata Section
```json
"metadata": {
  "template_version": "2.0",
  "created_date": "YYYY-MM-DD",
  "lecture_info": {
    "title": "Lecture Title",
    "subject": "Subject Area",
    "difficulty_level": "beginner|intermediate|advanced",
    "duration_minutes": 60
  },
  "content_analysis": {
    "total_key_concepts": 10,
    "primary_topics": [...],
    "prerequisite_knowledge": [...],
    "learning_objectives": [...]
  }
}
```
- **Purpose**: Comprehensive tracking of lecture metadata and learning context
- **New Features**: 
  - Learning objectives for aligning questions with goals
  - Prerequisite knowledge to ensure appropriate difficulty
  - Content analysis for intelligent question distribution

### 2. Final Summary (Enhanced)
```json
"final_summary": {
  "response": {
    "summary": "Comprehensive overview...",
    "main_arguments": [...],
    "key_takeaways": [...],
    "overall_difficulty": "medium"
  }
}
```
- **Content**: Complete synthesis plus structured takeaways
- **Quiz Use Cases**:
  - Overall comprehension questions
  - Synthesis and evaluation questions
  - Essay prompts based on main arguments
  - "What are the key takeaways?" questions

### 3. Concept Map (NEW)
The most powerful addition for quiz generation, providing structured knowledge representation.

#### Core Concepts
```json
"core_concepts": [
  {
    "concept_id": "C001",
    "name": "Concept Name",
    "definition": "Clear definition",
    "category": "fundamental|intermediate|advanced|application",
    "introduced_at_minute": 5,
    "related_concepts": ["C002", "C003"],
    "examples": [...],
    "common_misconceptions": [...]
  }
]
```
**Quiz Generation Uses**:
- **Definitions**: "What is [concept]?" questions
- **Relationships**: "Which concepts are related to [concept]?" questions
- **Misconceptions**: Create distractor options from common misconceptions
- **Examples**: "Which of the following is an example of [concept]?" questions

#### Terminology
```json
"terminology": [
  {
    "term": "Technical Term",
    "definition": "Explanation",
    "context": "How it's used",
    "minute_introduced": 10
  }
]
```
**Best for**: Fill-in-the-blank, matching terms to definitions, vocabulary questions

#### Formulas and Equations
```json
"formulas_and_equations": [
  {
    "formula": "E = mc²",
    "description": "Energy-mass equivalence",
    "variables": {...},
    "minute_introduced": 15
  }
]
```
**Best for**: Application questions, calculation problems, identifying variables

#### Processes and Procedures
```json
"processes_and_procedures": [
  {
    "name": "Process Name",
    "steps": [...],
    "purpose": "Why important",
    "minute_introduced": 20
  }
]
```
**Best for**: Ordering/sequencing questions, "What happens first?" questions, process explanation

### 4. Minute Summaries (Enhanced)
```json
"minute_summaries": [
  {
    "minute": 1,
    "summary": "Content summary...",
    "key_points": [
      {
        "point": "Key fact or concept",
        "type": "definition|fact|example|explanation|comparison|process",
        "difficulty": "easy|medium|hard",
        "concept_id": "C001",
        "quiz_potential": {
          "multiple_choice": true,
          "true_false": true,
          "short_answer": false,
          "fill_blank": true
        }
      }
    ],
    "topics_covered": [...],
    "content_type": "introduction|definition|explanation|example|comparison|summary",
    "importance_level": "high|medium|low",
    "visual_aids_mentioned": [...],
    "questions_raised": [...]
  }
]
```

**Key Enhancements**:
- **quiz_potential**: Explicit indicators for which question types work best
- **type**: Categorization for appropriate question generation
- **difficulty**: Pre-assessed difficulty level
- **concept_id**: Links to concept map for consistency

### 5. Relationships and Connections (NEW)
Critical for higher-order thinking questions.

#### Cause-Effect Relationships
```json
"cause_effect": [
  {
    "cause": "What causes something",
    "effect": "Result",
    "minute": 10
  }
]
```
**Question Types**: "What is the effect of...?", "What causes...?", Analysis questions

#### Comparisons
```json
"comparisons": [
  {
    "item_a": "First item",
    "item_b": "Second item",
    "similarities": [...],
    "differences": [...],
    "minute": 15
  }
]
```
**Question Types**: "How does A differ from B?", Matching similarities/differences, Venn diagram questions

#### Hierarchies
```json
"hierarchies": [
  {
    "parent": "Broader category",
    "children": ["Subset 1", "Subset 2"],
    "relationship_type": "is-a|part-of|example-of",
    "minute": 20
  }
]
```
**Question Types**: "Which is a type of...?", Classification questions, Organization questions

### 6. Quiz Generation Metadata (NEW)
AI-powered recommendations for optimal quiz structure.

```json
"quiz_generation_metadata": {
  "recommended_question_count": {
    "minimum": 5,
    "maximum": 20,
    "optimal": 12
  },
  "difficulty_distribution": {
    "easy": 40,
    "medium": 40,
    "hard": 20
  },
  "question_type_suggestions": {
    "multiple_choice": 50,
    "true_false": 20,
    "short_answer": 20,
    "fill_blank": 10
  },
  "focus_areas": [...],
  "bloom_taxonomy_distribution": {
    "remember": 30,
    "understand": 35,
    "apply": 20,
    "analyze": 10,
    "evaluate": 5,
    "create": 0
  }
}
```

**Bloom's Taxonomy Levels**:
1. **Remember** (30%): Recall facts - "What is...?", "List...", "Define..."
2. **Understand** (35%): Explain ideas - "Explain...", "Describe...", "Summarize..."
3. **Apply** (20%): Use information - "Calculate...", "Demonstrate...", "Apply..."
4. **Analyze** (10%): Break down information - "Compare...", "Contrast...", "Distinguish..."
5. **Evaluate** (5%): Make judgments - "Justify...", "Critique...", "Which is best?"
6. **Create** (0%): Produce new work - Usually not suitable for auto-generated quizzes

## Quiz Generation Strategy (v2.0)

### Intelligent Question Source Selection

The enhanced template provides multiple data sources. Here's the recommended strategy:

#### Priority 1: Concept Map (35-40% of questions)
- **When to use**: For foundational knowledge and core concepts
- **Best question types**:
  - Multiple choice with misconceptions as distractors
  - True/false about definitions
  - Short answer asking for definitions
  - Matching concepts to examples

**Example**:
```json
Source: concept_map.core_concepts[0]
{
  "name": "Photosynthesis",
  "definition": "Process of converting light to chemical energy",
  "common_misconceptions": ["It's the opposite of cellular respiration"]
}

Generated Question:
"Which statement about photosynthesis is TRUE?"
a) It is the opposite of cellular respiration
b) It converts light energy to chemical energy [CORRECT]
c) It only occurs in darkness
d) It produces carbon dioxide
```

#### Priority 2: Key Points with Quiz Potential (30-35% of questions)
- **When to use**: Points marked with `quiz_potential: true` for relevant question types
- **Strategy**: Filter key_points by the desired question type

**Example**:
```python
# Filter for multiple choice questions
mc_candidates = [
  kp for minute in minute_summaries
  for kp in minute['key_points']
  if kp['quiz_potential']['multiple_choice'] == True
]
```

#### Priority 3: Relationships & Connections (15-20% of questions)
- **When to use**: For analytical and higher-order thinking questions
- **Best for**: Bloom's levels 4-5 (Analyze, Evaluate)

**Comparison Example**:
```json
Source: relationships_and_connections.comparisons[0]

Question: "Which of the following is a difference between light-dependent 
reactions and the Calvin cycle?"
a) Light reactions occur in chloroplasts; Calvin cycle doesn't
b) Light reactions require light; Calvin cycle doesn't [CORRECT]
c) Light reactions are part of photosynthesis; Calvin cycle isn't
d) Light reactions occur in plants; Calvin cycle doesn't
```

**Cause-Effect Example**:
```json
Source: relationships_and_connections.cause_effect[0]

Question: "What is the result when chlorophyll absorbs light energy?"
a) Oxygen is immediately released
b) Glucose is formed
c) Electrons become excited and enter the electron transport chain [CORRECT]
d) The Calvin cycle begins
```

#### Priority 4: Processes & Procedures (10-15% of questions)
- **Best for**: Sequencing questions, step-by-step understanding

**Example**:
```json
Source: concept_map.processes_and_procedures[0]

Question: "Place the following steps of photosynthesis in the correct order:"
[Answer requires drag-and-drop or numbering]
```

#### Priority 5: Terminology (5-10% of questions)
- **Best for**: Fill-in-the-blank, matching questions

**Example**:
```json
Source: concept_map.terminology

Question: "The fluid-filled space surrounding thylakoids in chloroplasts
is called the _______."
Answer: "stroma"
```

#### Priority 6: Summaries & Takeaways (5-10% of questions)
- **When to use**: For comprehensive understanding and big-picture questions

### Question Type Matching

Based on the enhanced template, here's how to match content to question types:

| Question Type | Best Sources | Difficulty | Bloom's Level |
|--------------|--------------|------------|---------------|
| **Multiple Choice** | Concept map, Key points with type="fact" | Any | 1-4 |
| **True/False** | Key points, Misconceptions | Easy-Medium | 1-2 |
| **Short Answer** | Definitions, Processes, Summaries | Medium-Hard | 2-3 |
| **Fill-in-the-Blank** | Terminology, Formulas, Key points type="fact" | Easy-Medium | 1 |
| **Matching** | Terminology, Related concepts, Examples | Medium | 1-2 |
| **Sequencing** | Processes with steps | Medium-Hard | 2-3 |
| **Comparison** | Relationships.comparisons | Medium-Hard | 4 |

### Difficulty Calibration

Use multiple signals to determine question difficulty:

```json
Difficulty = weighted_average({
  "key_point.difficulty": 40%,
  "concept.category": 30%,  // fundamental=easy, advanced=hard
  "bloom_level": 20%,       // 1-2=easy, 3-4=medium, 5-6=hard
  "minute_importance": 10%  // high=more likely to test
})
```

**Easy Questions (40%)**:
- From key_points with difficulty="easy"
- Bloom's levels 1-2 (Remember, Understand)
- Direct recall from definitions and terminology
- True/false from fundamental concepts

**Medium Questions (40%)**:
- From key_points with difficulty="medium"
- Bloom's levels 2-3 (Understand, Apply)
- Explanations, comparisons, applications
- Multiple choice requiring reasoning

**Hard Questions (20%)**:
- From key_points with difficulty="hard"
- Bloom's levels 4-5 (Analyze, Evaluate)
- Cause-effect relationships
- Multi-step reasoning
- Questions requiring synthesis from multiple concepts

## Implementation Examples (v2.0)

### Example 1: Multiple Choice from Concept Map with Misconceptions

**Source Data**:
```json
{
  "concept_id": "C003",
  "name": "Chlorophyll",
  "definition": "The green pigment in chloroplasts that absorbs light energy",
  "common_misconceptions": [
    "Chlorophyll absorbs green light"
  ]
}
```

**Generated Question**:
```json
{
  "id": "Q001",
  "question": "What is the function of chlorophyll in photosynthesis?",
  "type": "multiple_choice",
  "options": [
    "It absorbs green light for photosynthesis",
    "It stores glucose for later use",
    "It absorbs light energy for conversion to chemical energy",
    "It releases oxygen as the main product"
  ],
  "correct_answer": 2,
  "explanation": "Chlorophyll absorbs light energy (primarily red and blue wavelengths) and converts it to chemical energy. The misconception that it absorbs green light comes from the fact that plants appear green; this is because chlorophyll reflects green light rather than absorbing it.",
  "difficulty": "easy",
  "bloom_level": "remember",
  "source": {
    "type": "concept_map",
    "concept_id": "C003"
  },
  "points": 1,
  "tags": ["chlorophyll", "light absorption", "photosynthesis"]
}
```

**How the misconception was used**: Option 0 uses the common misconception as a distractor.

### Example 2: True/False from Key Point with Quiz Potential

**Source Data**:
```json
{
  "point": "Light-dependent reactions require sunlight to proceed",
  "type": "fact",
  "difficulty": "easy",
  "concept_id": "C004",
  "quiz_potential": {
    "true_false": true
  }
}
```

**Generated Question**:
```json
{
  "id": "Q002",
  "question": "The light-dependent reactions of photosynthesis can occur in complete darkness as long as ATP is available.",
  "type": "true_false",
  "correct_answer": false,
  "explanation": "Light-dependent reactions require sunlight to proceed. They cannot occur in darkness because they need light energy to split water molecules and produce ATP and NADPH.",
  "difficulty": "easy",
  "bloom_level": "understand",
  "source": {
    "type": "key_point",
    "minute": 3,
    "concept_id": "C004"
  },
  "points": 1,
  "tags": ["light reactions", "photosynthesis stages"]
}
```

### Example 3: Short Answer from Process

**Source Data**:
```json
{
  "name": "Calvin Cycle",
  "steps": [
    "Carbon dioxide enters the cycle",
    "CO₂ is fixed to existing carbon compounds",
    "ATP and NADPH from light reactions are used",
    "Glucose is synthesized"
  ],
  "purpose": "Use ATP and NADPH to synthesize glucose from carbon dioxide"
}
```

**Generated Question**:
```json
{
  "id": "Q003",
  "question": "Describe the purpose of the Calvin cycle and identify what molecules it requires.",
  "type": "short_answer",
  "expected_keywords": ["glucose", "ATP", "NADPH", "carbon dioxide", "synthesize"],
  "sample_answer": "The Calvin cycle uses ATP and NADPH from light reactions to convert carbon dioxide into glucose. This is the light-independent stage of photosynthesis where the actual sugar synthesis occurs.",
  "rubric": {
    "keywords_required": 3,
    "min_words": 15,
    "max_points": 3
  },
  "difficulty": "medium",
  "bloom_level": "understand",
  "source": {
    "type": "process",
    "name": "Calvin Cycle"
  },
  "tags": ["Calvin cycle", "photosynthesis", "glucose synthesis"]
}
```

### Example 4: Fill-in-the-Blank from Terminology

**Source Data**:
```json
{
  "term": "Stroma",
  "definition": "The fluid-filled space surrounding thylakoids in chloroplasts",
  "context": "Site of the Calvin cycle"
}
```

**Generated Question**:
```json
{
  "id": "Q004",
  "question": "The Calvin cycle occurs in the _______, which is the fluid-filled space surrounding thylakoids.",
  "type": "fill_blank",
  "correct_answers": ["stroma", "Stroma"],
  "case_sensitive": false,
  "hints": ["This structure is inside the chloroplast"],
  "difficulty": "easy",
  "bloom_level": "remember",
  "source": {
    "type": "terminology",
    "term": "Stroma"
  },
  "points": 1,
  "tags": ["chloroplast structure", "terminology"]
}
```

### Example 5: Comparison Question from Relationships

**Source Data**:
```json
{
  "item_a": "Light-dependent reactions",
  "item_b": "Calvin cycle",
  "differences": [
    "Light reactions require light; Calvin cycle doesn't",
    "Light reactions occur in thylakoids; Calvin cycle in stroma",
    "Light reactions produce ATP/NADPH; Calvin cycle consumes them"
  ]
}
```

**Generated Question**:
```json
{
  "id": "Q005",
  "question": "Which of the following correctly describes a difference between light-dependent reactions and the Calvin cycle?",
  "type": "multiple_choice",
  "options": [
    "Both require direct sunlight to function",
    "Light reactions occur in the stroma; Calvin cycle in thylakoids",
    "Light reactions produce ATP and NADPH; Calvin cycle consumes them",
    "Both produce glucose as their primary product"
  ],
  "correct_answer": 2,
  "explanation": "Light-dependent reactions produce ATP and NADPH which are then consumed by the Calvin cycle to synthesize glucose. They occur in different locations and have different light requirements.",
  "difficulty": "medium",
  "bloom_level": "analyze",
  "source": {
    "type": "relationship_comparison",
    "items": ["Light-dependent reactions", "Calvin cycle"]
  },
  "points": 2,
  "tags": ["photosynthesis stages", "comparison", "higher-order"]
}
```

### Example 6: Cause-Effect Question

**Source Data**:
```json
{
  "cause": "Chlorophyll absorbs light energy",
  "effect": "Electrons become excited and enter the electron transport chain",
  "minute": 3
}
```

**Generated Question**:
```json
{
  "id": "Q006",
  "question": "What happens immediately after chlorophyll absorbs light energy?",
  "type": "multiple_choice",
  "options": [
    "Glucose is immediately synthesized",
    "The Calvin cycle begins",
    "Electrons become excited and enter the electron transport chain",
    "Carbon dioxide is converted to oxygen"
  ],
  "correct_answer": 2,
  "explanation": "When chlorophyll absorbs light energy, its electrons become excited (raised to a higher energy state) and enter the electron transport chain, which is the first step in converting light energy to chemical energy.",
  "difficulty": "medium",
  "bloom_level": "understand",
  "source": {
    "type": "cause_effect",
    "minute": 3
  },
  "points": 1,
  "tags": ["light reactions", "electron transport", "cause-effect"]
}
```

## Best Practices (v2.0)

### 1. Leverage the Full Template Structure

**DO**:
- Prioritize concept_map for core definition and comprehension questions
- Use quiz_potential flags to determine appropriate question types
- Mine common_misconceptions for high-quality distractors
- Utilize relationships for higher-order thinking questions
- Follow bloom_taxonomy_distribution recommendations

**DON'T**:
- Ignore the metadata recommendations (difficulty distribution, focus areas)
- Generate questions from low importance_level minutes
- Create questions that contradict related_concepts
- Use only minute_summaries when richer data is available

### 2. Question Diversity by Bloom's Taxonomy

**Remember (30%)** - Direct recall:
- "What is the definition of [term]?"
- "Which organelle does photosynthesis occur in?"
- Fill-in-the-blank from terminology

**Understand (35%)** - Demonstrate comprehension:
- "Explain why plants appear green."
- "Describe the purpose of the Calvin cycle."
- True/false requiring conceptual understanding

**Apply (20%)** - Use knowledge in new contexts:
- "Calculate the net production of a photosynthesis reaction."
- "Predict what would happen if chlorophyll couldn't absorb blue light."

**Analyze (10%)** - Break down and examine:
- "Compare light-dependent reactions to the Calvin cycle."
- "What is the relationship between ATP production and glucose synthesis?"

**Evaluate (5%)** - Make judgments:
- "Why is photosynthesis essential for life on Earth?"
- "Evaluate the importance of thylakoid structure to photosynthesis efficiency."

### 3. Strategic Distractor Creation

**For Multiple Choice, create distractors from**:
1. **Common misconceptions** (highest priority)
   ```json
   Example: "Chlorophyll absorbs green light" ← from misconceptions array
   ```

2. **Related but incorrect concepts**
   ```json
   Example: If asking about "stroma", use "thylakoid" as distractor
   ```

3. **Partially correct statements**
   ```json
   Example: "Photosynthesis produces energy" ← technically stores energy
   ```

4. **Reversed cause-effect**
   ```json
   Example: "Light energy is produced from glucose" ← reversed
   ```

### 4. Quality Assurance Checklist

✅ **Before generating each question, verify**:
- [ ] Source data exists in template (not hallucinated)
- [ ] Question aligns with learning_objectives
- [ ] Difficulty matches source difficulty + Bloom's level
- [ ] Question type matches quiz_potential flags
- [ ] Distractors are plausible but clearly incorrect
- [ ] Correct answer is verifiable from source
- [ ] No grammatical cues reveal the answer
- [ ] Question is culturally neutral and unbiased

✅ **After generating full quiz**:
- [ ] Distribution matches quiz_generation_metadata recommendations
- [ ] All focus_areas are adequately represented
- [ ] No two questions test identical knowledge
- [ ] Difficulty progression feels natural
- [ ] Total points align with suggested optimal question count

### 5. Adaptive Difficulty

Use concept relationships to create scaffolded difficulty:

**Easy**: Single concept, direct recall
```
"What is chlorophyll?" [concept C003 only]
```

**Medium**: Single concept, deeper understanding
```
"Why does chlorophyll make plants appear green?" [concept C003 + understanding]
```

**Hard**: Multiple related concepts, synthesis
```
"How does the structure of chloroplasts (thylakoids and stroma) support 
the two-stage process of photosynthesis?" 
[concepts C002 + C004 + C005 + relationships]
```

### 6. Time-Based Question Features

Use `minute` field for:
- **Study tool integration**: "Review minute 3:00 for more details"
- **Video timestamps**: Link questions to specific video moments
- **Progressive disclosure**: Release questions as lecture progresses
- **Debugging**: Trace back to source when questions seem incorrect

## API Integration (v2.0)

### Input Format for Quiz Generation API

```json
{
  "summary_data": {
    /* Full summary JSON matching comprehensive template v2.0 */
  },
  "quiz_parameters": {
    "num_questions": 10,
    "use_metadata_recommendations": true,
    "override_difficulty_distribution": {
      "easy": 40,
      "medium": 40,
      "hard": 20
    },
    "override_question_types": {
      "multiple_choice": 60,
      "true_false": 20,
      "short_answer": 10,
      "fill_blank": 10
    },
    "bloom_taxonomy_target": {
      "remember": 30,
      "understand": 35,
      "apply": 20,
      "analyze": 10,
      "evaluate": 5
    },
    "focus_on_concepts": ["C001", "C003", "C004"],
    "exclude_minutes": [1],
    "include_explanations": true,
    "include_hints": true,
    "randomize_options": true,
    "min_distractor_quality": 0.7
  }
}
```

### Output Format from Quiz Generation API

```json
{
  "quiz_id": "quiz_20260208_180510",
  "title": "Quiz: Introduction to Photosynthesis",
  "source": {
    "file": "summary_output_20260208_180510.json",
    "template_version": "2.0",
    "lecture_title": "Introduction to Photosynthesis",
    "subject": "Biology",
    "duration_minutes": 5
  },
  "created_at": "2026-02-08T18:05:10Z",
  "metadata": {
    "total_questions": 10,
    "total_points": 12,
    "estimated_time_minutes": 15,
    "difficulty_breakdown": {
      "easy": 4,
      "medium": 4,
      "hard": 2
    },
    "bloom_breakdown": {
      "remember": 3,
      "understand": 4,
      "apply": 2,
      "analyze": 1
    },
    "concept_coverage": [
      {"concept_id": "C001", "questions": 3},
      {"concept_id": "C002", "questions": 2},
      {"concept_id": "C003", "questions": 2},
      {"concept_id": "C004", "questions": 2},
      {"concept_id": "C005", "questions": 1}
    ]
  },
  "questions": [
    {
      "id": "Q001",
      "order": 1,
      "question": "What is the function of chlorophyll in photosynthesis?",
      "type": "multiple_choice",
      "options": [
        "It absorbs green light for photosynthesis",
        "It stores glucose for later use",
        "It absorbs light energy for conversion to chemical energy",
        "It releases oxygen as the main product"
      ],
      "correct_answer": 2,
      "explanation": "Chlorophyll absorbs light energy (primarily red and blue wavelengths) and converts it to chemical energy. Plants appear green because chlorophyll reflects green light rather than absorbing it.",
      "hint": "Think about what makes plants appear green and what that means about which colors are NOT absorbed.",
      "points": 1,
      "difficulty": "easy",
      "bloom_level": "remember",
      "tags": ["chlorophyll", "light absorption", "photosynthesis"],
      "source": {
        "type": "concept_map",
        "concept_id": "C003",
        "minute": 2
      },
      "learning_objective_alignment": "Identify the cellular structures involved in photosynthesis"
    }
  ],
  "answer_key": [
    {"question_id": "Q001", "correct_answer": 2, "points": 1}
  ],
  "generation_metadata": {
    "algorithm_version": "2.0",
    "generation_time_ms": 1250,
    "sources_used": {
      "concept_map": 4,
      "key_points": 3,
      "relationships": 2,
      "terminology": 1
    },
    "quality_score": 0.92,
    "warnings": []
  }
}
```

### API Endpoints (Recommended)

```
POST /api/quiz/generate
  Input: summary_data + quiz_parameters
  Output: Generated quiz

POST /api/quiz/validate
  Input: summary_data (validate template structure)
  Output: Validation report

GET /api/quiz/{quiz_id}
  Output: Retrieve previously generated quiz

POST /api/quiz/{quiz_id}/grade
  Input: Student answers
  Output: Graded results with feedback

POST /api/quiz/analyze-source
  Input: summary_data
  Output: Analysis of question generation potential
```

## Validation Rules (v2.0)

### Template Structure Validation

#### Required Fields (Must exist):
```json
{
  "metadata": {
    "template_version": "string",
    "created_date": "YYYY-MM-DD",
    "lecture_info": {
      "title": "non-empty string",
      "subject": "non-empty string",
      "difficulty_level": "beginner|intermediate|advanced",
      "duration_minutes": "positive integer"
    }
  },
  "final_summary": {
    "response": {
      "summary": "non-empty string (min 100 chars)",
      "key_takeaways": "array with 3-7 items"
    }
  },
  "minute_summaries": "array with at least 1 item",
  "quiz_generation_metadata": {
    "recommended_question_count": {"optimal": "integer"},
    "difficulty_distribution": {"easy": "%", "medium": "%", "hard": "%"},
    "bloom_taxonomy_distribution": {"remember": "%", ...}
  }
}
```

#### Recommended Fields (Should exist for best results):
- `concept_map` with at least 3 core_concepts
- Each minute_summary should have 3-7 key_points
- At least 5 terminology entries
- At least 3 items in relationships_and_connections
- `quiz_potential` flags for all key_points

### Data Quality Validation

#### Summaries:
- ❌ **Too Short**: `summary.length < 50` characters
- ❌ **Too Long**: `summary.length > 500` characters
- ✅ **Ideal**: 100-300 characters, complete sentences

#### Key Points:
- ❌ **Missing type**: All key_points must have a type field
- ❌ **Inconsistent difficulty**: Check if difficulty aligns with concept_id category
- ✅ **Well-formed**: Has point, type, difficulty, quiz_potential, concept_id

#### Concepts:
- ❌ **No definition**: Core concepts without definitions can't generate definition questions
- ❌ **Circular references**: concept.related_concepts shouldn't create loops
- ✅ **Well-connected**: Each concept related to 2-4 others

#### Relationships:
- ❌ **Invalid minutes**: Minute references must exist in minute_summaries
- ❌ **Undefined concepts**: References to concept_ids that don't exist
- ✅ **Rich connections**: At least 3 items in each relationship type

### Quiz Generation Potential Analysis

**Run this analysis before generating quizzes**:

```python
def analyze_quiz_potential(summary_data):
    analysis = {
        "total_concepts": len(summary_data['concept_map']['core_concepts']),
        "total_key_points": sum(len(m.get('key_points', [])) 
                               for m in summary_data['minute_summaries']),
        "mc_candidates": 0,
        "tf_candidates": 0,
        "sa_candidates": 0,
        "fb_candidates": 0,
        "difficulty_breakdown": {"easy": 0, "medium": 0, "hard": 0},
        "bloom_potential": {"1-2": 0, "3-4": 0, "5-6": 0},
        "warnings": []
    }
    
    # Count quiz potential by type
    for minute in summary_data['minute_summaries']:
        for kp in minute.get('key_points', []):
            quiz_pot = kp.get('quiz_potential', {})
            if quiz_pot.get('multiple_choice'): analysis['mc_candidates'] += 1
            if quiz_pot.get('true_false'): analysis['tf_candidates'] += 1
            if quiz_pot.get('short_answer'): analysis['sa_candidates'] += 1
            if quiz_pot.get('fill_blank'): analysis['fb_candidates'] += 1
            
            # Track difficulty
            diff = kp.get('difficulty', 'medium')
            analysis['difficulty_breakdown'][diff] += 1
    
    # Add concepts to potential
    analysis['mc_candidates'] += len(summary_data['concept_map']['core_concepts'])
    analysis['fb_candidates'] += len(summary_data['concept_map'].get('terminology', []))
    
    # Warnings
    optimal = summary_data['quiz_generation_metadata']['recommended_question_count']['optimal']
    if analysis['mc_candidates'] < optimal:
        analysis['warnings'].append(f"Only {analysis['mc_candidates']} MC candidates for {optimal} questions")
    
    if analysis['total_concepts'] < 5:
        analysis['warnings'].append("Few concepts defined - consider adding more to concept_map")
    
    if not summary_data['concept_map'].get('processes_and_procedures'):
        analysis['warnings'].append("No processes defined - missing opportunity for sequencing questions")
    
    return analysis
```

### Example Validation Report:

```json
{
  "valid": true,
  "template_version": "2.0",
  "validation_timestamp": "2026-02-08T18:10:00Z",
  "structure_check": {
    "required_fields": "PASS",
    "recommended_fields": "PASS",
    "missing_optional": ["formulas_and_equations"]
  },
  "quality_check": {
    "summary_quality": "GOOD",
    "key_points_quality": "EXCELLENT",
    "concept_completeness": "GOOD"
  },
  "quiz_potential_analysis": {
    "total_concepts": 8,
    "total_key_points": 23,
    "mc_candidates": 31,
    "tf_candidates": 18,
    "sa_candidates": 15,
    "fb_candidates": 12,
    "difficulty_breakdown": {"easy": 9, "medium": 11, "hard": 3},
    "estimated_optimal_questions": 12,
    "warnings": [
      "Only 3 hard difficulty candidates - may need to generate harder questions from relationships"
    ]
  },
  "recommendations": [
    "Strong content for multiple choice questions",
    "Good variety of difficulty levels",
    "Consider adding more formulas for calculation questions",
    "Excellent concept mapping - well-suited for quiz generation"
  ]
}
```

## Troubleshooting

### Issue: Not enough questions generated
- **Cause**: Insufficient key points
- **Solution**: Extract more key points from summaries (aim for 3-5 per minute)

### Issue: Questions too similar
- **Cause**: Repetitive content in summaries
- **Solution**: Diversify by using different minutes and summary types

### Issue: Incorrect answers
- **Cause**: Ambiguous or conflicting information in source
- **Solution**: Review and clean summary data before quiz generation

## Advanced Features (v2.0)

### 1. Adaptive Quiz Generation

Generate personalized quizzes based on student performance:

```json
{
  "student_profile": {
    "weak_concepts": ["C004", "C005"],
    "strong_concepts": ["C001", "C002"],
    "preferred_question_types": ["multiple_choice", "visual"],
    "average_bloom_level": 2.3
  },
  "adaptive_parameters": {
    "focus_on_weak_concepts": 70,
    "review_strong_concepts": 30,
    "target_bloom_level": 3.0,
    "difficulty_adjustment": "slightly_harder"
  }
}
```

### 2. Progressive Disclosure Quizzing

Release questions incrementally as lecture progresses:

```json
{
  "progressive_mode": true,
  "release_schedule": [
    {"at_minute": 5, "release_questions": ["Q1", "Q2", "Q3"]},
    {"at_minute": 10, "release_questions": ["Q4", "Q5", "Q6"]},
    {"at_end": true, "release_questions": ["Q7", "Q8", "Q9", "Q10"]}
  ]
}
```

### 3. Multimodal Question Enhancement

Leverage visual_aids_mentioned for richer questions:

```json
{
  "question": "Refer to the diagram of chloroplast structure. Which label points to where the Calvin cycle occurs?",
  "type": "multiple_choice_with_image",
  "image_reference": "visual_aids_mentioned[0]",
  "options": ["A", "B", "C", "D"],
  "correct_answer": 2
}
```

### 4. Explanation Quality Enhancement

Generate rich explanations using template context:

```python
def generate_explanation(question, summary_data):
    base_explanation = get_base_explanation(question)
    
    # Add context from related concepts
    concept_id = question['source'].get('concept_id')
    if concept_id:
        concept = find_concept(summary_data, concept_id)
        related = get_related_concepts(summary_data, concept['related_concepts'])
        base_explanation += f" This relates to {related[0]['name']} because..."
    
    # Add minute reference for review
    minute = question['source'].get('minute')
    if minute:
        base_explanation += f" (Review minute {minute} for more details)"
    
    return base_explanation
```

## Integration with fLexiScribe System

### Workflow Integration

```
1. Lecture Recording
   ↓
2. Transcription (speech-to-text)
   ↓
3. Summary Generation (LLM with comprehensive template)
   ↓
4. Quiz Generation (using this guided approach)
   ↓
5. Quiz Delivery to Students
   ↓
6. Performance Analytics
```

### Quick Reference Checklist

✅ **Before Quiz Generation**:
- [ ] Validate template structure
- [ ] Check concept_map has 5+ core concepts
- [ ] Verify key_points have quiz_potential flags
- [ ] Run quiz potential analysis

✅ **During Quiz Generation**:
- [ ] Follow source priority (35% concept_map, 30% key_points, etc.)
- [ ] Use common_misconceptions for distractors
- [ ] Align with bloom_taxonomy_distribution
- [ ] Track concept coverage

✅ **After Quiz Generation**:
- [ ] Validate question count and difficulty distribution
- [ ] Ensure all focus_areas represented
- [ ] Verify no duplicates
- [ ] Test question clarity

## Version History

- **v2.0** (2026-02-08): Comprehensive template with concept mapping, relationships, Bloom's taxonomy
  - Added concept_map section with core concepts, terminology, formulas, processes
  - Added relationships_and_connections for higher-order questions
  - Added quiz_generation_metadata with Bloom's taxonomy
  - Enhanced key_points with type, difficulty, and quiz_potential flags
  - Integrated learning objectives tracking
  
- **v1.0** (2026-02-08): Initial template structure
  - Basic metadata, final summary, minute summaries
  - Simple key points as string arrays
