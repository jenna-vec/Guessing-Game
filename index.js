/*
  Setup an object for you with name, guess, winningPercentage & win properties
*/

var player = {
  name: "User",
  guess: undefined,
  winningPercentage: 0,
  wins: 0
}

/*
  Setup a game object with randomWord, roundWinner, rounds array, and a roundNumber
*/

var game = {
  randomWord: undefined,
  roundWinner: undefined,
  roundsArray: [],
  roundNumber: 1
}

/*
  Create a random words array with at least 10 random words
*/

var words = [
  "hello",
  "goodbye",
  "weird",
  "learn",
  "fun",
  "strong",
  "pogramming",
  "cool",
  "engine",
  "nobody",
  "everybody"
]

/*
  when the 'guess-text' button is clicked:
  - set your guess input value to lowercase
  - make sure the length of the input is 1, if not alert the user to only input 1 letter
  - set your guess text on the ui
  - set the game's random word to a random word from your word array
  - set the random word text on the ui
  - increment the round number
  - if the letter that you guessed is in the random word
    - set yourself as the round winner
    - increment your wins by 1
    - set a message that you won and append it to hte ui
  - if the letter that you guessed is not in the random word
    - set the round winner as the Computer
    - set a message that you lost and append it to the ui
  - calculate your winning percentage and append it to the ui
  - For each round, push the stats of the round to the game rounds array.
    Have it be html text that you push to the rounds array, where you bolden:
    - your guess
    - the computer's random word
    - your winning percentage. Bonus: make this text have a glow effect
    Display the information for all of the rounds on the html
  - clear the value in the input
*/


$("#guess-text-button").click(function(){

  player.guess = ($("#guess-text-input").val().toLowerCase());

  if(player.guess.length < 2 && typeof player.guess === "string")
  {
    $('#your-guess').text(player.guess);

    var arraySelection = Math.floor(Math.random() * words.length)
    game.randomWord = words[arraySelection];
    $('#random-word').text(game.randomWord);

     if(game.randomWord.indexOf(player.guess) > -1){
       $('#message-text').text("You win! The letter '" + player.guess + "' is in the word " + game.randomWord )
       game.roundWinner = player.name
       player.wins++
     }
     else {
      $('#message-text').text("You lose. The letter '" + player.guess + "' is not in the word " + game.randomWord )
      game.roundWinner = ("computer")
     }
  }
  else 
  {
     alert("You must enter a single letter");
  }
  $('#winning-percentage').text(player.wins*100 / game.roundNumber + "%")
  game.roundsArray.push(
    "<li>Round: <b>" + game.roundNumber + "</b>" +
    "<br>Round Winner: <b>" + game.roundWinner + "</b>" +
    "<br>Percentage Wins: <b>" + player.wins*100 / game.roundNumber + "% </b></li>"
  );
  var htmlString = game.roundsArray.join("");
  $('.rounds-list').html(htmlString);
  game.roundNumber++
});
