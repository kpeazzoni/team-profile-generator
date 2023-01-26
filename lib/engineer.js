// In addition to Employee's properties and methods, Engineer will also have the following:

// github—GitHub username

// getGithub()

// getRole()—overridden to return 'Engineer'

const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
// Get GitHub

getGithub() {
    return this.github;
}


// ask Meg if this should be in quotes or returning full object
    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer