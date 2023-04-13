// TODO: Include packages needed for this application
const markdownFile = require("./utils/generateMarkdown");
const fileSystem = require("fs");
const inquirer = require("inquirer");
const path = require("path")
const validateInput = (answer)=>{
   if(answer !== ""){
      return true
   } else {
      return "answer is required"
   }
}
// This array contains questions that require a user input in order to be answered.
const questions = [
    {
       type: "input",
       name: "title",
       message: "What is the name of your project?",
       validate: (answer)=>validateInput(answer),
    },
    {
        type: "input",
        name: "description",
        message: "Explain how, why and what the project is created for.",
        validate: (answer)=>validateInput(answer),
     },
    {
        type: "input",
        name: "installation",
        message: "What are the required steps to install the project?",
        validate: (answer)=>validateInput(answer),
    },
     {
        type: "input",
        name: "usage",
        message: "How should the project be used?",
        validate: (answer)=>validateInput(answer),
     },
     {
      type: "confirm",
      name: "confirm_picture",
      message: "Would you like to add a screenshot?",
     },
     {
        type: "input",
        name: "credits",
        message: "Please list any third-party resources or collaborators that contributed to the project",
        validate: (answer)=>validateInput(answer),
     },
     {
        type: "list",
        name: "license",
        message: "What license did you use for your project?",
        choices: ["gpl 3.0","mit","lgpl 3.0","mpl 2.0", "apache 2.0","bsd 3-clause","isc", "none"],
     },
     {
        type: "input",
        name: "email",
        message: "What is a good email that the project creator can be reached?",
        validate: (answer)=>validateInput(answer),
     },
     {
        type: "input",
        name: "username",
        message: "What is the project creator's GitHub username?",
        validate: (answer)=>validateInput(answer),
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
    inquirer.prompt(questions).then((data => {
        console.log(data);
      //   data.retrieveLicense = retrieveLicense(data.license);
        writeToFile(path.join(__dirname,"/dist/","README.md"), data);
    }));
};

// Function call to initialize app
init();
