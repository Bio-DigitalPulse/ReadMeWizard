
const generateMarkdown = require('./utils/generateMarkdown.js');
const inquirer = require('inquirer');
const fs = require('fs');
const util = require("util");
const createContent = util.promisify(fs.writeFile);

function itemSpecs(){
    return inquirer.prompt([
        {
            type: "input",
            name: "projectName",
            message: "Please provide this projects title name.",
        },
        {
            type: "input",
            name: "description",
            message: "Please provide a brief description of this project: "
        },
        {
            type: "input",
            name: "installation",
            message: "Please provide details regarding installation requirements, if any: ",
        },
        {
            type: "input",
            name: "usage",
            message: "Please provide primary usage information for this project: "
        },
        {
            type: "input",
            name: "tests",
            message: "Please provide details on tests included, if any: "
        },
        {
            type: "input",
            name: "contributing",
            message: "Please provide applicable contributors to this project: "
        },
        {
            type: "list",
            name: "license",
            message: "Please select the appropriate license for this project: ",
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
            name: "questions",
            message: "Please provide directions in the event of questions about this project: "
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
        const answers = await itemSpecs();
        const generateContent = generateMarkdown(answers);
        await createContent('./project/README.md', generateContent);
        console.log('Successfully wrote to README.md');
    }   catch(err) {
        console.log(err);
    }
  }
  
  init();  

