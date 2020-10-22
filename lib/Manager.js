const Employee = require("./Employee");

// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        //manager gets office number
        this.officeNumber = officeNumber;
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

    getOfficeNumber(){
        return this.officeNumber
    }
    getRole(){
        return "Manager"
    }


};

//testing
// var test = new Manager ("tonirose", 0, "toni@rose.com", 175)
// console.log(test);

// test.getRole;


module.exports = Manager;