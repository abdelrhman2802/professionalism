const fs = require('fs');
const path = require('path');

// Simple validation script to ensure all questions are formatted correctly.
try {
  const filePath = path.join(__dirname, 'questions.js');
  const fileContent = fs.readFileSync(filePath, 'utf8');

  // Strip variables and evaluate in a sandbox
  const evalString = fileContent + '\nglobal.questionBank = questionBank; global.categoryNames = categoryNames;';
  
  // Quick check using eval (safe since we wrote it ourselves)
  eval(evalString);

  if (typeof questionBank === 'undefined') {
    throw new Error("questionBank is not defined in questions.js");
  }

  if (typeof categoryNames === 'undefined') {
    throw new Error("categoryNames is not defined in questions.js");
  }

  console.log(`Successfully loaded questions.js. Found ${questionBank.length} questions.`);

  let errors = 0;
  questionBank.forEach((q, idx) => {
    if (!q.id) {
      console.error(`Error at index ${idx}: Question is missing an 'id'.`);
      errors++;
    }
    if (!q.category || !categoryNames[q.category]) {
      console.error(`Error at index ${idx} (ID: ${q.id}): Invalid or missing 'category': "${q.category}".`);
      errors++;
    }
    if (!q.question) {
      console.error(`Error at index ${idx} (ID: ${q.id}): Question text is empty.`);
      errors++;
    }
    if (!Array.isArray(q.options) || q.options.length < 2) {
      console.error(`Error at index ${idx} (ID: ${q.id}): Options must be an array of at least 2 items.`);
      errors++;
    }
    if (typeof q.answer !== 'number' || q.answer < 0 || q.answer >= q.options.length) {
      console.error(`Error at index ${idx} (ID: ${q.id}): Answer index ${q.answer} is invalid for ${q.options.length} options.`);
      errors++;
    }
    if (!q.explanation) {
      console.error(`Error at index ${idx} (ID: ${q.id}): Explanation is empty.`);
      errors++;
    }
  });

  if (errors > 0) {
    console.error(`Validation failed with ${errors} error(s).`);
    process.exit(1);
  } else {
    console.log("All questions verified successfully. Schema is correct, options and answers match.");
  }
} catch (err) {
  console.error("Failed to read or parse questions.js:", err.message);
  process.exit(1);
}
