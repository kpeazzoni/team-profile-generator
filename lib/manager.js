// In addition to Employee's properties and methods, Manager will also have the following:

// officeNumber

// getRole()—overridden to return 'Manager'

const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    gernalQuestions() {
        Employee.gernalQuestions()
        inquirer.prompt([
            {
                type: 'input',
                name: "managerOfficeNumber",
                message: "What is your Manager's Office Number? "
            },
        ])
    }

    // Get officeNumber

    getofficeNumber() {
        return this.officeNumber;
    }

    // ask Meg if this should be in quotes or returning full object
    getRole() {
        return "Manager";
    }
}
module.exports = Manager