const Employee = require("./Employee");

// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
    }

    getName(){
        return this.name
    }

    getId(){
        return this.id
    }

    getEmail(){
        return this.email
    }

    getGithub(){
        return this.github
    }

    getRole(){
        return "Engineer"
    }

}

//testing
// var test = new Engineer ("tonirose", 10, "toni@rose.com", "toni.rose")
// console.log(test);

// test.getRole



module.exports = Engineer;