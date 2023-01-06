class Employee {
    constructor(name, id, email, employee) {
        this.name = name;
        this.id = id;
        this.email = email;
        // this.employee = employee
        // console.log(employee, 'from Employee constructor')
    }


    getName() {
        return this.name;
    }

    getId() {
        return this.id
    }

    getEmail() {
        return this.email
    }

    getRole(employee) {
        console.log(employee, 'from constructor')
    }
}


// function getName(name) {
//     console.log(name)
//     return name + 'hey'
// }
// getName(this.name)

module.exports = Employee;