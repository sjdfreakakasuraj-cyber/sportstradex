const fs = require('fs');
const path = require('path');

console.log('Running post-install script...');

// Check if .env.local exists, if not create it from .env.example
const envLocalPath = path.join(__dirname, '..', '.env.local');
const envExamplePath = path.join(__dirname, '..', '.env.example');

if (!fs.existsSync(envLocalPath)) {
  console.log('Creating .env.local from .env.example...');
  try {
    fs.copyFileSync(envExamplePath, envLocalPath);
    console.log('✓ .env.local created successfully');
  } catch (error) {
    console.log('⚠ Warning: Could not create .env.local file');
    console.log('Please create it manually from .env.example');
  }
} else {
  console.log('✓ .env.local already exists');
}

console.log('\nPost-install setup complete!');
console.log('\nNext steps:');
console.log('1. Review .env.local and update values as needed');
console.log('2. Run "npm run build" to build the application');
console.log('3. Run "npm run start" to start the production server');