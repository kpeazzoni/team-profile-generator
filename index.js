const inquirer = require('inquirer');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern')
const fs = require('fs');
const Employee = require('./lib/employee');
const teamArray = [];
const createHtml = require('./src/template1')

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
                    fs.writeFileSync('./dist/team.html', createHtml(teamArray));;
            }
        })
    }

    function createManager() {
        inquirer.prompt([{
            type: 'input',
            name: "managerName",
            message: "What is your Manager's Name? "
        },
        {
            type: 'input',
            name: "managerId",
            message: "What is your Manager's ID? "
        },
        {
            type: 'input',
            name: "managerEmail",
            message: "What is your Manager's email? "
        },
        {
            type: 'input',
            name: "managerOfficeNumber",
            message: "What is your Manager's Office Number? "
        }
        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
            teamArray.push(manager);
            createTeam(teamArray);
        });
    }
    function createEngineer() {
        inquirer.prompt([
            {
                type: 'input',
                name: "engineerName",
                message: "What is your Engineer's Name: ?"
            },
            {
                type: 'input',
                name: "engineerId",
                message: "What is your Engineer's ID?"
            },
            {
                type: 'input',
                name: "engineerEmail",
                message: "What is your Engineer's Email?"
            },
            {
                type: 'input',
                name: "engineerGithub",
                message: "What is your Engineer's GitHub username?"
            },
        ]).then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            teamArray.push(engineer);
            createTeam(teamArray);
        });
    }
    function createIntern() {
        inquirer.prompt([
            {
                type: 'input',
                message: "What is your Intern's Name: ?",
                name: "internName"
            },
            {
                type: 'input',
                message: "What is your Intern's ID number? ",
                name: "internId"
            },
            {
                type: 'input',
                message: "What is your Intern's ID Email? ",
                name: "InternEmail"
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
            createTeam(teamArray);
        });
    }
}
//this is the end of the function. The main function

//the actually initialization of the function runApp
runApp();




// runs the application

// function runApp() {
// createManager();
//     // creating my team
// };
//     // function createTeam() {
//     function createManager() {
//         inquirer.prompt([
//             {
//                 type: "input",
//                 message: "What is your Manager's Name?",
//                 name: "name"
//             },
//             {
//                 type: "input",
//                 message: "What is your Manager's ID number?",
//                 name: "id"
//             },
//             {
//                 type: "input",
//                 message: "What is your Manager's email address?",
//                 name: "email"
//             },
//             {
//                 type: "input",
//                 message: "What is your Manager's office number?",
//                 name: "officeNumber"
//             },
//             {
//                 type: "list",
//                 message: "Do you want to add an Engineer or Intern?",
//                 name: "type",
//                 choices: ["Engineer", "Intern"],

//                 validate: (choices) => {
//                     if (choices == "Engineer") {
//                       return createEngineer();
//                     } else {
//                         return createIntern();
//                     }
//                   },
//                 // validate(choices) {
//                 //     if (choices == "Engineer") {
//                 //         return createEngineer();
//                 //     } else {
//                 //         return createIntern();
//                 //     }
//                 // },
//             }
//         ])
//     };
//     function createEngineer() {
//         inquirer.prompt([
//             {
//                 type: "input",
//                 message: "What is your Engineer's Name?",
//                 name: "name"
//             },
//             {
//                 type: "input",
//                 message: "What is your Engineer's ID number?",
//                 name: "id"
//             },
//             {
//                 type: "input",
//                 message: "What is your Engineer's email address?",
//                 name: "email"
//             },
//             {
//                 type: "input",
//                 message: "What is your Engineer's GitHub URL?",
//                 name: "github"
//             },
//             {
//                 type: "list",
//                 message: "Do you want to add an another Engineer or an Intern?",
//                 name: "type",
//                 choices: ["Engineer", "Intern"],
//                 // validate(choices) {
//                 //     if (choices === "Engineer") {
//                 //         return createEngineer();
//                 //     } else if (choices ==="Intern") {
//                 //         return createIntern();
//                 //     } else {
//                 //         return //ask meg how to finish the questions
//                 //     }
//                 // },
//             },

//         ]).then((val) => {if (choices == 'Engineer'){createEngineer();}else{createIntern();}})
//     };

//     function createIntern() {
//         inquirer.prompt([
//             {
//                 type: "input",
//                 message: "What is your Intern's Name?",
//                 name: "name"
//             },
//             {
//                 type: "input",
//                 message: "What is your Intern's ID number?",
//                 name: "id"
//             },
//             {
//                 type: "input",
//                 message: "What is your Intern's email address?",
//                 name: "email"
//             },
//             {
//                 type: "input",
//                 message: "What school does your Intern's attend?",
//                 name: "school"
//             },
//             {
//                 type: "list",
//                 message: "Do you want to add an another Intern or are you finished adding to the team?",
//                 name: "type",
//                 choices: ["Intern", "Finished"],
//                 validate(choices) {
//                     if (choices === "Intern") {
//                         return createIntern();
//                     } else {
//                         return //ask Meg what to do here!;
//                     }
//                 },
//             },

//         ])
//     }
// // };

// // this calls the fuction
// runApp();