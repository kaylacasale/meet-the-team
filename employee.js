class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
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
}


// function getName(name) {
//     console.log(name)
//     return name + 'hey'
// }
// getName(this.name)

module.exports = Employee;