const inquirer = require('inquirer');
const manager = require('./lib/manager');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern')
const fs = require('fs');


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


function runApp() {
    createTeam();
        //Creating My Team: 
        function createTeam() {
            inquirer.prompt([{
                type: "list",
                message: "What type of employees are you liking to add to your team: Manager, Engineer, Intern?",
                name: "addEmployee",
                choices: ["Manager", "Engineer", "Intern", "I am finished adding team members."]
            }]).then(function(input){
                switch(input.addEmployee){
                    case "Manager":
                        createManager();
                        break;
                    case "Engineer":
                        createEngineer();
                        break;
                    case "Intern":
                        createIntern();
                    default:
                        createHtml();
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
            createTeam();
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
                        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.managerOfficeNumber);
                        teamArray.push(engineer);
                        createTeam();
                      });
            }
            function createIntern() {
                inquirer.prompt([
                    {
                        type: 'input',
                        message: "What is your Intern's Name: ?",
                        name: "name"
                    },
                    {
                        type: 'input',
                        message: "What is your Intern's ID number? ",
                        name: "id"
                    },
                    {
                        type: 'input',
                        message: "What is your Intern's ID Email? ",
                        name: "email"
                    },
                    {
                        type: 'input',
                        message: "What is your Intern's ID Office Number? ",
                        name: "school"
                    },
                    
                    ]).then(answers => {
                        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.school);
                        teamArray.push(intern);
                        createTeam();
                      });
            }
    
    
        }
    //this is the end of the function. The main function
    function createHtml() {
        fs.writeFile('./dist/test.html', (teamArray))
    }
    //the actually initialization of the function runApp
    runApp();