//blueprint
//contructor happens first
// super calls parent class constuctor to pass all values neeeded

const Employee = require("./employee");

// manager 'is a' employee
class Manager extends Employee {
    constructor(name, id, email, officeNumber, employee) {
        super(name, id, email);
        this.oNumber = officeNumber;
        this.employee = employee
    }



    // fake use case
}
// const manager1 = 'manager'
// getEmployee(manager1)

module.exports = Manager
// const manager1 = new Manager('bobara', '22xww', 'bobara@here.com', '222')
// const manager2 = new Manager('davida', '11xww', 'davida@here.com', '221')



// const manager1Name = manager1.getName(); // 'bobara'
// const manager2Name = manager2.getName(); // 'davida'

// fake function as an example
// manager1.promote()