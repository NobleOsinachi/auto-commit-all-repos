const path = require('path');
const fs = require('fs');


const parentDirectoryPath = path.join(__dirname, '..');
const currentTimestamp = Math.floor(Date.now() / 1000);



fs.readdir(parentDirectoryPath, { withFileTypes: true }, (err, files) => {
    if (err) {
        console.error(err);
        return;
    }

    const directories = files.filter(file => file.isDirectory()).map(directory => directory.name);


    let content = "";

    for (let dir of directories) {
        // WRITE GIT COMMIT FILE IN SCRIPT FOLDER
        const collaborators = fs.readFileSync('./collaborators.txt', 'utf8').trim();
        content += `# Current repo is "${dir}"\n\ncd "${parentDirectoryPath}"\n\ncd "${dir}"\n\ngit pull origin\n\ngit add .\n\ngit commit -s -m "Last updated on ${dateString()}\n\n${collaborators}"\n\ngit push origin\n\n
        `;
    }

    fs.writeFile(`./scripts/${currentTimestamp}.txt`, content, err => {
        if (err) {
            console.error(err);
            return;
        }


        console.log("File created", currentTimestamp);
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
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const meridiem = hours < 12 ? 'AM' : 'PM';

    hours = hours % 12;
    hours = hours ? hours : 12;

    const dateString = `${dayOfWeek} ${monthOfYear} ${dayOfMonth} ${year} at ${hours}:${minutes}:${seconds}${meridiem}`;

    // console.log(dateString);
    return dateString;

}

