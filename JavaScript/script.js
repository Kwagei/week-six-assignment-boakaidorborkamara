let playerTerm = document.getElementById("playerStatus");
let finalResult = document.getElementById("finalResults");
let resetGame = document.getElementById("resetBtn");

// First board, which is the welcome board containing two and one players options

let board1 = document.querySelector(".wrapper1");
// console.log(board1);
let first_name_option = document.getElementById("name1");
// console.log(first_name_option);
let second_name_option = document.getElementById("name2");

function btnReaction(){
    if(document.querySelector(".wrapper1").style.display === "block"){
        board1.style.display="none";
    }else{
        board1.style.display="none";
        document.querySelector(".wrapper2").style.display = "block";
    }
}

first_name_option.addEventListener('click' , btnReaction);
second_name_option.addEventListener('click' , btnReaction);

//code to display and hide instructions



// Second board, which enable player to select a name (player O or X)
let humanPlayer = document.getElementById("playerX");
let computer = document.getElementById("playerO");
humanPlayer.addEventListener("click" , selectPlayer);
computer.addEventListener("click" , selectPlayer);

function selectPlayer(e){
    let selected_player = e.target.id;
    if(selected_player === "playerX"){
        humanPlayer= "X";
        computer= "O";
        
    }  else{
        humanPlayer = "O";
        computer = "X";
    } 
} 

//actual game board, the field for players to play
let playerSelectionArea = document.querySelector(".wrapper2");
let gameField = document.querySelector(".wrapper3");
function displayPlayground(){
    if(playerSelectionArea.style.display === "block"){
        playerSelectionArea.style.display = "none";
        gameField.style.display = "block";
        console.log("stage changed");
    }
    else{
        gameField.style.display = "block";
        playerSelectionArea.style.display = "none";
    }
  }

  humanPlayer.addEventListener("click" , displayPlayground);
  computer.addEventListener("click" , displayPlayground);



//Game functionalities
let count = 0;


let allBoxes = document.querySelectorAll(".boxes");

allBoxes.forEach( function(box){
    box.setAttribute("onclick" , "boxRespond(event)");
   
});


function boxRespond(e){
    let box = document.getElementById(e.target.id);

    if(box.innerHTML === ""){
        box.innerHTML = humanPlayer;
        count+=1;
        computerPlay();
    }else{
        alert("Box Filled");
        
    }  

    humanWins();
    computerWins();
}




function computerPlay(){
    let radomNum = Math.floor(Math.random()*8);
    let box = document.getElementById("box" + radomNum);

    if(box.innerHTML === ""){
        box.innerHTML = computer;
        count+=1;
        console.log("count:",count);
    }else{
        if(count <= 8){
            computerPlay();
        }
    };
}


//Enabling game to win and draw

let win_positions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

let winner = document.getElementById("finalResults");
function humanWins(){
    let winner = document.getElementById("finalResults");
        if(allBoxes[0].innerHTML === humanPlayer && allBoxes[1].innerHTML === humanPlayer && allBoxes[2].innerHTML === humanPlayer){
           winner.innerHTML = "Human Wins";
        }else if(allBoxes[3].innerHTML === humanPlayer && allBoxes[4].innerHTML === humanPlayer && allBoxes[5].innerHTML === humanPlayer){
            winner.innerHTML = "Human Wins";}else if(allBoxes[6].innerHTML === humanPlayer && allBoxes[7].innerHTML === humanPlayer && allBoxes[8].innerHTML === humanPlayer){
                winner.innerHTML = "Human Wins";}else if(allBoxes[0].innerHTML === humanPlayer && allBoxes[3].innerHTML === humanPlayer && allBoxes[6].innerHTML === humanPlayer){
                    winner.innerHTML = "Human Wins";}else if(allBoxes[1].innerHTML === humanPlayer && allBoxes[4].innerHTML === humanPlayer && allBoxes[7].innerHTML === humanPlayer){
                        winner.innerHTML = "Human Wins";}else if(allBoxes[2].innerHTML === humanPlayer && allBoxes[5].innerHTML === humanPlayer && allBoxes[6].innerHTML === humanPlayer){
                            winner.innerHTML = "Human Wins";}else if(allBoxes[0].innerHTML === humanPlayer && allBoxes[4].innerHTML === humanPlayer && allBoxes[8].innerHTML === humanPlayer){
                                winner.innerHTML = "Human Wins";}else if(allBoxes[2].innerHTML === humanPlayer && allBoxes[4].innerHTML === humanPlayer && allBoxes[6].innerHTML === humanPlayer){
                                    winner.innerHTML = "Human Wins";}
}
let computer_score = document.getElementById("computerScore");
    let increaseScore = 0;
    console.log("The typeof is:",typeof( computer_score.innerText));
    console.log("The type of is:" , typeof(increaseScore))

    let changetonum = Number(computer_score);
    console.log(typeof(changetonum));

    

function computerWins(){
    
   
    
        if(allBoxes[0].innerHTML === computer && allBoxes[1].innerHTML === computer && allBoxes[2].innerHTML === computer){
           winner.innerHTML = "Computer Wins";
        }else if(allBoxes[3].innerHTML === computer && allBoxes[4].innerHTML === computer && allBoxes[5].innerHTML === computer){
            winner.innerHTML = "Computer Wins";}else if(allBoxes[6].innerHTML === computer && allBoxes[7].innerHTML === computer && allBoxes[8].innerHTML === computer){
                winner.innerHTML = "Computer Wins";}else if(allBoxes[0].innerHTML === computer && allBoxes[3].innerHTML === computer && allBoxes[6].innerHTML === computer){
                    winner.innerHTML = "Computer Wins";}else if(allBoxes[1].innerHTML === computer && allBoxes[4].innerHTML === computer && allBoxes[7].innerHTML === computer){
                        winner.innerHTML = "Computer Wins";}else if(allBoxes[2].innerHTML === computer && allBoxes[5].innerHTML === computer && allBoxes[6].innerHTML === computer){
                            winner.innerHTML = "Computer Wins";}else if(allBoxes[0].innerHTML === computer && allBoxes[4].innerHTML === computer && allBoxes[8].innerHTML === computer){
                                winner.innerHTML = "Computer Wins";}else if(allBoxes[2].innerHTML === computer && allBoxes[4].innerHTML === computer && allBoxes[6].innerHTML === computer){
                                    winner.innerHTML = "Computer Wins";}

                //Code to enable computer win
                if(winner.innerHTML === "Computer Wins"){
                increaseScore++;
                computer_score.innerHTML = increaseScore;
                console.log(computer_score.innerHTML);
                                                    }
}

               


//Enable player to play again
let playAgainBtn = document.getElementById("play_again_Btn");
playAgainBtn.addEventListener("click" , resetMyGame);

function resetMyGame(){
    for(let i = 0; i < allBoxes.length; i++){
        allBoxes[i].innerHTML = "";
    }
    winner.innerHTML = "";
    count = 0;
}

//Enable the game to reset
let resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener("click" , resetTheGame() );

function resetTheGame(){
   
}




