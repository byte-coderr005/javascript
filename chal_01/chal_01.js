
var team = ['koalas','dolphins'];
var scores = [301, 293];
let scoreINput = prompt("Please enter scores for team dolphins");
let scoreInput = prompt("Please enter a score for team koalas");

if(scores[0]> scores[1])
    console.log(team[1] + " winner!");
else if(scores[0] < scores[1])
    console.log(team[0] + "winner!");