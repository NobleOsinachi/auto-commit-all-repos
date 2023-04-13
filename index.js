const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const { timeStamp } = require("console");

const parentDirectoryPath = path.join(__dirname, '..');
const currentTimestamp = Math.floor(Date.now() / 1000);
let content = "";

fs.readdir(parentDirectoryPath, { withFileTypes: true }, (err, files) => {
    if (err) {
        console.error(err);
        return;
    }

    // const directories = files.filter(file => file.isDirectory()).map(directory => directory.name);

    let directories = files.filter(file => {
        // Check if the file is a directory
        if (file.isDirectory()) {
            // Check if the directory contains a .git folder
            return fs.existsSync(`${parentDirectoryPath}/${file.name}/.git`);
        }
        return false;
    }).map(directory => directory.name);

    for (let dir of directories) {

        console.log(directories);

        console.log(process.cwd());

        // WRITE GIT COMMIT FILE IN SCRIPT FOLDER
        const collaborators = fs.readFileSync('./collaborators.txt', 'utf8').trim();
        content += `ECHO Current repo is "${dir}"\n\ncd "${parentDirectoryPath}"\n\ncd "${dir}"\n\nNew-Item -ItemType File -Path "logs\\${currentTimestamp}.log" -Force\n\ngit pull origin\n\ngit add .\n\ngit commit -s -m "Last updated on ${dateString()}\n\n${collaborators}"\n\ngit push origin\n\n`;
    }


    // save script as powershell instead of batch
    let file = `./scripts/${currentTimestamp}.ps1`;

    fs.writeFile(file, content, err => {
        // if (err) { console.error(err);return; }

        if (err) throw err;

        console.log("File created at:", currentTimestamp);

        // execute the script in a new powershell window

        command = `start powershell .\\${file}`;



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

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const dayOfWeek = daysOfWeek[date.getDay()];
    const monthOfYear = monthsOfYear[date.getMonth()];
    const dayOfMonth = date.getDate();
    const year = date.getFullYear();
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

    const meridiem = hours < 12 ? 'AM' : 'PM';

    hours = hours % 12;
    hours = hours ? hours : 12;

    const dateString = `${dayOfWeek} ${monthOfYear} ${dayOfMonth} ${year} at ${hours.toString().padStart(2, '0')}:${minutes}:${seconds} ${meridiem}`;

    return dateString;
}
