const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Configuration
const config = {
  siteName: 'Fred Adun Consulting',
  domain: 'fredadun.com',
  buildCommand: 'npm run build',
  outputDir: '.next'
};

console.log(`\n🚀 Starting deployment process for ${config.siteName}...\n`);

// Step 1: Check if all dependencies are installed
console.log('📦 Checking dependencies...');
try {
  execSync('npm ci', { stdio: 'inherit' });
  console.log('✅ Dependencies installed successfully\n');
} catch (error) {
  console.error('❌ Failed to install dependencies:', error.message);
  process.exit(1);
}

// Step 2: Run linting
console.log('🔍 Running linting...');
try {
  execSync('npm run lint', { stdio: 'inherit' });
  console.log('✅ Linting passed\n');
} catch (error) {
  console.error('❌ Linting failed:', error.message);
  console.log('Continuing despite linting errors...\n');
}

// Step 3: Build the project
console.log(`🔨 Building project with command: ${config.buildCommand}...`);
try {
  execSync(config.buildCommand, { stdio: 'inherit' });
  console.log('✅ Build completed successfully\n');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}

// Step 4: Check if the output directory exists
console.log(`📂 Checking if build output directory exists: ${config.outputDir}...`);
if (fs.existsSync(path.join(process.cwd(), config.outputDir))) {
  console.log('✅ Build output directory exists\n');
} else {
  console.error(`❌ Build output directory not found: ${config.outputDir}`);
  process.exit(1);
}

// Step 5: Provide deployment instructions
console.log(`
🎉 Deployment preparation complete!

Your site is now ready to be deployed. Here are your next steps:

1️⃣ Create an account on Vercel (https://vercel.com) if you don't have one already

2️⃣ Install the Vercel CLI:
   npm install -g vercel

3️⃣ Deploy your site with one of these methods:
   
   A. Using Vercel CLI:
      vercel

   B. Using Vercel Dashboard:
      - Push your code to GitHub
      - Import your repository in the Vercel dashboard
      - Configure your project settings
      - Deploy

4️⃣ Set up your custom domain (${config.domain}):
   - In the Vercel dashboard, go to your project settings
   - Navigate to the "Domains" section
   - Add your domain and follow the DNS configuration instructions

5️⃣ Set up continuous deployment:
   - Connect your GitHub repository to Vercel
   - Configure automatic deployments on push to main branch

Your site will be optimized for performance with:
- Automatic image optimization
- Edge caching
- Serverless functions
- Global CDN distribution

For additional help, visit: https://vercel.com/docs
`);
