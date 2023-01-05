//* entered 'npm init -y' in command-line to install necessary package
//* entered 'npm i inquirer@8.2.4' in order to install the necessary package (inquirer) -> will create a node_modules folder with all necessary code to run inquirer, and list inquirer in dependencies in package.json, and create package.lock for dependencies to function

//* in order to use these packages, need to require them in code and set equal to variable
//* fs will allow us to create the file I want to generate 
const fs = require('fs');
const inquirer = require('inquirer');

const Employee = require('./employee')
// const employee = new Employee();


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

inquirer
    .prompt([
        {

            type: 'input',
            message: 'What is the manager name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is the manager id?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'What is the manager email?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is the manager office number?',
            name: 'officeNumber',
        },
    ])

    .then((input) => {
        console.log(input)
        //* destructed object input values passed into object var name 'input'
        const { name, id, email, officeNumber } = input
        const employee = new Employee(name, id, email);


        // ask if you're done 
        // if not
        // -- prompt the user again
        // if so
        // -- take all of the object you've created and use them to gen your html



        console.log(employee)
        //console.log(Employee.getName())

        let htmlPageContent = generateHTML(input)
        console.log(htmlPageContent)
        htmlPageContent += `<h> ${input.name}`



        fs.writeFile('index.html', htmlPageContent, (err) =>
            err ? console.log(err) : console.log('Successfully created index.html!')
        )





    })