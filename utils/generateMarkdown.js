    
function renderLicenseBadge(data) {
  switch (data.License[0]) {
      case 'MIT':
          url = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';
          break;
      case 'GNU':
          url = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]';
          break;
      case 'Apache':
          url = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]';
          break;
      case 'IBM':
          url = '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)]';
          break;
      case 'PERL':
          url = '[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)]';
          break;
      default:
          url = '';       
  }
  return url;
}


function renderLicenseLink(data) {
  switch (data.License[0]) {
      case 'MIT':
          response = '(https://opensource.org/licenses/MIT)';
          break;
      case 'GNU':
          response = '(https://www.gnu.org/licenses/gpl-3.0)';
          break;
      case 'Apache':
          response = '(https://opensource.org/licenses/Apache-2.0';
          break;
      case 'IBM':
          response = '(https://opensource.org/licenses/IPL-1.0)';
          break;
      case 'PERL':
          response = '(https://opensource.org/licenses/Artistic-2.0)';
          break;
      default:
          response = '';
  }    
  return response;
}

function renderLicenseSection(data) {

  let render = ` ${renderLicenseBadge(data)}${renderLicenseLink(data)}`
  return render;
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# <h1 align='center'>${data.Title}</h1>
  
  ## Table of Contents
  * [Description](#Description)
  * [Installation](#Installation-Instructions)
  * [Usage Instructions](#Usage-Instructions)
  * [License](#License)
  * [Contributing Members](#Contributing-Members)
  * [Testing](#Testing)    
  * [Questions/Inquiries](#Questions/Inquiries)
  
  ## Description
  ${data.Description}
  ## Installation Instructions 
  ${data.Installation}
  ## Usage Instructions
  ${data.Usage}
  ## License
  ${renderLicenseSection(data)}
  ## Contributing Members
  ${data.Contributors}
  ## Testing 
   ${data.Test}
  ## Questions/Inquiries 
  ### GitHub Profile
  [GitHub Profile](http://github.com/${data.Github})
  ### Email
  ${data.Email}
`;
}
module.exports = generateMarkdown;