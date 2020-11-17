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

  //codes that enable game to be played

