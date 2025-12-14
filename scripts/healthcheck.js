const http = require('http');

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

// Simple health check function
function checkHealth() {
  const options = {
    hostname: HOST,
    port: PORT,
    path: '/api/health',
    method: 'GET',
    timeout: 5000
  };

  const req = http.request(options, (res) => {
    let data = '';
    
    res.on('data', (chunk) => {
      data += chunk;
    });
    
    res.on('end', () => {
      if (res.statusCode === 200) {
        try {
          const jsonData = JSON.parse(data);
          if (jsonData.status === 'ok') {
            console.log('✅ Application is healthy');
            console.log(`   Service: ${jsonData.service}`);
            console.log(`   Timestamp: ${jsonData.timestamp}`);
            process.exit(0);
          } else {
            console.log('❌ Application health check failed');
            console.log(`   Status: ${jsonData.status}`);
            process.exit(1);
          }
        } catch (parseError) {
          console.log('❌ Failed to parse health check response');
          process.exit(1);
        }
      } else {
        console.log(`❌ Health check failed with status code: ${res.statusCode}`);
        process.exit(1);
      }
    });
  });
  
  req.on('error', (error) => {
    console.log('❌ Application is not responding');
    console.log(`   Error: ${error.message}`);
    console.log('   Please ensure the application is running');
    process.exit(1);
  });
  
  req.on('timeout', () => {
    console.log('❌ Health check timed out');
    req.destroy();
    process.exit(1);
  });
  
  req.end();
}

console.log(`Checking application health at http://${HOST}:${PORT}/api/health...`);
checkHealth();