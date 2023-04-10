Auto-Commit-All-Repos
=====================

This is a simple command-line tool that allows you to automate the process of committing changes to multiple Git repositories at once. With this tool, you can easily commit changes to all the repositories in a directory with a single command.

Features
--------

*   Commit changes to multiple Git repositories with a single command
*   Specify commit messages for each repository individually
*   Automatically stage all changes in each repository before committing
*   Choose whether to push changes to remote or not
*   Compatible with Windows, macOS, and Linux

Installation
------------

To use this tool, you'll need to have Node.js and Git installed on your computer. Once you have those dependencies installed, you can install the tool globally using npm:

`npm install -g auto-commit-all-repos`

Usage
-----

To commit changes to all the repositories in a directory, simply navigate to that directory in your terminal and run the following command:

`auto-commit-all-repos`

This will automatically commit all changes in each repository in the directory. You can also specify a commit message for each repository individually by passing a JSON file with a mapping of repository names to commit messages:

`auto-commit-all-repos -m commits.json`

For more information on how to use the tool, see the [documentation](https://github.com/NobleOsinachi/auto-commit-all-repos#readme).

License
-------

This tool is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

Contributing
------------

Contributions are welcome! If you find a bug or have a feature request, please open an issue on the [issue tracker](https://github.com/NobleOsinachi/auto-commit-all-repos/issues). If you'd like to contribute code, please fork the repository and submit a pull request.
