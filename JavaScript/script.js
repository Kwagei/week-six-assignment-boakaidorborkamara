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
}

function computerPlay(){
    let radomNum = Math.floor(Math.random()*8);
    let box = document.getElementById("box" + radomNum);

    console.log(radomNum, box);

    if(box.innerHTML === ""){
        box.innerHTML = computer;
        count+=1;
        console.log("count:",count);
    }else{
        if(count <= 8){
            computerPlay();
        }
            
        // box.innerHTML = computer;
    };

    
   
}


//Enabling game to win

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

for(i = 0; i < win_positions.length; i++){
    console.log(win_positions[i])
}

function gameWins(){
    for(i = 0; i < allBoxes.length; i++){
        if(allBoxes[0].innerHTML === humanPlayer && allBoxes[1].innerHTML === humanPlayer && allBoxes[2].innerHTML === humanPlayer){
            console.log("Human Player wins")
        }
        
    }


}

gameWins();


