const fs = require('fs');
const path = require('path');

console.log('🔍 Verifying SportsTradeX Deployment...\n');

// Check 1: Required files exist
console.log('1. Checking required files...');
const requiredFiles = [
  'package.json',
  'next.config.mjs',
  'tsconfig.json',
  '.env.example',
  'README.md'
];

let allFilesExist = true;
for (const file of requiredFiles) {
  const filePath = path.join(__dirname, '..', file);
  if (fs.existsSync(filePath)) {
    console.log(`   ✅ ${file}`);
  } else {
    console.log(`   ❌ ${file} (MISSING)`);
    allFilesExist = false;
  }
}

// Check 2: Required directories exist
console.log('\n2. Checking required directories...');
const requiredDirs = [
  'src',
  'src/app',
  'src/components',
  'src/lib'
];

for (const dir of requiredDirs) {
  const dirPath = path.join(__dirname, '..', dir);
  if (fs.existsSync(dirPath) && fs.statSync(dirPath).isDirectory()) {
    console.log(`   ✅ ${dir}`);
  } else {
    console.log(`   ❌ ${dir} (MISSING)`);
    allFilesExist = false;
  }
}

// Check 3: Environment variables
console.log('\n3. Checking environment setup...');
const envLocalPath = path.join(__dirname, '..', '.env.local');
if (fs.existsSync(envLocalPath)) {
  console.log('   ✅ .env.local exists');
} else {
  console.log('   ⚠️  .env.local not found (will be created during installation)');
}

// Check 4: Dependencies
console.log('\n4. Checking dependencies...');
try {
  const packageJson = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'package.json'), 'utf8'));
  const depsCount = Object.keys(packageJson.dependencies || {}).length;
  const devDepsCount = Object.keys(packageJson.devDependencies || {}).length;
  console.log(`   ✅ ${depsCount} production dependencies`);
  console.log(`   ✅ ${devDepsCount} development dependencies`);
} catch (error) {
  console.log('   ❌ Failed to read package.json');
}

// Check 5: Build output
console.log('\n5. Checking build status...');
const nextDir = path.join(__dirname, '..', '.next');
if (fs.existsSync(nextDir) && fs.statSync(nextDir).isDirectory()) {
  console.log('   ✅ Application has been built (.next directory exists)');
} else {
  console.log('   ⚠️  Application not yet built (.next directory missing)');
  console.log('     Run "npm run build" to create a production build');
}

console.log('\n📋 Deployment Verification Summary:');
if (allFilesExist) {
  console.log('   ✅ All required files are present');
} else {
  console.log('   ❌ Some required files are missing');
}

console.log('\n🚀 Next Steps:');
console.log('   1. Run "npm install" to install dependencies');
console.log('   2. Run "npm run build" to build the application');
console.log('   3. Run "npm run launch" to start the application');
console.log('   4. Visit http://localhost:3000 to access the application');

console.log('\n💡 Pro Tips:');
console.log('   • Run "npm run health" after starting to verify the application is running');
console.log('   • Check the status page at http://localhost:3000/status');
console.log('   • For production deployment, update AUTH_TOKEN_SECRET in .env.local');