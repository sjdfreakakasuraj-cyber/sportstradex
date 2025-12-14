const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔍 SportsTradeX Pre-Deployment Check\n');

let checkPassed = true;

// Check 1: Required files
console.log('1. Checking required files...');
const requiredFiles = [
  'package.json',
  'next.config.mjs',
  'vercel.json',
  '.env.local'
];

for (const file of requiredFiles) {
  const filePath = path.join(__dirname, '..', file);
  if (fs.existsSync(filePath)) {
    console.log(`   ✅ ${file}`);
  } else {
    console.log(`   ❌ ${file} (MISSING)`);
    checkPassed = false;
  }
}

// Check 2: Supabase configuration
console.log('\n2. Checking Supabase configuration...');
try {
  const envContent = fs.readFileSync(path.join(__dirname, '..', '.env.local'), 'utf8');
  
  if (envContent.includes('https://lztknyehgjbnlexqicxc.supabase.co')) {
    console.log('   ✅ Supabase URL configured');
  } else {
    console.log('   ❌ Supabase URL not found in .env.local');
    checkPassed = false;
  }
  
  if (envContent.includes('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9')) {
    console.log('   ✅ Supabase Anon Key configured');
  } else {
    console.log('   ❌ Supabase Anon Key not found in .env.local');
    checkPassed = false;
  }
} catch (error) {
  console.log('   ❌ Failed to read .env.local');
  checkPassed = false;
}

// Check 3: Dependencies
console.log('\n3. Checking dependencies...');
try {
  const packageJson = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'package.json'), 'utf8'));
  
  const requiredDeps = ['next', 'react', 'react-dom', '@supabase/supabase-js'];
  for (const dep of requiredDeps) {
    if (packageJson.dependencies && packageJson.dependencies[dep]) {
      console.log(`   ✅ ${dep}`);
    } else {
      console.log(`   ❌ ${dep} (MISSING)`);
      checkPassed = false;
    }
  }
} catch (error) {
  console.log('   ❌ Failed to read package.json');
  checkPassed = false;
}

// Check 4: Node.js availability
console.log('\n4. Checking Node.js...');
try {
  const nodeVersion = execSync('node --version', { encoding: 'utf8' }).trim();
  console.log(`   ✅ Node.js ${nodeVersion} available`);
} catch (error) {
  console.log('   ❌ Node.js not found or not in PATH');
  checkPassed = false;
}

// Check 5: Build directory
console.log('\n5. Checking build status...');
const nextDir = path.join(__dirname, '..', '.next');
if (fs.existsSync(nextDir)) {
  console.log('   ✅ Application has been built');
} else {
  console.log('   ⚠️  Application not yet built (will be built during deployment)');
}

console.log('\n📋 Pre-Deployment Check Summary:');
if (checkPassed) {
  console.log('   ✅ All critical checks passed');
  console.log('   🚀 Ready for Vercel deployment!');
} else {
  console.log('   ❌ Some checks failed');
  console.log('   Please fix the issues before deploying');
}

console.log('\n📝 Deployment Instructions:');
console.log('   1. Run "deploy-to-vercel.bat" or');
console.log('   2. Execute "vercel" in this directory');
console.log('   3. Follow the prompts to deploy to Vercel');
console.log('   4. Add environment variables in Vercel dashboard');
console.log('   5. Redeploy after adding environment variables');

if (checkPassed) {
  console.log('\n🎉 Your SportsTradeX application is ready for deployment!');
} else {
  console.log('\n⚠️  Please address the issues above before deploying.');
}