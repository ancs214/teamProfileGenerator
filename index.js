

const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

let employees = [];

const promptUser = (userArr) => {
    //if there's no data yet, create an empty array
    if(!userArr) {
        userArr = [];
    }
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the team member name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a name.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'ID',
            message: 'Please enter employee ID',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter ID number.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is their email address?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter email.');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'jobTitle',
            message: 'What is the job title of this team member?',
            choices: ['Manager', 'Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'officeNum',
            message: 'What is their office number?',
            validate: officeNumInput => {
                if (officeNumInput) {
                    return true;
                } else {
                    console.log('Please enter the office number.');
                    return false;
                }
            },
            when: ({ jobTitle }) => {
                if (jobTitle === 'Manager') {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is their Github username?',
            validate: githubName => {
                if (githubName) {
                    return true;
                } else {
                    console.log('Please enter the Github username.');
                    return false;
                }
            },
            when: ({ jobTitle }) => {
                if (jobTitle === 'Engineer') {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is their associated school?',
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log('Please enter a school.');
                    return false;
                }
            },
            when: ({ jobTitle }) => {
                if (jobTitle === 'Intern') {
                    return true;
                } else {
                    return false;
                }
            } 
        },
        {
            type: 'confirm',
            name: 'addTeammate',
            message: 'Would you like to add another team member?'
        }
    ])
    .then(data => {
        //push data to array
        userArr.push(data);
      
        //if addTeammate was selected, run promptUser() again passing in the userArr
        if (data.addTeammate) {
            return promptUser(userArr);
        } else {
           createTeam(userArr);
        }
    })
}

promptUser()

let createTeam = function (userArr) {
    userArr.forEach((element) => {
        // console.log(element.jobTitle);
        if(element.jobTitle === 'Manager') {
            addMember = new Manager (userArr);
            console.log(addMember);
        }
    })
}

