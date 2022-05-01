const index = require('./index')

function generateTeamCards(team) {
    const teamArray = []

    for (let i = 0; i < team.length; i++) {

        if (team[i].getRole() === "Engineer") {
            const engineerCard = `<div class = "card-container">
            <h1>Name: ${team[i].getName()}</h1>
            <div class = "card">
              <p>ID: ${team[i].getId()}</p>
              <p>Email: ${team[i].getEmail()}</p>
              <p>Github: ${team[i].getGithub()}</p>
            </div>
          </div>`
            teamArray.push(engineerCard)
        }
        if (team[i].getRole() === "Intern") {
            const internCard = `<div class = "card-container">
            <h1>Name: ${team[i].getName()}</h1>
            <div class = "card">
              <p>ID: ${team[i].getId()}</p>
              <p>Email: ${team[i].getEmail()}</p>
              <p>School: ${team[i].getSchool()}</p>
            </div>
          </div>`
            teamArray.push(internCard)
        }
        if (team[i].getRole() === "Manager") {
            const managerCard = `<div class = "card-container">
            <h1>Name: ${team[i].getName()}</h1>
            <div class = "card">
              <p>ID: ${team[i].getId()}</p>
              <p>Email: ${team[i].getEmail()}</p>
              <p>Office Number: ${team[i].getOfficeNumber()}</p>
            </div>
          </div>`
            teamArray.push(managerCard)
        }


    }
    return teamArray.join(``)
}
module.exports = generateTeamCards