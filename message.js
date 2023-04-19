function randomCommitMessage() {
    const commits = [];

    const actions = ['fix', 'update', 'refactor', 'improve', 'optimize', 'revert'];
    const descriptions = ['bug', 'performance', 'security', 'style', 'typo', 'logic'];
    const adjectives = ['duplicate', 'error', 'issue', 'problem', 'conflict', 'mistake'];
    const words = ['fix', 'update', 'add', 'remove', 'refactor', 'merge', 'implement', 'optimize', 'reorganize', 'clean']; const nouns = ['bug', 'feature', 'code', 'function', 'variable', 'library', 'module', 'algorithm', 'interface', 'database'];


    const action = actions[Math.floor(Math.random() * actions.length)];
    const description = descriptions[Math.floor(Math.random() * descriptions.length)];
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomWord = words[Math.floor(Math.random() * words.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    const randomNumber = Math.floor(Math.random() * 100);
    const message = `${description} ${action}: ${randomWord} ${adjective} ${randomNoun} #${randomNumber}`;

    return ucwords(message);
}




function ucwords(str) {
    return str.toLowerCase().replace(/(^|\s)\S/g, function (letter) {
        return letter.toUpperCase();
    });
}


module.exports = randomCommitMessage;
