
const fs = require("fs");           //Declared variables used within the script
const util = require("util");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")
const asyncFileFunction = util.promisify(fs.writeFile);


function projectPrompts() {      //Prompt function for the information to populate the file
    return inquirer.prompt([
        {
            type: "input",
            name: "projectName",
            message: "Please provide the name of this project: ",
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

async function init() {     //Async function to await the prompts to provide data, 
    try {

        const data = await projectPrompts();
        const generateContent = generateMarkdown(data);     //followed by generating the file

        await asyncFileFunction('./item/README(G).md', generateContent);
        console.log('Successfully automatically generated(G) the README.md file');      //and placing it in the appropriate directory.

    } catch (err) {

        console.log(err);
    }
}

init();     //init to actuate function