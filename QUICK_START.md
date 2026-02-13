# Quick Start Guide - Quiz Generation Template v2.0

## 🚀 Get Started in 5 Minutes

This guide will help you quickly understand and use the comprehensive quiz generation template for fLexiScribe.

## Step 1: Understand Your Input

You start with a **lecture transcription summary** in JSON format. This is what your summarization AI generates after processing a lecture recording.

**File**: `summary_output_YYYYMMDD_HHMMSS.json`

## Step 2: Template Structure at a Glance

The v2.0 template has **6 main sections**:

```
📋 Metadata
   └─ Lecture info, learning objectives, prerequisites

📝 Final Summary  
   └─ Overall summary, main arguments, key takeaways

🧠 Concept Map (NEW - most important!)
   ├─ Core concepts with definitions
   ├─ Terminology
   ├─ Formulas
   └─ Processes

⏱️ Minute Summaries
   └─ Time-stamped content with enhanced key points

🔗 Relationships & Connections (NEW)
   ├─ Cause-effect
   ├─ Comparisons
   └─ Hierarchies

🎯 Quiz Generation Metadata (NEW)
   └─ AI recommendations for optimal quiz structure
```

## Step 3: Priority for Quiz Generation

**Where most questions come from** (in order):

1. **Concept Map** (35-40%) → Definitions, vocabulary
2. **Key Points** (30-35%) → Facts, recall
3. **Relationships** (15-20%) → Analysis, comparison
4. **Processes** (10-15%) → Sequencing, procedures
5. **Summaries** (5-10%) → Big picture understanding

## Step 4: Quick Template Filling

### Minimum Required Fields

```json
{
  "metadata": {
    "lecture_info": {
      "title": "Your Lecture Title",
      "subject": "Subject Area",
      "difficulty_level": "beginner",
      "duration_minutes": 45
    }
  },
  "final_summary": {
    "response": {
      "summary": "3-5 sentence overview of entire lecture",
      "key_takeaways": [
        "Most important takeaway",
        "Second important point",
        "Third key point"
      ]
    }
  },
  "concept_map": {
    "core_concepts": [
      {
        "concept_id": "C001",
        "name": "Main Concept Name",
        "definition": "Clear, concise definition",
        "category": "fundamental"
      }
    ]
  },
  "minute_summaries": [
    {
      "minute": 1,
      "summary": "What was covered this minute",
      "key_points": [
        {
          "point": "Important fact or concept",
          "type": "fact",
          "difficulty": "easy",
          "quiz_potential": {
            "multiple_choice": true
          }
        }
      ]
    }
  ]
}
```

### Recommended Fields for Better Quizzes

Add these for 50% better quiz quality:

```json
{
  "concept_map": {
    "core_concepts": [
      {
        "common_misconceptions": [
          "Common wrong belief about this concept"
        ],
        "examples": [
          "Real-world example"
        ],
        "related_concepts": ["C002", "C003"]
      }
    ],
    "terminology": [
      {
        "term": "Technical term",
        "definition": "What it means",
        "context": "How it's used"
      }
    ]
  },
  "relationships_and_connections": {
    "cause_effect": [
      {
        "cause": "What causes something",
        "effect": "What results"
      }
    ],
    "comparisons": [
      {
        "item_a": "Thing A",
        "item_b": "Thing B",
        "differences": ["How they differ"]
      }
    ]
  }
}
```

## Step 5: Common Patterns

### Pattern A: Simple Fact → Multiple Choice

**Source**:
```json
{
  "point": "Photosynthesis occurs in chloroplasts",
  "type": "fact",
  "difficulty": "easy"
}
```

**Generated Question**:
```
Q: "Where does photosynthesis occur?"
A: Chloroplasts ✓
B: Mitochondria
C: Nucleus
D: Ribosomes
```

### Pattern B: Concept + Misconception → Better Multiple Choice

**Source**:
```json
{
  "concept_id": "C003",
  "name": "Chlorophyll",
  "definition": "Green pigment that absorbs light",
  "common_misconceptions": [
    "Absorbs green light"
  ]
}
```

**Generated Question**:
```
Q: "What does chlorophyll do?"
A: Absorbs green light ← Uses misconception as distractor!
B: Absorbs light energy ✓
C: Stores glucose
D: Releases oxygen
```

**See the difference?** Misconceptions make realistic wrong answers!

### Pattern C: Cause-Effect → Analysis Question

**Source**:
```json
{
  "cause": "Temperature increases above optimum",
  "effect": "Enzyme denaturation occurs"
}
```

**Generated Question**:
```
Q: "What happens when temperature exceeds the optimum for an enzyme?"
A: Enzyme denaturation occurs ✓
B: Activity increases proportionally
C: No change in activity
D: Enzyme duplicates itself
```

## Step 6: Field Explanations

### quiz_potential Flags

Tell the AI which question types work for each key point:

