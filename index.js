const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const randomCommitMessage = require('./message');

// randomCommitMessage.randomCommitMessage();
const parentDirectoryPath = path.join(__dirname, '..');
const currentTimestamp = Math.floor(Date.now() / 1000);
let content = "";

fs.readdir(parentDirectoryPath, { withFileTypes: true }, (err, files) => {
    if (err) {
        console.error(err);
        return;
    }

    let directories = files.filter(file => {
        // Check if the file is a directory
        if (file.isDirectory()) {
            // Check if the directory contains a .git folder
            return fs.existsSync(`${parentDirectoryPath}/${file.name}/.git`);
        }
        return false;
    }).map(directory => directory.name);

    for (let dir of directories) {
        // WRITE GIT COMMIT FILE IN SCRIPT FOLDER
        const collaborators = fs.readFileSync('./collaborators.txt', 'utf8').trim();
        content += `ECHO Current repo is "${dir}"\n\ncd "${parentDirectoryPath}"\n\ncd "${dir}"\n\nNew-Item -ItemType File -Path "logs\\${currentTimestamp}.log" -Force\n\ngit pull origin\n\ngit add .\n\ngit commit -s -m "${randomCommitMessage()}, updated on ${dateString()}\n\n${collaborators}"\n\ngit push origin\n\n`;
    }

    // save script as powershell instead of batch
    let file = `./scripts/${currentTimestamp}.ps1`;

    fs.writeFile(file, content, err => {
        if (err) throw err;

        console.log("File created at:", currentTimestamp);

        // execute the script in a new powershell window
        // command = `start powershell .\\${file}`;

        command = `start powershell.exe -WindowStyle Hidden -File .\\${file}`;


        exec(command, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.error(`stderr: ${stderr}`);
                return;
            }
            console.log(`stdout: ${stdout}`);
        });
    });
});

function dateString() {
    const date = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
    return date.toLocaleDateString('en-US', options);
}
