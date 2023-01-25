const inquirer = requirer('inquirer');
const manager = require('./lib/manager');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern')
const fs = require('fs');


// runs the application

const { default: inquirer } = require("inquirer");

function runApp() {

    // creating my team

    // function createTeam() {
    function createManager() {
        inquirer.prompt([
            {
                type: "input",
                message: "What is your Manager's Name?",
                name: "name"
            },
            {
                type: "input",
                message: "What is your Manager's ID number?",
                name: "id"
            },
            {
                type: "input",
                message: "What is your Manager's email address?",
                name: "email"
            },
            {
                type: "input",
                message: "What is your Manager's office number?",
                name: "officeNumber"
            },
            {
                type: "list",
                message: "Do you want to add an Engineer or Intern?",
                name: "type",
                choices: ["Engineer", "Intern"],

                validate(choices) {
                    if (choices === "Engineer") {
                        return createEngineer();
                    } else {
                        return createIntern();
                    }
                },
            },

        ])
    };
    function createEngineer() {
        inquirer.prompt([
            {
                type: "input",
                message: "What is your Engineer's Name?",
                name: "name"
            },
            {
                type: "input",
                message: "What is your Engineer's ID number?",
                name: "id"
            },
            {
                type: "input",
                message: "What is your Engineer's email address?",
                name: "email"
            },
            {
                type: "input",
                message: "What is your Engineer's GitHub URL?",
                name: "github"
            },
            {
                type: "list",
                message: "Do you want to add an another Engineer or an Intern?",
                name: "type",
                choices: ["Engineer", "Intern"],
                validate(choices) {
                    if (choices === "Engineer") {
                        return createEngineer();
                    } else if (choices ==="Intern") {
                        return createIntern();
                    } else {
                        return //ask meg how to finish the questions
                    }
                },
            },

        ])
    };

    function createIntern() {
        inquirer.prompt([
            {
                type: "input",
                message: "What is your Intern's Name?",
                name: "name"
            },
            {
                type: "input",
                message: "What is your Intern's ID number?",
                name: "id"
            },
            {
                type: "input",
                message: "What is your Intern's email address?",
                name: "email"
            },
            {
                type: "input",
                message: "What school does your Intern's attend?",
                name: "school"
            },
            {
                type: "list",
                message: "Do you want to add an another Intern or are you finished adding to the team?",
                name: "type",
                choices: ["Intern", "Finished"],
                validate(choices) {
                    if (choices === "Intern") {
                        return createIntern();
                    } else {
                        return //ask Meg what to do here!;
                    }
                },
            },

        ])
    }
};

// this calls the fuction
runApp(createManager());