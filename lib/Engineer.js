const Employee = require("./employee");


// manager 'is a' employee
class Engineer extends Employee {
    constructor(name, id, email, github, employee) {
        super(name, id, email);
        this.github = github;
        this.employee = employee

        // const emp = new Engineer(name, id, email, github, employee)
        // console.log(emp)

    }
    getGitHub() {
        return this.github
    }

    getRole() {
        return this.employee
    }

    // getGitHub() {
    //     var requestAPI = `https://api.github.com/users/${this.github}`

    //     fetch(requestAPI)
    //         .then(function (response) {
    //             return response.json()
    //         })
    //         .then(function (data) {
    //             console.log(data)
    //             const github = data.html_url
    //             console.log(github, 'in getGitHub')
    //             //this.github = github
    //             // const updatedEngineer = new Engineer(this.name, this.id, this.email, this.getGitHub(), employee)
    //             // console.log(updatedEngineer)
    //             return github


    //         })

    //     // fake use case
    //     // console.log(this.getGitHub(), 'this.getGitHub in Eng...js')

    // }



    // getGit(gitLink) {

    //     console.log(gitLink, 'in getGit(gitLink)')
    //     const eng = new Engineer(getName(), id, email, gitLink, employee)
    //     console.log(this.getName, 'in getGit')
    //     return gitLink


    // }



}


// Engineer.getGit(gitHubURL)
// const manager1 = 'manager'
// getEmployee(manager1)

// const engineers = [
//     new Engineer(name, id, email, github)
// ]

// console.log(this.getName(), 'above exports')
module.exports = Engineer