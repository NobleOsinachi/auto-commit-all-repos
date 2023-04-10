const path = require('path');
const fs = require('fs');

const repoDirectoryPath = path.join(__dirname, '..');
console.log(repoDirectoryPath);

const parentDirectoryPath = path.join(__dirname, '..');

let commitMessage = "commit-message";

let message = `${commitMessage}

Signed-off-by: Noble Osinachi <nobleosinachi98@gmail.com>
`;

let repo = ``;

let gitCommand = `
cd ${repo}

git pull origin

git add .

git commit -s -m "${message}"

git push origin

`;



fs.readdir(parentDirectoryPath, { withFileTypes: true }, (err, files) => {
    if (err) {
        console.error(err);
        return;
    }

    const directories = files.filter(file => file.isDirectory()).map(directory => directory.name);
    console.log(directories);

    let script = ``;
    for (let dir of directories) {
        console.log(dir);
    }
});
