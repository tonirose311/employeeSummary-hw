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
        // console.log(this.name);
        return this.name
    }

    getId(){
        // console.log(this.id);
        return this.id
    }

    getEmail(){
        // console.log(this.email);
        return this.email
    }

    getRole(){
        // console.log(this.role);
        return "Employee"
    }

}

// testing
// var test = new Employee ("tr", 1, "toni@rose.com")
// console.log(test);
//     test.getName();
//     test.getId();
//     test.getEmail();
//     test.getRole();
    
module.exports = Employee;
