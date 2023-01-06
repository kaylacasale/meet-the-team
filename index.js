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
const allManagers = []
// const generateHTML = (input) = ({ name, id, email, officeNumber }) =>
//     `<!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//         <meta http-equiv="X-UA-Compatible" content="IE=edge">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>Document</title>
//     </head>
//     <body>
//     <div></div>`
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

//* added more if else statements to get different
//*  values and pass them in template literals in functions

function inputEmployee(employee) {


    inquirer

        .prompt([
            {

                type: 'input',
                message: 'What is the ' + employee + ' name?',
                name: 'name',
                // value: employee,
            },
            {
                type: 'input',
                message: 'What is the ' + employee + ' id?',
                name: 'id',
                //value: employee,
            },
            {
                type: 'input',
                message: 'What is the ' + employee + ' email?',
                name: 'email',
                //value: employee,
            },
            {
                type: 'input',
                message: 'What is the ' + employee + ' office number?',
                name: 'officeNumber',
                //value: employee,
            },
        ])

        .then((input) => {


            if (employee === 'Manager') {
                console.log(employee)
                console.log(input.value)
                const manager = new Manager(input.name, input.id, input.email, input.officeNumber, employee)
                console.log(manager)
                //* in order to get the Name of the employee from the class's function getName()

                team.push(manager)
                getEmployee()

                //*isolate managers and push into its own managers array
                allManagers.push(manager)
                getManager(manager)




                //console.log(manager.getName())
                // let name = manager.getName()

            } else if (employee === 'Engineer') {
                const engineer = new Engineer(input.name, input.id, input.email, input.officeNumber, employee)
                console.log(engineer)
                team.push(engineer)
                getEmployee()

                //  console.log(Employee.getName())
            } else if (employee === 'Intern') {
                const intern = new Intern(input.name, input.id, input.email, input.officeNumber, employee)
                console.log(intern)
                team.push(intern)
                getEmployee()

            } else {
                seeEmployees()
            }



        })

}


function getManager(manager) {
    //console.log(manager)
    console.log('\t' + 'ADDED Manager: ' + manager.name)
    // console.log(manager.name)
    // console.log(allManagers, 'all managers')
    // console.log(allManagers[0].name)

}
function seeEmployees() {
    // let htmlPageContent = generateHTML(input)
    // console.log(htmlPageContent)
    // htmlPageContent += team
    //console.log(team.manager.getInfo)
    // console.log(team)
    // let { Manager } = team
    // console.log(Manager)
    //console.log(team.Manager, 'team.Manager')
    // let managers = team.Manager(name, id, email, eNumber)
    // console.log(managers.id)

    // let managers = team.Manager
    // let seeManagers = JSON.stringify(managers)
    // console.log(seeManagers, 'this is stringified')


    // let seeTeam = JSON.stringify(team)
    // console.log(seeTeam)
    // const { name } = seeTeam
    // console.log(name)
    //* add first Employee (always the Manager as engineered in code)
    console.log(team[0])
    console.log(team[0].name, 'name!!!')
    //* since Manager input will always come first, manager values equal to first object (constructor) in the array
    //* add content to index file on an on going basis
    let contentHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Bootstrap demo</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    </head>
    <body>
      <h1>Hello, world!</h1>`

    // let employeeName = team[0].name
    //let employeeType = team[0].employee

    for (var i = 0; i < team.length; i++) {
        let employeeName = team[i].name
        let employeeType = team[i].employee

        contentHTML += `

      <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="..." alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">` + employeeName + `</h5>
            <p class="card-text">` + employeeType + `</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Cras justo odio</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Vestibulum at eros</li>
        </ul>
        <div class="card-body">
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
        </div>
        </div>

`
    }

    //* define more values in team object and extract to put in HTML content variable


    contentHTML += `
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
    </body>
  </html>`


    fs.writeFile('index.html', contentHTML, (err) =>
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

