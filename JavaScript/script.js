// code to select a player
function displayPlayground(){
    let playerSelectionArea = document.querySelector(".wrapper");
    let gameField = document.querySelector(".wrapper2");
    if(playerSelectionArea.style.display === "block"){
        playerSelectionArea.style.display = "none";
        gameField.style.display = "block";
        console.log("hey");
    }
    else{
        gameField.style.display = "block";
        playerSelectionArea.style.display = "none";
    }
  }

// select player, either X or O
var playX = document.getElementById("playerX").addEventListener("click" , playerSelectionX);
var playerO = document.getElementById("playerO").addEventListener("click" , playerSelectionO);
var selectedPlayerName;
function playerSelectionX(){
    if(playerX === document.getElementById("playerX")){
        selectedPlayerName = "X";
        console.log(selectedPlayerName);
    }  
};

function playerSelectionO(){
    if(playerO === document.getElementById("playerO")){
        selectedPlayerName = "O";
        console.log(selectedPlayerName);
    } 
};

//Boxes functionalities
var playerTerm = document.getElementById("playerStatus");
var finalResult = document.getElementById("finalResults")
var resetGame = document.getElementById("resetBtn");

//selection of boxes
var allBoxes = document.querySelectorAll(".boxes");
allBoxes.forEach(box => {
    box.addEventListener('click' , clickResult)
})

console.log(allBoxes);




function clickResult(){

        if(document.getElementById("box0")){
            document.getElementById("box0").innerHTML="X";
        }

        if(document.getElementById("box1")){
            document.getElementById("box1").innerHTML="X";
        }

        if(document.getElementById("box2")){
            document.getElementById("box2").innerHTML="X";
        }

        if(document.getElementById("box3")){
            document.getElementById("box3").innerHTML="X";
        }
    
    
        let boxArray = Array.from(allBoxes);
        let boxIndex = boxArray.indexOf(event.target);
        console.log(boxIndex);

    
        
    }