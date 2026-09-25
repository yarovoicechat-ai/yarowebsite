#!/bin/bash

# Navigate to live website directory
cd /root/apps/Yaro/YaroWebsite

# Fetch latest commits from remote
git fetch origin main > /dev/null 2>&1 || exit 0

LOCAL=$(git rev-parse HEAD 2>/dev/null || echo "1")
REMOTE=$(git rev-parse origin/main 2>/dev/null || echo "2")

# Check if remote has new commits
if [ "$LOCAL" != "$REMOTE" ]; then
    echo "⚡ GitHub Push Detected! Auto-pulling and deploying website..."
    git pull origin main
    npm install --production=false
    npm run build
    PORT=3105 pm2 restart yaro-web --update-env
    echo "🎉 Auto-Sync Deployment Completed Successfully!"
fi
