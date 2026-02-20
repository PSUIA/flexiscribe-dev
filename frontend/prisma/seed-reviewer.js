require('dotenv').config();
const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');

/**
 * Seeds a sample transcription (reviewer) into the database.
 * Links it to the first available educator and class found in the DB.
 * Also reads matching JSON files from backend/output/ for transcript & summary data.
 */
async function main() {
  console.log("Starting reviewer / transcription seed...\n");

  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  });

  try {
    // ── 1. Find an educator ──────────────────────────────────────────────
    const educatorRow = await pool.query(
      'SELECT e.id, e."userId", e."fullName" FROM "Educator" e LIMIT 1'
    );

    if (educatorRow.rows.length === 0) {
      console.error("❌ No educator found in the database. Please create an educator account first.");
      await pool.end();
      return;
    }

    const educator = educatorRow.rows[0];
    console.log(`Found educator: ${educator.fullName} (${educator.id})`);

    // ── 2. Find a class belonging to this educator ───────────────────────
    const classRow = await pool.query(
      'SELECT id, subject, section, "classCode" FROM "Class" WHERE "educatorId" = $1 LIMIT 1',
      [educator.id]
    );

    let classId = null;
    let courseName = "CPP117";

    if (classRow.rows.length > 0) {
      classId = classRow.rows[0].id;
      courseName = classRow.rows[0].subject;
      console.log(`Found class: ${classRow.rows[0].subject} – Section ${classRow.rows[0].section}`);
    } else {
      console.log("No class found for educator. Transcription will be created without a class link.");
    }

    // ── 3. Load JSON files from backend/output ───────────────────────────
    const backendOutput = path.resolve(__dirname, '..', '..', 'backend', 'output', 'CPP117');

    let transcriptJson = null;
    let summaryJson = null;
    let rawText = "";

    // Transcript JSON
    const transcriptPath = path.join(backendOutput, 'transcripts', 'transcript_20260215_100000.json');
    if (fs.existsSync(transcriptPath)) {
      transcriptJson = JSON.parse(fs.readFileSync(transcriptPath, 'utf-8'));
      // Build raw text from chunks
      rawText = transcriptJson.chunks.map(c => c.text).join(' ');
      console.log(`Loaded transcript JSON (${transcriptJson.chunks.length} chunks)`);
    } else {
      console.log(`Transcript file not found at ${transcriptPath}`);
    }

    // Final summary / Cornell notes JSON (this is the "reviewer" content)
    const summaryPath = path.join(backendOutput, 'final_summaries', 'final_cornell_20260215_100000.json');
    if (fs.existsSync(summaryPath)) {
      summaryJson = JSON.parse(fs.readFileSync(summaryPath, 'utf-8'));
      console.log(`Loaded summary JSON: "${summaryJson.title}"`);
    } else {
      console.log(`Summary file not found at ${summaryPath}`);
    }

    // ── 4. Check if seed transcription already exists ────────────────────
    const existing = await pool.query(
      'SELECT id FROM "Transcription" WHERE "sessionId" = $1',
      ['seed-session-001']
    );

    // ── 5. Build content (readable HTML summary) ─────────────────────────
    let content = "";
    if (summaryJson) {
      content += `<h1>${summaryJson.title}</h1>\n`;
      content += `<h2>Cue Questions</h2>\n<ul>\n`;
      (summaryJson.cue_questions || []).forEach(q => {
        content += `  <li>${q}</li>\n`;
      });
      content += `</ul>\n`;
      content += `<h2>Notes</h2>\n<ul>\n`;
      (summaryJson.notes || []).forEach(n => {
        content += `  <li>${n}</li>\n`;
      });
      content += `</ul>\n`;
      content += `<h2>Summary</h2>\n<p>${summaryJson.summary}</p>\n`;
    } else {
      content = rawText || "Sample transcription content.";
    }

    // ── 6. Insert transcription ──────────────────────────────────────────
    if (existing.rows.length > 0) {
      console.log("\n⚠️  Seed transcription already exists. Skipping creation.");
      console.log(`   Transcription ID: ${existing.rows[0].id}`);
    } else {
      const result = await pool.query(
      `INSERT INTO "Transcription" (
        id, title, course, date, duration, content, "rawText",
        "transcriptJson", "summaryJson", status, "sessionId",
        "classId", "educatorId", "createdAt", "updatedAt"
      ) VALUES (
        gen_random_uuid(), $1, $2, $3, $4, $5, $6,
        $7, $8, $9, $10,
        $11, $12, NOW(), NOW()
      ) RETURNING id, title`,
      [
        summaryJson?.title || "OOP Fundamentals in C++",     // title
        courseName,                                           // course
        "2026-02-15",                                         // date
        "45m 0s",                                             // duration
        content,                                              // content (HTML)
        rawText || null,                                      // rawText
        transcriptJson ? JSON.stringify(transcriptJson) : null,  // transcriptJson
        summaryJson ? JSON.stringify(summaryJson) : null,        // summaryJson
        "COMPLETED",                                          // status
        "seed-session-001",                                   // sessionId
        classId,                                              // classId
        educator.id,                                          // educatorId
      ]
    );

    const created = result.rows[0];

    console.log("\n✅ Transcription (reviewer) seeded successfully!");
    console.log(`   ID:     ${created.id}`);
    console.log(`   Title:  ${created.title}`);
    console.log(`   Course: ${courseName}`);
    console.log(`   Status: COMPLETED`);
    console.log(`   Educator: ${educator.fullName}`);
    if (classId) {
      console.log(`   Class:  ${classRow.rows[0].subject} – Section ${classRow.rows[0].section}`);
    }

    console.log("\nThis transcription will now appear in:");
    console.log("  • Educator → Transcriptions page");
    console.log("  • Student → Reviewers page (for enrolled students)");
    }

    // ── 7. Seed a Lesson from the transcription content ──────────────────
    const existingLesson = await pool.query(
      'SELECT id FROM "Lesson" WHERE title = $1 AND subject = $2',
      [summaryJson?.title || "OOP Fundamentals in C++", courseName]
    );

    if (existingLesson.rows.length > 0) {
      console.log("\n⚠️  Lesson already exists. Skipping creation.");
      console.log(`   Lesson ID: ${existingLesson.rows[0].id}`);
    } else {
      // Use the final summary as lesson content (Ollama uses this to generate quizzes)
      let lessonContent = content;
      if (summaryJson) {
        // Build plain text from the summary JSON for better quiz generation
        const parts = [];
        if (summaryJson.title) parts.push(summaryJson.title);
        if (summaryJson.cue_questions?.length) parts.push('Key Questions:\n' + summaryJson.cue_questions.join('\n'));
        if (summaryJson.notes?.length) parts.push('Notes:\n' + summaryJson.notes.join('\n'));
        if (summaryJson.summary) parts.push('Summary:\n' + summaryJson.summary);
        lessonContent = parts.join('\n\n');
      }

      const lessonResult = await pool.query(
        `INSERT INTO "Lesson" (id, title, subject, content, "createdAt", "updatedAt")
         VALUES (gen_random_uuid(), $1, $2, $3, NOW(), NOW()) RETURNING id, title`,
        [
          summaryJson?.title || "OOP Fundamentals in C++",
          courseName,
          lessonContent,
        ]
      );

      const createdLesson = lessonResult.rows[0];
      console.log("\n✅ Lesson seeded successfully!");
      console.log(`   ID:      ${createdLesson.id}`);
      console.log(`   Title:   ${createdLesson.title}`);
      console.log(`   Subject: ${courseName}`);
      console.log("\nThis lesson will now appear in:");
      console.log("  • Student → Quizzes → Generate Quiz dropdown");
    }

    await pool.end();
  } catch (error) {
    console.error("❌ Error seeding transcription:", error);
    await pool.end();
    throw error;
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
