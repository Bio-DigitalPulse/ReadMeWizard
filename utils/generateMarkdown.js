
// generateMarkdown function populating the generated README.md file, deposited into ./item
function generateMarkdown(data) {
  return `
<h1 align="center">${data.projectName}</h1>

![badge](https://img.shields.io/badge/License-${data.license}-brightgreen)<br />   

## Description
 ${data.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
 ${data.installation}

## Usage
 ${data.usage}

## License
![badge](https://img.shields.io/badge/License-${data.license}-brightgreen)
<br /><br />

This application is in accordance with, and covered by the ${data.license} license. 

## Contributing
 ${data.contributing}

## Tests
 ${data.tests}

## Questions
 ${data.questions}<br /><br />

Find me on GitHub: [${data.username}](https://github.com/${data.username})<br /><br />

Email me with any questions: ${data.email}<br /><br />

This README was generated by [ReadMeWizard](https://github.com/ascendedkrishna/ReadMeWizard) 
`;
}

module.exports = generateMarkdown;  //Module function to export the generated file