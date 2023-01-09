const Employee = require("./employee");

// manager 'is a' employee
class Intern extends Employee {
    constructor(name, id, email, school, employee) {
        super(name, id, email);
        this.school = school;
        this.employee = employee
    }

    getSchool() {
        return this.school
    }

    getRole() {
        return this.employee
    }


    // fake use case
}
// const manager1 = 'manager'
// getEmployee(manager1)

module.exports = Intern