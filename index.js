//* entered 'npm init -y' in command-line to install necessary package
//* entered 'npm i inquirer@8.2.4' in order to install the necessary package (inquirer) -> will create a node_modules folder with all necessary code to run inquirer, and list inquirer in dependencies in package.json, and create package.lock for dependencies to function

//* in order to use these packages, need to require them in code and set equal to variable
//* fs will allow us to create the file I want to generate 
const fs = require('fs');
const inquirer = require('inquirer');

const Employee = require('./employee');
const Manager = require('./manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
// const employee = new Employee();

const team = []
const generateHTML = (input) = ({ name, id, email, officeNumber }) =>
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
    <div></div>`
function getEmployee() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'employeeType',
                message: 'If you would like to add an Engineer or Intern, please select the option below. If not, see the employee(s) you have added by selecting Meet the Team!',
                choices: ['Engineer', 'Intern', 'Meet the Team!'],
            }
        ])
        .then((answer) => {
            if (answer.employeeType === 'Manager') {
                let employeeType = answer.employeeType

                inputEmployee(employeeType)

            } else if (answer.employeeType === 'Engineer') {
                let employeeType = answer.employeeType
                inputEmployee(employeeType)
                // inputEngineer(employeeType);
            } else if (answer.employeeType === 'Intern') {
                let employeeType = answer.employeeType
                inputEmployee(employeeType)

                //inputIntern();
            } else {
                seeEmployees();
            }
        })
}

// added more if else statements to get different
// t values and pass them in template literals in functions

function inputEmployee(employee) {


    inquirer

        .prompt([
            {

                type: 'input',
                message: 'What is the ' + employee + ' name?',
                name: 'name',
                value: employee,
            },
            {
                type: 'input',
                message: 'What is the ' + employee + ' id?',
                name: 'id',
                value: employee,
            },
            {
                type: 'input',
                message: 'What is the ' + employee + ' email?',
                name: 'email',
                value: employee,
            },
            {
                type: 'input',
                message: 'What is the ' + employee + ' office number?',
                name: 'officeNumber',
                value: employee,
            },
        ])

        .then((input) => {


            if (employee === 'Manager') {
                console.log(input.value)
                const manager = new Manager(input.name, input.id, input.email, input.officeNumber, input.value)
                console.log(manager)
                team.push(manager)
                getEmployee()

            } else if (employee === 'Engineer') {
                const engineer = new Engineer(input.name, input.id, input.email, input.officeNumber)
                console.log(engineer)
                team.push(engineer)
                getEmployee()
            } else if (employee === 'Intern') {
                const intern = new Intern(input.name, input.id, input.email, input.officeNumber)
                console.log(intern)
                team.push(intern)
                getEmployee()

            } else {
                seeEmployees()
            }



        })

}

function seeEmployees() {
    // let htmlPageContent = generateHTML(input)
    // console.log(htmlPageContent)
    // htmlPageContent += team
    console.log(team)
    let seeTeam = JSON.stringify(team)




    fs.writeFile('index.html', seeTeam, (err) =>
        err ? console.log(err) : console.log('Successfully created index.html!')
    )

}


function init() {
    inputEmployee('Manager')
    //getEmployee('Manager')
}

init()
//         .then((input) => {
//     const manager = new Manager(input.name, input.id, input.email, input.officeNumber)
//     console.log(input)
//     //* destructed object input values passed into object var name 'input'
//     const { name, id, email, officeNumber } = input
//     const employee = new Employee(name, id, email);

//     seeNext(input)
//     // const manager = new Manager(name, id, email, officeNumber)
//     // console.log(manager)




//     // ask if you're done 
//     // if not
//     // -- prompt the user again
//     // if so
//     // -- take all of the object you've created and use them to gen your html



//     console.log(employee)
//     //console.log(Employee.getName())

//     let htmlPageContent = generateHTML(input)
//     console.log(htmlPageContent)
//     htmlPageContent += `<h> ${input.name} </h>`



//     fs.writeFile('index.html', htmlPageContent, (err) =>
//         err ? console.log(err) : console.log('Successfully created index.html!')
//     )

//     // console.log(Employee.getName())




// })



    // .then((input) => {
    //     const { name, id, email, officeNumber } = input

    //     const manager = new Manager(name, id, email, officeNumber)
    //     console.log(manager)

    // })

    // .then((input) => {

    //     console.log(input)
    //     // const { name, id, email, officeNumber } = input
    //     const manager = new Manager(name, id, email, officeNumber)
    //     console.log(manager)
    // })
    // getEmployee(employees[1])
// }
// console.log(Employee.getName)
// const employees = ['manager', 'engineer']
// getEmployee(employees[0])

// function seeNext(employee) {
//     // const manager = new Manager(name, id, email, officeNumber)
//     // console.log(manager)

//     if (employee) {
//         console.log(employee)
//         getEmployee(employees[1])


//     } else {
//         return 'Done getting employee info!'
//     }
// }


    //getEmployee(employees[1])

