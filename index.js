const path = require('path');
const fs = require('fs');

const repoDirectoryPath = path.join(__dirname, '..');
console.log(repoDirectoryPath);

const parentDirectoryPath = path.join(__dirname, '..');

fs.readdir(parentDirectoryPath, { withFileTypes: true }, (err, files) => {
    if (err) {
        // console.log(err);
        return;
    }

    const directories = files.filter(file => file.isDirectory()).map(directory => directory.name);
    console.log(directories);

    let script = ``;
    for (let dir of directories) {
        console.log(dir);
    }
});
