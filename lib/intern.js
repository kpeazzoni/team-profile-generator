// In addition to Employee's properties and methods, Intern will also have the following:

// school

// getSchool()

// getRole()—overridden to return 'Intern'

const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
// Get school

gernalQuestions() {
    Employee.gernalQuestions()
    inquirer.prompt([
            {
                type: 'input',
                message: "What is your Intern's ID Office Number? ",
                name: "school"
        },
    ])
}

getSchool() {
    return this.school;
}

// ask Meg if this should be in quotes or returning full object
    getRole() {
        return "Intern";
    }
};
module.exports = Intern