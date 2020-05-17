const { spawn } = require('child_process');

spawn('node', ['dist/cli.js', '-h']);