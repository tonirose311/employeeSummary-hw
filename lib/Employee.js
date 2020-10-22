// TODO: Write code to define and export the Employee class
class Employee {
    //properties from parent
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    //methods
    getName(){

    }

    getId(){

    }

    getEmail(){

    }

    getRole(){

    }

}

//testing
var test = new Employee ("tr", 1, "toni@rose.com")
console.log(test);

module.exports = Employee;
