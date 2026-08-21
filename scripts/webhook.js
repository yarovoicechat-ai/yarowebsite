const http = require('http');
const { exec } = require('child_process');

const PORT = 9001;

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && (req.url === '/webhook' || req.url === '/')) {
    console.log('⚡ GitHub Push Detected! Auto-Pulling latest code and building website...');
    
    const command = `cd /root/apps/meethi-chaat-web && git pull origin main && npm install --production=false && npm run build && PORT=3005 pm2 restart web-frontend --update-env`;

    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error('❌ Auto-Pull Error:', error.message);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ success: false, error: error.message }));
      }
      console.log('🎉 Auto-Pull Deployment Output:\n', stdout);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: true, message: 'Website Auto-Pulled & Deployed Successfully!' }));
    });
  } else {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Meethi Chat GitHub Webhook Listener is Online & Ready');
  }
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 GitHub Webhook Listener active on http://0.0.0.0:${PORT}/webhook`);
});
