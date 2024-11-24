const { exec } = require("child_process");

//get args after 'node start.js'
const args = process.argv.slice(2);

function startServer() {
  const command = `ng serve ${args[0] || ""} --open`;
  console.log(`Starting server with command: ${command}`);
  const server = exec(command);

  server.stdout.on("data", (data) => {
    console.log(data);
  });

  server.stderr.on("data", (data) => {
    console.error(data);
    if (data.includes("EADDRINUSE")) {
      killPortAndRestart();
    }
  });

  server.on("close", (code) => {
    console.log(`Server process exited with code ${code}`);
  });
}

function killPortAndRestart() {
  console.log("Killing process on port 4200...");
  exec("npx kill-port 4200", (err) => {
    if (err) {
      console.error(`Error killing process: ${err}`);
    } else {
      console.log("Process killed. Restarting server...");
      startServer();
    }
  });
}

startServer();
