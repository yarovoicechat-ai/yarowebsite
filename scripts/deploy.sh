#!/bin/bash

# Exit on any error
set -e

echo "🚀 Starting Automated Website CI/CD Deployment..."

# 1. Navigate to live website directory
CD_DIR="/root/apps/Yaro/YaroWebsite"
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

# 5. Reload / Restart PM2 Process on Port 3105
echo "🔄 Restarting PM2 [yaro-web] on Port 3105..."
PORT=3105 pm2 restart yaro-web --update-env || PORT=3105 pm2 start npm --name "yaro-web" -- start

echo "🎉 SUCCESS! Yaro Website CI/CD Deployment Finished & Live!"
