// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// const fs = require("fs");
// const inquirer = require("inquirer");
// const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input

function init() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your project name?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please write a description of your project.'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please provide a email for your project.'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What command should be run to install dependencies?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide usage information for your project.'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please provide github username for your project.'
        },
        {
            type: 'list',
            name: 'license',
            message: 'What type of license should your project have?',
            choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None']
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Please provide contributing information for your project.'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What command should be run to run the test?',
            default: 'npm test'
        }
        // {
        //     type: 'input',
        //     name: 'questions',
        //     message: 'Please provide questions information for your project.'
        // }

    ])

        .then((input) => {
            console.log(input);
            const generateReadMe = [input.title, input.description, input.tableOfContents, input.installation, input.usage, input.license, input.contributing, input.tests, input.questions];
            const readMe = generateMarkdown(input);


            // TODO: Create a function to write README file
            fs.writeFile('README.md', readMe, (err) =>
                err ? console.error(err) : console.log('README.md created!')
            );
        });

}
// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
init();

