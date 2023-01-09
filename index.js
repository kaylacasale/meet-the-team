//* entered 'npm init -y' in command-line to install necessary package
//* entered 'npm i inquirer@8.2.4' in order to install the necessary package (inquirer) -> will create a node_modules folder with all necessary code to run inquirer, and list inquirer in dependencies in package.json, and create package.lock for dependencies to function

//* entered 'npm install --save-dev jest' to install jest package in saveDev... object in package.json instead of jest object
//* changed default value in "test" object in package.json to "jest" in order to connect tests upon running "npm run test" in command line

//* in order to use these packages, need to require them in code and set equal to variable
//* fs will allow us to create the index.html file I want to generate 
const fs = require('fs');
const inquirer = require('inquirer');

const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
// const employee = new Employee();

const team = []
const allManagers = []

//* prompt to find which type of Employee will request user input for

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


//* added more if else statements to get different values and pass them in template literals in functions
//* first value passed into this function upon initialization is 'Manager' to generate prompts for Manager role first (upon opening application)
//* prompt includes conditionals to display different messages and retrieve input for changing properties based on specific position (e.g. office number for manager, github for engineer, school for intern)

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
                message: function () {
                    if (employee === 'Manager') {
                        return 'What is the ' + employee + ' office number?'
                    } else if (employee === 'Engineer') {
                        return 'What is the ' + employee + ' gitHub?'
                    } else if (employee === 'Intern') {
                        return 'What is the ' + employee + ' school?'
                    }
                },
                name: 'some',
                some: function () {
                    if (employee === 'Manager') {
                        return 'officeNumber'
                    } else if (employee === 'Engineer') {
                        return 'github'
                    } else if (employee === 'Intern') {
                        return 'school'
                    }
                }
                //value: employee,
            },
        ])

        .then((input) => {



            if (employee === 'Manager') {
                //* deconstructed object input values passed into object var name 'input' to further call in new constructor function
                const { name, id, email, some } = input;
                const manager = new Manager(name, id, email, some, employee);
                console.log(manager)
                console.log(manager.getName(), 'in index')
                manager['some'] = manager.getName()
                console.log(manager)
                console.log(employee)
                console.log(input.value)
                console.log(input.officeNumber)
                // const manager = new Manager(input.name, input.id, input.email, input.some, employee)
                // console.log(manager)

                team.push(manager)
                getEmployee()

                //*isolate managers and push into its own managers array
                allManagers.push(manager)
                //* pass constructor object into function in order to display employee type and name right after inputing all values for that specific role
                displayAddedEmployee(manager)


            } else if (employee === 'Engineer') {
                const { name, id, email, some } = input;
                const engineer = new Engineer(name, id, email, some, employee);
                console.log(engineer)
                console.log(engineer.getGitHub(), 'in index')

                //* initially wanted to integrate fetch request in order to get gitHub URL instead of just concatenating string to generate link - could do fetch successfully but difficult to integrate link values from fetch into index given one prompt with different conditionals to pass through into index variables


                // var requestAPI = `https://api.github.com/users/${engineer.getGitHub()}`

                // fetch(requestAPI)
                //     .then(function (response) {
                //         console.log('Successfull fetch of gitHub URL!')
                //         return response.json()
                //     })
                //     .then(function (data) {
                //         //console.log(data)
                //         const githubURL = data.html_url
                //         console.log(githubURL, 'in index')

                //         return githubURL
                //     })


                console.log(engineer)


                team.push(engineer)
                getEmployee()
                displayAddedEmployee(engineer)


            } else if (employee === 'Intern') {
                const { name, id, email, some } = input;
                const intern = new Intern(name, id, email, some, employee);
                // const intern = new Intern(input.name, input.id, input.email, input.some, employee)
                console.log(intern)
                team.push(intern)
                getEmployee()
                displayAddedEmployee(intern)

            } else {
                seeEmployees()
                return team
            }



        })

}


function displayAddedEmployee(employee) {
    //console.log(manager)
    console.log('\t' + 'ADDED ' + employee.getRole() + ': ' + employee.getName())
    // console.log(manager.name)
    // console.log(allManagers, 'all managers')
    // console.log(allManagers[0].name)

}

git = []

