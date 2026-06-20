const fs = require('fs');
const path = require('path');

try {
  const qPath = path.join(__dirname, 'questions.js');
  const qContent = fs.readFileSync(qPath, 'utf8');

  const appPath = path.join(__dirname, 'app.js');
  const appContent = fs.readFileSync(appPath, 'utf8');

  // Mock global browser environment
  const mockWindow = {
    addEventListener: () => {},
    localStorage: {
      getItem: () => null,
      setItem: () => {}
    },
    AudioContext: function() {
      return {
        createOscillator: () => ({ frequency: { setValueAtTime: () => {} }, connect: () => {}, start: () => {}, stop: () => {} }),
        createGain: () => ({ gain: { setValueAtTime: () => {}, exponentialRampToValueAtTime: () => {} }, connect: () => {} }),
        destination: {}
      };
    }
  };

  const mockDocument = {
    querySelectorAll: () => [],
    getElementById: () => ({ addEventListener: () => {}, style: {}, textContent: '' }),
    querySelector: () => ({ addEventListener: () => {}, style: {}, textContent: '' }),
    createElement: () => ({ style: {} }),
    addEventListener: () => {}
  };

  // Evaluate both scripts sequentially in the SAME scope to check for redeclarations
  const testScript = `
    const window = mockWindow;
    const document = mockDocument;
    const localStorage = mockWindow.localStorage;
    
    // Evaluate questions.js
    ${qContent}
    
    // Evaluate app.js
    ${appContent}
  `;

  const runTest = new Function('mockWindow', 'mockDocument', testScript);
  runTest(mockWindow, mockDocument);
  console.log("Global scope verification successful! No redeclarations found.");
} catch (err) {
  console.error("Global scope execution error:", err.message);
  process.exit(1);
}
