const generateTeamCards = require('./generateTeamCards')

function generateHTML(team) {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Team Roster</title>
      <link rel="stylesheet" type="text/css" href="./style.css" />
    </head>
    <body>
      <header>Our Team</header>
      ${generateTeamCards(team)}
    </body>
  </html>`
}

module.exports = generateHTML