#!/bin/bash

# Simple script to run local server for Liga RW development
# This solves CORS issues when loading JSON files

echo "🚀 Starting Liga RW Local Development Server..."
echo "📁 Current directory: $(pwd)"
echo "🌐 Server will be available at: http://localhost:3000"
echo "🎯 Main site: http://localhost:3000/index.html"
echo "⚙️  Admin panel: http://localhost:3000/admin.html" 
echo "🧪 Database test: http://localhost:3000/test-database.html"
echo ""
echo "Press Ctrl+C to stop the server"
echo "----------------------------------------"

# Check if Python 3 is available
if command -v python3 &> /dev/null; then
    echo "Using Python 3 HTTP server..."
    python3 -m http.server 3000
elif command -v python &> /dev/null; then
    echo "Using Python 2 HTTP server..."
    python -m SimpleHTTPServer 3000
elif command -v node &> /dev/null; then
    echo "Trying to use Node.js live-server..."
    if command -v npx &> /dev/null; then
        npx live-server --port=3000 --entry-file=index.html
    else
        echo "❌ Please install live-server: npm install -g live-server"
        exit 1
    fi
else
    echo "❌ No suitable HTTP server found!"
    echo "Please install either:"
    echo "  - Python 3: python3 -m http.server 3000"
    echo "  - Node.js: npm install -g live-server"
    exit 1
fi
