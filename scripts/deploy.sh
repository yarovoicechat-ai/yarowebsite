#!/bin/bash

# Exit on any error
set -e

echo "🚀 Starting Automated Website CI/CD Deployment..."

# 1. Navigate to live website directory
CD_DIR="/root/apps/meethi-chaat-web"
cd "$CD_DIR"
echo "📂 Working Directory: $CD_DIR"

# 2. Sync / Pull latest changes if git repository is set up
if [ -d ".git" ]; then
    echo "📥 Pulling latest changes from GitHub..."
    git pull origin main || echo "⚠️ Git pull skipped"
fi

# 3. Install dependencies
echo "📦 Installing Dependencies..."
npm install --production=false

# 4. Build Next.js Production Bundle
echo "🏗️ Building Next.js Production Bundle..."
npm run build

# 5. Reload / Restart PM2 Process on Port 3005
echo "🔄 Restarting PM2 [web-frontend] on Port 3005..."
PORT=3005 pm2 restart web-frontend --update-env || PORT=3005 pm2 start npm --name "web-frontend" -- start

echo "🎉 SUCCESS! Meethi Chat Website CI/CD Deployment Finished & Live!"
