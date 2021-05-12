  
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")
const writeFileAsync = util.promisify(fs.writeFile);


function promptUser(){
    return inquirer.prompt([
        {
            type: "input",
            name: "projectTitle",
            message: "Please provide the title of this project: ",
        },
        {
            type: "input",
            name: "description",
            message: "Please provide a brief description of this project: "
        },
        {
            type: "input",
            name: "installation",
            message: "Please provide installation details, if applicable: ",
        },
        {
            type: "input",
            name: "usage",
            message: "Please provide the use case potential for this project: "
        },
        {
            type: "list",
            name: "license",
            message: "Please select the appropriate license applicable to this project: ",
            choices: [
                "Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open"
            ]
        },
        {
            type: "input",
            name: "contributing",
            message: "Please provide the names and contact information to any additional contributors: "
        },
        {
            type: "input",
            name: "tests",
            message: "Please provide details on any tests included: "
        },
        {
            type: "input",
            name: "questions",
            message: "Please provide directions in case of additional questions: "
        },
        {
            type: "input",
            name: "username",
            message: "Please enter your GitHub username: "
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email: "
        }
    ]);
} 


  async function init() {
    try {

        const answers = await promptUser();
        const generateContent = generateMarkdown(answers);

        await writeFileAsync('./item/README.md', generateContent);
        console.log('Successfully wrote to README.md');
    }   catch(err) {
        console.log(err);
    }
  }
  
  init();  