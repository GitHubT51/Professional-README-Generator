// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![GitHub license](https://img.shields.io/badge/license-${license.replace(' ', '_')}-blue.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  return `[License Info](https://choosealicense.com/licenses/${license.toLowerCase()}/)`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
return `
${renderLicenseBadge(license)}
${renderLicenseLink(license)}

`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

### Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)



#### Installation
${data.installation}

#### Usage
${data.usage}

#### License
${renderLicenseSection(data.license)}

#### Contributing
${data.contributing}

#### Tests
${data.tests}

#### Questions
IF you have any question please feel free to reach out me at .${data.email}
Please check out my github profile at 
[${data.github}](https://github.com/${data.github}/)


`
}

export default generateMarkdown;
