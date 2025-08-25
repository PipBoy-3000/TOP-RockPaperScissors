console.log("hello world!")

function getComputerChoice() {

    var choiceVal = Math.random()
    if (choiceVal <= (1/3)){
        choice = "rock"
    }

    else if (choiceVal > (1/3) && choiceVal <= (2/3)){
        choice = "paper"
    } 
        
    else {
        choice = "scissors"
    }

    return choice

}

function getHumanChoice() {
    choice = prompt("Enter your move: ")
    return choice
}



function playGame(){
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
    
    
    //console.log (computerChoice)

    humanScore = computerScore = 0
    round=0

    

    while (round < 5){
        round = round + 1

        humanChoice = getHumanChoice()
        computerChoice = getComputerChoice()

        scoreCode = playRound(humanChoice, computerChoice)
        if (scoreCode == 1){
            humanScore = humanScore + 1
        }

        else if (scoreCode == 2){
            computerScore = computerScore + 1
        }

    }

    if (humanScore > computerScore){
        console.log("Congratulations, you WON!")
    }

    else if (humanScore < computerScore){
        console.log("Sorry, you LOST!")
    }


}



//playGame()





//console.log(humanChoice)