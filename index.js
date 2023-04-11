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
    fs.writeFile(`./scripts/${currentTimestamp}.txt`, content, err => {
        if (err) {
            console.error(err);
            return;
        }




        for (let dir of directories) {
            // WRITE GIT COMMIT FILE IN SCRIPT FOLDER


            const collaborators = fs.readFileSync('./collaborators.txt', 'utf8').trim();



            content += `cd ${parentDirectoryPath}\ncd ${dir}\ngit pull origin\ngit add .\ngit commit -s -m "Last updated on ${dateString()}\n\n${collaborators}"\ngit push origin
            `;
        }


        console.log("File created");
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

