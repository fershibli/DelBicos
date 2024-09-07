const { exec } = require('child_process');

function startServer() {
  const server = exec('ng serve --open');

  server.stdout.on('data', (data) => {
    console.log(data);
  });

  server.stderr.on('data', (data) => {
    console.error(data);
    if (data.includes('EADDRINUSE')) {
      killPortAndRestart();
    }
  });

  server.on('close', (code) => {
    console.log(`Server process exited with code ${code}`);
  });
}

function killPortAndRestart() {
  console.log('Killing process on port 4200...');
  exec('npx kill-port 4200', (err) => {
    if (err) {
      console.error(`Error killing process: ${err}`);
    } else {
      console.log('Process killed. Restarting server...');
      startServer();
    }
  });
}

startServer();
