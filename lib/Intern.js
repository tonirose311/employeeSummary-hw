const Employee = require("./Employee");

// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email);
        this.school= school;
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

    getSchool(){
        return this.school
    }

    getRole(){
        return "Intern"
    }
}

//testing
// var test = new Intern ("tonirose", 10, "toni@rose.com", "northwestern")
// console.log(test);

// test.getRole

module.exports = Intern