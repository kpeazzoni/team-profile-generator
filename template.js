// GIVEN a command-line application that accepts user input

    //**ASK MEGAN: is this all HTML based at the beginning or is it all node.js at the beginning and then creating HTML at th end


// WHEN I am prompted for my team members and their information

// inquirer.prompt()
//  do you want to see your team roster - yes or no? 
//  if yes, show HTML page, if no, as the question again

// THEN an HTML file is generated that displays a nicely formatted team roster based on user input


// WHEN I click on an email address in the HTML
    // onclick function to listen for click of email- redirects to default email with the TO field populated with the email address
// THEN my default email program opens and populates the TO field of the email with the address

// they return to HTML page and then: 

// WHEN I click on the GitHub username
    // onclick function that listens for the git hub username clicked- a tag with href to github username

// THEN that GitHub profile opens in a new tab
    // need to figure out how to open github in a new tab not just current browser window


// WHEN I start the application
    // how do we get the application to run? 


// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
    // manager.js- pull object keys from the employee and then add office number as a this.officeNumer = officeNumber


// WHEN I enter the team manager’s name, employee ID, email address, and office number


// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team

    // then- choose to add engineer or intern or finish building my team
        // add engineer
            // engineer.js 
                // pull from empoyee object keys and add gitHub


// WHEN I select the engineer option


// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu

     // taken back to the main menu after they enter engineer 

// WHEN I select the intern option

    // prompted to add an engineer or an intern or to finish building my team

// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu

 // add intern
            // intern.js 
                // pull from empoyee object keys and add school

// WHEN I decide to finish building my team


// THEN I exit the application, and the HTML is generated

// variables that need to be created    
    // require the path of the manager, engineer, intern
    // create a file struction for each js 


// createMyTeam() =>

// generate questions: 

    // manager: Name, id, email, office number
    // engineer: Name, id, email. github
    // intern: Name, id, email, school

    // employee: Name, id, email  = object 

//employee:   constructor(name, id, email) {
        // this.name = name;
        // this.id = id;
        // this.email = email;

        // this gets carried over to manager, engineer, inter

        // manager