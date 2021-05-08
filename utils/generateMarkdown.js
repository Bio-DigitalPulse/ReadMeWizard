
function generateMarkdown(answers) {    //Markdown with various required sections detailing the README
  return `
<h1 align="center">${answers.projectName}</h1>

![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)<br/>

## Description
${answers.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Contributing](#contributing)
- [License](#license)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## Tests
${answers.tests}

## Contributing
${answers.contributing}

## License
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
<br/>
This application is covered by the ${answers.license} license. 

## Questions
${answers.questions}<br/>
<br/>
Find me on GitHub: [${answers.username}](https://github.com/${answers.username})<br/>
<br/>
Email me with any questions: ${answers.email}<br/><br/>
  `;
}

module.exports = generateMarkdown;