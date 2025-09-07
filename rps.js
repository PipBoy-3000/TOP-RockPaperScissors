//console.log("hello world!")

//Get Player choice from buttons:
var choice_player = "";
var choice_comp = "";
var score_human = 0;
var score_comp = 0;
var score_code = 0;
var round = 0;



const buttons = document.querySelector("#div_buttons");

const player_move = document.querySelector("#div_playerMove");
const comp_move = document.querySelector("#div_compMove");

const divPlayerScore = document.querySelector("#div_playerScore");
const divCompScore = document.querySelector("#div_compScore");
divPlayerScore.textContent = "0";
divCompScore.textContent = "0";


const result = document.querySelector("#div_result");
const result_par = document.createElement("p");
result_par.style="display: flex; justify-content: space-evenly;"

buttons.addEventListener("click", function(event){
    //result_par.textContent = event.target.id
    
    if (event.target.id == "btn_rock"){
        //result_par.textContent="Player selected ROCK!";            
        player_move.textContent="ROCK"
        choice_player="ROCK"
    }
    else if (event.target.id == "btn_paper"){
        //result_par.textContent="Player selected PAPER!";
        player_move.textContent="PAPER"
        choice_player="PAPER"
    }

    else if (event.target.id == "btn_scissors"){
        //result_par.textContent="Player selected SCISSORS!";
        player_move.textContent="SCISSORS"
        choice_player="SCISSORS"
    }

    choice_comp = getComputerChoice();
    comp_move.textContent=choice_comp

    score_code = playRound(choice_player, choice_comp);
    console.log(score_code)
    
    if (score_code == 1){
        score_human = score_human + 1
        result_par.textContent = `${choice_player} beats ${choice_comp}!
        Round WON!`

        divPlayerScore.textContent = score_human.toString();
        
    }

    else if (score_code == 2){
        score_comp = score_comp + 1
        result_par.textContent = `${choice_comp} beats ${choice_player}!
        Round LOST`

        divCompScore.textContent = score_comp.toString();
        
    }

    else{
        result_par.textContent="It's a DRAW!"

    }

    checkScore();

});



result.appendChild(result_par);






function getComputerChoice() {

    var choiceVal = Math.random()
    if (choiceVal <= (1/3)){
        choice = "ROCK"
    }

    else if (choiceVal > (1/3) && choiceVal <= (2/3)){
        choice = "PAPER"
    } 
        
    else {
        choice = "SCISSORS"
    }

    return choice

}

//function getHumanChoice() {
//    choice = prompt("Enter your move: ")
//    return choice
//}


function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toUpperCase()
    computerChoice = computerChoice.toUpperCase()
    scoreCode = 0

    if (humanChoice == computerChoice){
        console.log("DRAW!")
        
    }

    else if (computerChoice == "ROCK"){
        if (humanChoice == "PAPER"){
            console.log("You WIN! Paper beats Rock.")
            scoreCode = 1
        }

        else {
            console.log("You LOSE! Rock beats Scissors.")
            scoreCode = 2
        }
    }

    else if (computerChoice == "PAPER"){
        if (humanChoice == "SCISSORS"){
            console.log("You WIN! Scissors beat Paper.")
            scoreCode= 1
        }

        else {
            console.log("You LOSE! Paper beats Rock.")
            scoreCode = 2
        }
    }

    else if (computerChoice == "SCISSORS"){
        if (humanChoice == "Rock"){
            console.log("You WIN! Rock beats Scissors.")
            scoreCode = 1
        }

        else {
            console.log("You LOSE! Scissors beat Paper.")
            scoreCode = 2
        }
    }

    return scoreCode

}


function checkScore(){
    const btn_reset = document.createElement("button");
    btn_reset.textContent = "Yes";


    if (score_human >= 5){
        score_human = 0;
        score_comp = 0;

        result_par.textContent = "You WIN! Play again?";
        result_par.appendChild(btn_reset);

    }

    else if (score_comp >= 5){
        score_human = 0;
        score_comp = 0;

        result_par.textContent = "You LOSE! Play again?";
        result_par.appendChild(btn_reset);
    }

   

}



//console.log(humanChoice)