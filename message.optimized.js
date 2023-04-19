const commits = [];

const commitWords = {
    actions: ['fix', 'update', 'refactor', 'improve', 'optimize', 'revert'],
    descriptions: ['bug', 'performance', 'security', 'style', 'typo', 'logic'],
    adjectives: ['duplicate', 'error', 'issue', 'problem', 'conflict', 'mistake'],
    words: ['fix', 'update', 'add', 'remove', 'refactor', 'merge', 'implement', 'optimize', 'reorganize', 'clean'],
    nouns: ['bug', 'feature', 'code', 'function', 'variable', 'library', 'module', 'algorithm', 'interface', 'database']
};

function getRandomWord(type) {
    return commitWords[type][Math.floor(Math.random() * commitWords[type].length)];
}

function generateCommitMessage() {
    const action = getRandomWord('actions');
    const description = getRandomWord('descriptions');
    const adjective = getRandomWord('adjectives');
    const randomWord = getRandomWord('words');
    const randomNoun = getRandomWord('nouns');
    const randomNumber = Math.floor(Math.random() * 100);
    const message = `${description} ${action}: ${randomWord} ${adjective} ${randomNoun} #${randomNumber}`;
    return message;
}

for (let i = 0; i < 50; i++) {
    commits.push(generateCommitMessage());
}

console.log(commits);
