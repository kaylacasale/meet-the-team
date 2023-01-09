# Team Profile Generator 👤
A **browser-based profile generator** that generates an HTML webpage with summaries for each employee based on **user input**.

### meet-the-team
You can dynamically build multiple profiles for employee roles like **Managers**, **Engineers**, and **Interns** in seconds. 

## Description
Maintaining up-to-date employee records can offer great opportunities and keep everyone informed. This dynamic browser-based application allows you to constantly update employee information and share profiles using the HTML link generated after the user enters information. 

This application was created using the **Inquirer package** from **Node.js** and the **Jest package** for a suite of unit tests. Inquirer is an **NPM** package that provides an easy way to capture user input in Node.js command line interface applications like this. It provides several methods for asking questions and returning answers from the user that can then be accessed by a `.then` promise function. Therefore, this application will require you to have NPM and Node.js installed to run methods such as `require` associated with the `inquirer` package to execute the code. 

In creating this application, I removed `dist` from the .gitignore file so that Git will track this folder and include it during commits to this repository. 

After entering all employee information, a newly created HTML file will contain your user input. Each time you run this application using `node index.js` in the command-line, content from the prior HTML generated will be completely erased and new information will be displayed. You can save the HTML files separately to retain prior information from each generated file.

## Installation
1) Within this repository, select the green `<> Code` button to copy the GitHub URL associated with this project.
2) Navigate to a file or directory you would like to clone the repository from GitHub using the command-line.
3) Use `git clone <URL>` to clones this application's code locally


> To run tests: 

Enter `npm run test` into the command-line

> To run (or invoke) the application:

Enter `node index.js` into the command-line


4) Follow the series of prompts to enter employee information and add as many employees as desired. 

## Tests
Enter `npm run test` or `npm test` in the command-line to run Jest unit tests on Contructor functions. 

This application includes and tests Employee (parent Class), Manager, Engineer, and Intern classes that should ALL pass. 

## Focus Points
This project demonstrates the use of Object Oriented Programming (OOP) and Test Driven Development. In order to best utilize the DRY code in my development, I focused on creating series of for loops and conditional statements that run the same basic prompts to inquire user input and generate the HTML file with template literals based on various employee role types.

## Demo
The following is a walkthrough video that demonstrates the functionality of the tests and Team Profile Generator application. 

https://user-images.githubusercontent.com/115776118/211267523-b583a1c5-460d-4130-a54b-ab6aac850fd3.mp4


## Questions
I hope you enjoyed using the Team Profile Generator and that it is useful to your business. 

Please contact me directly at kayla.casale@gmail.com with any questions or comments you may have. Thank you!
