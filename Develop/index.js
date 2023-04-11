// TODO: Include packages needed for this application
const markdownFile = require("./utils/generateMarkdown");
const fileSystem = require("fs");
const inquirer = require("inquirer");

// This array contains questions that require a user input in order to be answered.
const questions = [
    {
       type: "input",
       name: "Title",
       message: "What is the name of your project?",
       validate: validateInput,
    },
    {
        type: "input",
        name: "Installation",
        message: "What are the required steps to install the project?",
        validate: validateInput,
     },
     {
        type: "input",
        name: "Usage",
        message: "How should the project be used? Please add a screenshot of project.",
        validate: validateInput,
     },
     {
        type: "input",
        name: "Credits",
        message: "Please list any third-party resources or collaborators that contributed to the project",
        validate: validateInput,
     },
     {
        type: "input",
        name: "License",
        message: "What license did you use for your project?",
        validate: validateInput,
     },
     {
        type: "input",
        name: "Email",
        message: "What is a good email that the project creator can be reached?",
        validate: validateInput,
     },
     {
        type: "input",
        name: "Username",
        message: "What is the project creator's GitHub username?",
        validate: validateInput,
     }
];

// This function writes a README file
function writeToFile(fileName, data) {
    fileSystem.writeFile(fileName, markdownFile(data), function (error) {
        if (error) {
            return console.log(error);
        }
    });
};

//This function initializes the app
function init() {
    inquirer.createPromptModule(questions).then((data => {
        console.log(JSON.stringify(data, null, " "));
        data.retrieveLicense = retrieveLicense(data.license);
        writeToFile("./evaluation/readme.md", data);
    }));
};

// Function call to initialize app
init();
