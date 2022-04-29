const fs = require('fs');
const path = require('path')
const inquirer = require('inquirer');

const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')
const generateHTML = require('./generateHTML');

const team = []

function init() {
    inquirer.prompt(
        [
            { message: "Which type of employee would you like to generate?", type: "list", name: "employeeType", choices: ["Engineer", "Intern", "Manager", "Quit"] }
        ]).then(({ employeeType }) => {
            if (employeeType === "Engineer") engineerQuestions()
            if (employeeType === "Intern") internQuestions()
            if (employeeType === "Manager") managerQuestions()
            if (employeeType === "Quit") quitFunction()
        })
    //     inquirer.prompt(questions).then((answers) => {

    //         fs.writeFileSync(path.join(process.cwd(), "index.html"), generateHTML(answers))

    //         console.log(generateHTML(answers))
    //     }).catch((error) => { console.log(error) })
}
console.log("Welcome, Let's generate some employees!")
init()

const employeeQuestions = [
    { message: "Name the Employee", type: "input", name: "giveName" },
    { message: "Generate Employee Id", type: "input", name: "genId" },
    { message: "Generate Employee Email", type: "input", name: "genEmail" },
]

function engineerQuestions() {
    const engineerQuestions = [...employeeQuestions,
    { message: "Generate Engineer Github", type: "input", name: "github" }]

    inquirer.prompt(engineerQuestions).then((answers) => {
        team.push(new Engineer(answers.giveName, answers.genId, answers.genEmail, answers.github))
    }).then(() => { init() })
}
function internQuestions() {
    const internQuestions = [...employeeQuestions, { message: "Generate Intern School", type: "input", name: "school" }]
    inquirer.prompt(internQuestions).then((answers) => {
        team.push(new Intern(answers.giveName, answers.genId, answers.genEmail, answers.school))
    }).then(() => { init() })

}
function managerQuestions() {
    const managerQuestions = [...employeeQuestions, { message: "Generate Manager Office Number", type: "input", name: "officeNum" }]
    inquirer.prompt(managerQuestions).then((answers) => {
        team.push(new Manager(answers.giveName, answers.genId, answers.genEmail, answers.officeNum))
    }).then(() => { init() })
}
function quitFunction() {
    console.log(team)
    fs.writeFileSync(path.join(path.resolve(__dirname, "dist"), "index.html"), generateHTML(team), "utf-8")
}