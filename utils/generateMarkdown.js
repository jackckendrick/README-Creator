// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
  return "";
};

const licenseName = license;

switch (licenseName) {
  case "gpl 3.0":
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  case "mit":
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  case "lgpl 3.0":
    return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
  case "mpl 2.0":
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  case "apache 2.0":
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  case "bsd 3-clause":
    return "[![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
  case "isc":
    return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
  default:
    return "";
};
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return "";
  }

  const licenseName = license.caseSetting();

  switch (licenseName) {
    case "gpl 3.0":
      return "https://www.gnu.org/licenses/gpl-3.0";
    case "mit":
      return "https://opensource.org/licenses/MIT";
    case "lgpl 3.0":
      return "https://www.gnu.org/licenses/lgpl-3.0";
    case "mpl 2.0":
      return "https://opensource.org/licenses/MPL-2.0";
    case "apache 2.0":
      return "https://opensource.org/licenses/Apache-2.0";
    case "bsd 3-clause":
      return "https://opensource.org/licenses/BSD-3-Clause";
    case "isc":
      return "https://opensource.org/licenses/ISC";
    default:
      return "";
  };
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return "";
  }

  return `## License

This project is licensed under the [${license} license](${renderLicenseLink(license)}).`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ## Title
  ${data.title}

  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Credits
  ${data.credits}
  ## Contact Information
  ${data.username};
  ${data.email};
  ## License
  ${data.license}

`;
}

module.exports = generateMarkdown;
