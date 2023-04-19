const randomCommitMessage = require('./message');

for (let index = 0; index < 100; index++) {
    const now = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false
    };
    console.log(
        now.toLocaleString('en-US', options),
        randomCommitMessage()
    );
}
