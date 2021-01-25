
var player = {
  name: "user",
  guess: undefined,
  winningPercentage: 0,
  wins: 0
}



var game = {
  randomWord: undefined,
  roundWinner: undefined,
  roundsArray: [],
  roundNumber: 1
}



var words = [
  "hello",
  "bye",
  "weird",
  "learn",
  "fun",
  "strong",
  "code",
  "great",
  "plant",
  "growth"
]

$("#guess-text-button").click(function(){

  player.guess = ($("#guess-text-input").val().toLowerCase());

  if(player.guess.length < 2 && typeof player.guess === "string")
  {
    $('#your-guess').text(player.guess);

    var arraySelection = Math.floor(Math.random() * words.length)
    game.randomWord = words[arraySelection];
    $('#random-word').text(game.randomWord);

     if(game.randomWord.indexOf(player.guess) > -1){
       $('#message-text').text("You win! The letter '" + player.guess + "' is in the word " + game.randomWord + ".")
       game.roundWinner = player.name
       player.wins++
       $('#winning-percentage').text(player.wins*100 / game.roundNumber + "%")
       game.roundsArray.push(
         "<li>Round: <b>" + game.roundNumber + "</b>" +
         "<br>Round Winner: <b>" + game.roundWinner + "</b>" +
         "<br>Percentage Wins: <b>" + player.wins*100 / game.roundNumber + "% </b></li>"
       );
       var htmlString = game.roundsArray.join("");
       $('.rounds-list').html(htmlString);
     }
     else {
      $('#message-text').text("You lose. The letter '" + player.guess + "' is not in the word " + game.randomWord + ".")
      game.roundWinner = ("computer")
      $('#winning-percentage').text(player.wins*100 / game.roundNumber + "%")
      game.roundsArray.push(
        "<li>Round: <b>" + game.roundNumber + "</b>" +
        "<br>Round Winner: <b>" + game.roundWinner + "</b>" +
        "<br>Percentage Wins: <b>" + player.wins*100 / game.roundNumber + "% </b></li>"
      );
      var htmlString = game.roundsArray.join("");
      $('.rounds-list').html(htmlString);
     }
     
  game.roundNumber++  
  }
  else 
  {
     alert("You must enter a single letter");
  }
});