function seeEmployees() {

    //* add first Employee (always the Manager as engineered in code) then more employees based on input using for loop to run through 'team' array that constructor objects are pushed into 
    console.log(team[0])
    console.log(team[0].name, 'name!!!')
    //console.log(gitHubURLs, 'in seeEmployee function')


    //* since Manager input will always come first, manager values equal to first object (constructor) in the array
    //* add content to index file on an on going basis after user inputs values for each employee type 
    //* directly below shows the intitial index.html content added upon creating file
    //* linked styling for Bootstrap and google icons (to generate icons associated with each employee type) in generated html file content
    let contentHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Bootstrap demo</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
      <link rel="stylesheet" href="style.css" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    </head>
    <body style="background-color:aquamarine;">
        <nav class="navbar navbar-light bg-light shadow-lg mb-5 p-3">
            <a class="navbar-brand" href="#">
            <i class="material-icons d-inline-block align-top" >accessibility</i>
            <img >
            Meet The Team
            </a>
        </nav>
      <h1 class="mb-5 p-3" id="header">My Team</h1>
      <div class="container">
        <div class="row">`



    for (var i = 0; i < team.length; i++) {
        let employeeName = team[i].getName()
        let employeeType = team[i].getRole()
        let employeeId = team[i].getId()
        let employeEmail = team[i].getEmail()

        function getIcon() {
            if (team[i].getRole() === 'Manager') {
                let icon = 'supervisor_account'
                return icon
            } else if (team[i].getRole() === 'Engineer') {
                let icon = 'build'
                return icon
            } else if (team[i].getRole() === 'Intern') {
                let icon = 'school'
                return icon

            }

        }

        function getSome() {

            if (team[i].getRole() === 'Manager') {
                let officeNumber = team[i].getOfficeNumber()
                return `${officeNumber}`
            } else if (team[i].getRole() === 'Engineer') {
                let gitHub = team[i].getGitHub()
                console.log(gitHub, 'in getSome()')
                return `<a href="https://github.com/${gitHub}">https://github.com/${gitHub}</a>`
            } else if (team[i].getRole() === 'Intern') {
                let school = team[i].getSchool()
                return `${school}`

            }
        }

        function getSomeName() {
            if (team[i].getRole() === 'Manager') {
                let propertyeName = 'Office Number: '
                return propertyeName
            } else if (team[i].getRole() === 'Engineer') {
                let propertyeName = 'GitHub: '
                return propertyeName
            } else {
                let propertyeName = 'School: '
                return propertyeName

            }
        }

        function getRoleDescription() {
            if (team[i].getRole() === 'Manager') {
                let link = "https://www.westminster.ac.uk/sites/default/public-files/general-documents/The-Role-of-the-Manager.pdf"
                return link
            } else if (team[i].getRole() === 'Engineer') {
                let link = "https://cm.fiu.edu/wp-content/uploads/2018/07/JD_Site_Field-Engineer_EN.pdf"
                return link
            } else {
                let link = "https://careerservices.wvu.edu/files/d/c50fed4c-5c9c-42b1-8b30-233703b86cef/internship-job-descriptions.pdf"
                return link

            }
        }


        contentHTML += `

      <div class="card col-12 col-md-3 col-lg-2 shadow-lg p-3 mx-2" id="cards" style="width: 18rem; background-color: rgb(241, 240, 240);">
        <i class="material-icons" style="font-size:48px;">${getIcon()}</i>
        <div class="card-body">
            <h5 class="card-title">` + employeeName + `</h5>
            <p class="card-text">` + employeeType + `</p>
        </div>
        <ul class="list-group list-group-flush" style="background-color: black">
            <li class="list-group-item" style="background-color: aquamarine;">ID: ${employeeId}</li>
            <li class="list-group-item" style="background-color: aquamarine;">Email: <a href="mailto:${employeEmail}subject=subject text">${employeEmail}</li>
            <li class="list-group-item" style="background-color: aquamarine;">${getSomeName()} ${getSome()} </li>
        </ul>
                    <div class="card-body">
                        <a href="#${getRoleDescription()}" class="card-link">${employeeType} Roles & Responsibilities</a>
                    </div>
        </div>`
    }


    //* define more values in team object and extract to put in HTML content variable


    contentHTML += `
</div>
</div>
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
    </body>
  </html> `



    fs.writeFile('index.html', contentHTML, (err) =>
        err ? console.log(err) : console.log('Successfully created index.html!')
    )



}

//* in order to get input values for manager role upon running the application, pass 'Manager' string into inputEmployee() function
function init() {
    inputEmployee('Manager')
    //getEmployee('Manager')
}

init()




