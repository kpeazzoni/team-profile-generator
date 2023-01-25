// The first class is an Employee parent class with the following properties and methods:

// name

// id

// email

// getName()

// getId()

// getEmail()

// getRole()—returns 'Employee'

// The other three classes will extend Employee.

class Employee{
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
generalQuestions() {
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
    ]);
}
}
// here is the getName function:

// getName() {
//     return this.name;
// }

// // here is a getID function:

// getId() {
//     return this.id;
// }

// // here is a getEmail funciton:

// getEmail() {
//     return this.email;
// }

// getRole() {
//     return "Employee" //—returns 'Employee'
// };
// };

module.exports = Employee;
