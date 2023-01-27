// global scoped variables and requirments  
const inquirer = require('inquirer');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern')
const fs = require('fs');
const Employee = require('./lib/employee');
const teamArray = [];
const createHtml = require('./src/template1')
const idArray = [];

function runApp() {
    createTeam();
    //Creating My Team: 
    function createTeam() {
        inquirer.prompt([{
            type: "list",
            message: "What type of employees are you liking to add to your team: Manager, Engineer, Intern?",
            name: "addEmployee",
            choices: ["Manager", "Engineer", "Intern", "I am finished adding team members."]
        }]).then(function (input) {
            switch (input.addEmployee) {
                case "Manager":
                    createManager();
                    break;
                case "Engineer":
                    createEngineer();
                    break;
                case "Intern":
                    createIntern();
                    break;
                default:
                    fs.writeFileSync('./dist/team.html', createHtml(teamArray));
            }
        })
    }

    function createManager() {
        inquirer.prompt([{
            type: 'input',
            name: "managerName",
            message: "What is your Manager's Name? ",
            validate: (answer) => {
                if (answer !== '') {
                  return true;
                }
                return 'Please enter at least one character.';
              },
        },
        {
            type: 'input',
            name: "managerId",
            message: "What is your Manager's ID? ",
            validate: (answer) => {
                const pass = answer.match(/^[1-9]\d*$/);
                if (pass) {
                  if (idArray.includes(answer)) {
                    return 'This ID is already taken. Please enter a different number.';
                  } else {
                    return true;
                  }
                }
                return 'Please enter a positive number greater than zero.';
              },
        },
        {
            type: 'input',
            name: "managerEmail",
            message: "What is your Manager's email? ",
            validate: (answer) => {
                const pass = answer.match(/\S+@\S+\.\S+/);
                if (pass) {
                  return true;
                }
                return 'Please enter a valid email address.';
              },
        },
        {
            type: 'input',
            name: "managerOfficeNumber",
            message: "What is your Manager's Office Number? ",
            validate: (answer) => {
                const pass = answer.match(/^[1-9]\d*$/);
                if (pass) {
                  return true;
                }
                return 'Please enter a positive number greater than zero.';
        }
    }
        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
            teamArray.push(manager);
            idArray.push(answers.managerId);
            createTeam(teamArray);
        });
    }
    function createEngineer() {
        inquirer.prompt([
            {
                type: 'input',
                name: "engineerName",
                message: "What is your Engineer's Name: ?",
                validate: (answer) => {
                    if (answer !== '') {
                      return true;
                    }
                    return 'Please enter at least one character.';
                  },
            },
            {
                type: 'input',
                name: "engineerId",
                message: "What is your Engineer's ID?",
                validate: (answer) => {
                    const pass = answer.match(/^[1-9]\d*$/);
                    if (pass) {
                      if (idArray.includes(answer)) {
                        return 'This ID is already taken. Please enter a different number.';
                      } else {
                        return true;
                      }
                    }
                    return 'Please enter a positive number greater than zero.';
                  },
            },
            {
                type: 'input',
                name: "engineerEmail",
                message: "What is your Engineer's Email?",
                validate: (answer) => {
                    const pass = answer.match(/\S+@\S+\.\S+/);
                    if (pass) {
                      return true;
                    }
                    return 'Please enter a valid email address.';
                  },
            },
            {
                type: 'input',
                name: "engineerGithub",
                message: "What is your Engineer's GitHub username?"
            },
        ]).then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            teamArray.push(engineer);
            idArray.push(answers.engineerId)
            createTeam(teamArray);
        });
    }
    function createIntern() {
        inquirer.prompt([
            {
                type: 'input',
                message: "What is your Intern's Name: ?",
                name: "internName",
                validate: (answer) => {
                    if (answer !== '') {
                      return true;
                    }
                    return 'Please enter at least one character.';
                  },
            },
            {
                type: 'input',
                message: "What is your Intern's ID number? ",
                name: "internId",
                validate: (answer) => {
                    const pass = answer.match(/^[1-9]\d*$/);
                    if (pass) {
                      if (idArray.includes(answer)) {
                        return 'This ID is already taken. Please enter a different number.';
                      } else {
                        return true;
                      }
                    }
                    return 'Please enter a positive number greater than zero.';
                  },
            },
            {
                type: 'input',
                message: "What is your Intern's ID Email? ",
                name: "InternEmail",
                validate: (answer) => {
                    const pass = answer.match(/\S+@\S+\.\S+/);
                    if (pass) {
                      return true;
                    }
                    return 'Please enter a valid email address.';
                  },
            },
            {
                type: 'input',
                message: "What is your Intern's school? ",
                name: "internSchool"
            },

        ]).then(answers => {
            // console.log("this intern function")
            // console.log(answers);
            const intern = new Intern(answers.internName, answers.internId, answers.InternEmail, answers.internSchool);
            // console.log("the variable intern", intern);
            teamArray.push(intern);
            idArray.push(answers.internId)
            createTeam(teamArray);
        });
    }

}
//this is the end of the function. The main function

//the actually initialization of the function runApp
runApp();