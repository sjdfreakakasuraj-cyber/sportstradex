const { spawn } = require('child_process');
const path = require('path');

console.log('🚀 Starting SportsTradeX Application...\n');

// Start the Next.js application
const nextProcess = spawn('npm', ['run', 'start'], {
  stdio: 'inherit',
  shell: true
});

nextProcess.on('close', (code) => {
  console.log(`\nApplication exited with code ${code}`);
});

nextProcess.on('error', (error) => {
  console.error('Failed to start application:', error);
});

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\nShutting down application...');
  nextProcess.kill('SIGINT');
});

process.on('SIGTERM', () => {
  console.log('\nShutting down application...');
  nextProcess.kill('SIGTERM');
});

console.log('Application starting... Please wait.');
console.log('Once started, access the application at http://localhost:3000');
console.log('Press Ctrl+C to stop the application.\n');