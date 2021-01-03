      var user=0,
      computer=0;

      function setUp() {
      const buttons=document.querySelectorAll('button');
      buttons.forEach((button)=>{
        button.addEventListener('click',()=>{
          let userSelection=button.id;
          let computerSelection=computerPlay(),
          results= playRound(userSelection,computerSelection);
            if (results=="user"){
              user+=1;
                userScore.textContent="User points:" +
                user;
                }
                  else if (results=="computer"){
                    computer+=1;
                      computerScore.textContent="Computer points:" +
                      computer;
                      }
            if (user>=5 && computer<5){
              gameResults.textContent="Congratulations, you won the game!";
              }
              else if (computer>=5 && user<5){
                gameResults.textContent="Oh no, you\'ve lost the game!";
              }
        });
      });
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
setUp();
