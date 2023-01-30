$(document).ready(function() {
        $("button").click(
            function() {
                var playersel = $(this).val();
                var computersel = "";
                let playerScore = 0;
                let computerScore = 0;
                $("#mymsg").html("");
                var computerplay = Math.floor(Math.random() * 3);
                //computer play random selection of 0-2, 0, 1, or 2.
                if(computerplay == 0){
                    computersel = "rock";
                }
                if(computerplay == 1){
                    computersel = "paper";
                }
                if(computerplay == 2){
                    computersel = "scissors";
                }
                $("#playerdisplay").html(playersel);
                $("#computerdisplay").html(computersel);
                
                
               // for (let i = 0; i < 5; i++) {
                    //playerselection and computer selection is same
                    if(playersel == "rock" && computersel == "rock" ||
                        playersel == "paper" && computersel == "paper" ||
                        playersel == "scissors" && computersel == "scissors") {
                            $("#gameresult").html("Tie");
                            playerScore++;
                            computerScore++;
                            $("#playscore").html(playerScore);
                            $("#compscore").html(computerScore);
                    
                    }
                    //player beats computer
                    else if(playersel == "rock" && computersel == "scissors" ||
                            playersel == "paper" && computersel == "rock" ||
                            playersel == "scissors" && computersel == "paper") {
                                $("#gameresult2").html(playersel + " beats " + computersel);
                                $("#gameresult").html("You Won!");
                                playerScore++;
                                $("#playscore").html(playerScore);
                            }
                    //computer beats player
                    else if(playersel == "rock" && computersel == "scissors" ||
                            playersel == "paper" && computersel == "scissors" ||
                            playersel == "scissors" && computersel == "rock") {
                                $("#gameresult2").html(computersel + " beats " + playersel);
                                $("#gameresult").html("You Lost");
                                computerScore++;
                                $("#compscore").html(computerScore);
                            }
            //  };

            });

});