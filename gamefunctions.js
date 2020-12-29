
    function game(rounds){ //keeps score and tracks number of rounds//
      let user=0, computer=0;
      let counter=0;
      for (counter;counter<rounds;counter++){
        //keep playing until 5 rounds are played//
        let winner=mainFunction();
        if (winner=="user"){ //user gets a point//
          user+=1;
          console.log("user wins the round");
        } else if (winner=="computer") { //computer gets a point//
          computer+=1;
          console.log("computer wins the round");
        }
      }
      if (user>computer) {
        alert("Congratulations, you\'ve won the game!")
        console.log("user wins");
      }
      else if (computer>user) {
        alert("Oh no, you\'ve lost the game! Better luck next time!")
        console.log("computer wins the game");
      }
      else {
        alert("Oh no, it\'s a tie!")
        console.log("It\'s a tie");
      }
      console.log("game over!")
      return;
    }

    function mainFunction(){ //runs other functions to determine who wins the round//
        let computerSelection=computerPlay(),
        userSelection=promptUser(),
        results= playRound(userSelection,computerSelection);
        return results;
    }

    function promptUser() {
      let userInputValid = false;
      let acceptableChoice = ['rock', 'paper', 'scissors'];
      let promptInput;

      while(!userInputValid) {
        promptInput = prompt("rock, paper, or scissors?").toLowerCase();

        userInputValid = acceptableChoice.includes(promptInput);

        if( !userInputValid) {
          alert('Oops, please enter rock, paper, or scissors.')
        }
      }

      return promptInput;
    }

    function computerPlay(){ //gets selection from computer//
        let myArray=["rock","paper","scissors"],
        randomSelection=Math.floor(Math.random()*myArray.length),
        computerMove=myArray[randomSelection];
        return computerMove;
    }

    function playRound(userSelection,computerSelection){ //play a round//
         switch (userSelection){
           case "rock":
             if (computerSelection=="rock"){
                alert("The computer chose rock, it\'s a tie!");
                return "no winner";
             }
            else if (computerSelection=="scissors"){
              alert("The computer chose scissors, you win!");
              return "user";
            }
            else {
              alert("The computer chose paper, you lose!");
              return "computer";
            }
          break;

          case "paper":
            if (computerSelection=="rock"){
              alert("The computer chose rock, you win!");
              return "user";
            }
            else if (computerSelection=="paper"){
              alert("The computer chose paper, it\'s a tie!");
              return "no winner";
            }
            else{
              alert("The computer chose scissors, you lose!");
              return "computer";
            }
          break;

          case "scissors":
            if (computerSelection=="rock"){
              alert("The computer chose rock, you lose!");
              return "computer";
            }
            else if (computerSelection=="paper"){
              alert("The computer chose paper, you win!");
              return "user";
            }
            else {
              alert("The computer chose scissors, it\'s a tie!");
              return "no winner";
            }
          break;
      }
    }
