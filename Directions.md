For this mini-project, you’ll need to create a React app that has the following pages
/ : Has two buttons linking to their respective pages - “Leaderboard” and “Play”
/leaderboard
On load, makes a get request to /api/players
Stores the result in state
Displays a list of all players usernames
Clicking on a player takes you to the single player page (Remember the react-router-dom <Link /> component)
/leaderboard/:playerId
Makes a request to /api/players/:playerId
Stores the result in state
Displays the information of a single player
Shows their username along with a lost of all of the games they’ve played
Each game includes the ID and result
EXTRA CREDIT:
/create-player
Displays a small form with two items:
Username text input: decides the new users username
Submit button: Makes a post request to /api/players sending up the players username
