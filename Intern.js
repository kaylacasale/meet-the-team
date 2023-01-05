const Employee = require("./employee");

// manager 'is a' employee
class Intern extends Employee {
    constructor(name, id, email, officeNumber, employee) {
        super(name, id, email);
        this.oNumber = officeNumber;
        this.employee = employee
    }


    // fake use case
}
// const manager1 = 'manager'
// getEmployee(manager1)

module.exports = Intern