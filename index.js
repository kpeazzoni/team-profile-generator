const inquirer = require('inquirer');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern')
const fs = require('fs');
const Employee = require('./lib/employee');
const teamArray = [];

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
                    // Employee.gerneralQuestions();
                    // manager.gerneralQuestions();
                    createManager();
                    break;
                case "Engineer":
                    // Employee.gerneralQuestions();
                    // engineer.gerneralQuestions();
                    createEngineer();
                    break;
                case "Intern":
                    // Employee.gerneralQuestions();
                    // intern.gerneralQuestions();
                    createIntern();
                    break;
                default:
                    createHtml(teamArray);
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
                message: "What is your Intern's school? ",
                name: "school"
            },

        ]).then(answers => {
            // console.log("this intern function")
            // console.log(answers);
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            // console.log("the variable intern", intern);
            teamArray.push(intern);
            createTeam(teamArray);
        });
    }


}
//this is the end of the function. The main function
function createHtml(teamArray) {
    var myHtml = `
    <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta name="Description" content="Enter your description here" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">

  <title>Team Profile Generator</title>
</head>

<body>
  <!-- Page margins are created using the container and container-fluid classes -->
  <header class="container-fluid bg-danger text-light text-center mb-5 p-3">
    <div class="d-flex align-items-center">
      <h1 class="header text-center">My Team</h1>
    </div>
  </header>
<section class="container-sm">
  <div class="card" style="width: 18rem;">
    <div class="card-header">
      Featured
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Cras justo odio</li>
      <li class="list-group-item">Dapibus ac facilisis in</li>
      <li class="list-group-item">Vestibulum at eros</li>
    </ul>
  </div>
    <div class="card" style="width: 18rem;">
      <div class="card-header">
       ${manager.name}
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Cras justo odio</li>
        <li class="list-group-item">Dapibus ac facilisis in</li>
        <li class="list-group-item">Vestibulum at eros</li>
      </ul>
    </div>
  </section>
</body>
</html>
    `
    console.log(teamArray);
    fs.writeFile('team.html', myHtml);
}
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