```json
"quiz_potential": {
  "multiple_choice": true,    // ✅ Good for 4-option questions
  "true_false": true,         // ✅ Can be stated as T/F
  "short_answer": false,      // ❌ Too simple for explanation
  "fill_blank": true          // ✅ Works as fill-in-blank
}
```

### Key Point Types

```json
"type": "definition"     // → Concept definitions
"type": "fact"          // → Specific facts, dates, names
"type": "example"       // → Real-world examples
"type": "explanation"   // → How/why something works
"type": "comparison"    // → Differences/similarities
"type": "process"       // → Step-by-step procedures
```

### Difficulty Levels

```json
"difficulty": "easy"     // → Direct recall, basic understanding
"difficulty": "medium"   // → Application, deeper comprehension
"difficulty": "hard"     // → Analysis, synthesis, evaluation
```

### Concept Categories

```json
"category": "fundamental"    // → Basic, foundational concepts
"category": "intermediate"   // → Builds on fundamentals  
"category": "advanced"       // → Complex, specialized
"category": "application"    // → Real-world use cases
```

## Step 7: Testing Your Template

Before generating quizzes, validate your template:

### Quick Validation Checklist

✅ **Structure**:
- [ ] Has metadata section
- [ ] Has final_summary with summary and key_takeaways
- [ ] Has at least 5 concepts in concept_map
- [ ] Has minute_summaries with content

✅ **Quiz Potential**:
- [ ] At least 20 key points total
- [ ] At least 10 key points with quiz_potential flags
- [ ] At least 3 concepts with definitions
- [ ] At least 2 relationships defined

✅ **Quality**:
- [ ] Summaries are complete sentences
- [ ] Definitions are clear and concise
- [ ] No duplicate content
- [ ] Concept IDs are consistent

### Expected Question Yield

| Template Quality | Expected Questions |
|-----------------|-------------------|
| **Minimal** (just required fields) | 5-8 questions |
| **Good** (+ recommended fields) | 10-15 questions |
| **Excellent** (full v2.0 features) | 15-25 questions |

## Step 8: Generate Your First Quiz

Once you have a valid template, call the quiz generation API:

```json
POST /api/quiz/generate

{
  "summary_data": { /* your filled template */ },
  "quiz_parameters": {
    "num_questions": 10,
    "use_metadata_recommendations": true
  }
}
```

The AI will:
1. Extract concepts from your template
2. Use misconceptions for distractors
3. Follow Bloom's taxonomy distribution
4. Generate questions matching the optimal mix
5. Return a complete quiz with explanations

## Common Mistakes to Avoid

❌ **Don't**: Leave concept_map empty
✅ **Do**: Add at least 5 core concepts with definitions

❌ **Don't**: Use simple strings for key_points
✅ **Do**: Use structured objects with type, difficulty, quiz_potential

❌ **Don't**: Ignore relationships_and_connections
✅ **Do**: Add at least 3-5 cause-effect or comparison relationships

❌ **Don't**: Make all difficulty levels the same
✅ **Do**: Have a mix: 40% easy, 40% medium, 20% hard

❌ **Don't**: Skip common_misconceptions
✅ **Do**: Add 1-2 misconceptions per major concept (great for distractors!)

## Example Workflow

1. **Lecture recorded** → 45-minute biology lecture on photosynthesis
2. **Transcription** → Speech-to-text conversion
3. **Summarization** → AI generates v2.0 template
   - 8 core concepts identified
   - 23 key points extracted
   - 7 cause-effect relationships found
   - 3 comparisons documented
4. **Quiz generation** → AI creates 12-question quiz
   - 6 multiple choice (from concepts + misconceptions)
   - 3 true/false (from key points)
   - 2 short answer (from processes)
   - 1 fill-blank (from terminology)
5. **Student takes quiz** → Receives rich explanations with hints
6. **Analytics** → System tracks concept mastery

## Next Steps

📖 **Read**:
- [QUIZ_GENERATION_GUIDE.md](QUIZ_GENERATION_GUIDE.md) - Complete guide
- [TEMPLATE_V2_IMPROVEMENTS.md](TEMPLATE_V2_IMPROVEMENTS.md) - What's new in v2.0

👀 **Review**:
- [quiz_generation_template.json](quiz_generation_template.json) - Full template
- [quiz_source_example.json](quiz_source_example.json) - Complete example

🛠️ **Implement**:
- Set up your summarization AI to output v2.0 format
- Integrate quiz generation API
- Test with sample lectures

## Support

Questions? Check:
- Template validation errors → See "Validation Rules" in main guide
- Poor quiz quality → Ensure concept_map is well-populated
- Not enough questions → Add more key_points with quiz_potential flags
- Questions too easy → Add more relationships for higher-order questions

---

**Ready to start?** Open [quiz_generation_template.json](quiz_generation_template.json) and begin filling in your lecture data!
