$(document).ready(function() {

var questionCounter = 0;
var player1Score = 0;
var player2Score = 0;
var player1Status = false;
var player2Status = false;







//All questions stored in an object array
questionsArray = [
{ 'question' : 'Question #1: Who has hit the most home runs in MLB history?',
  'choices' : ['Babe Ruth', 'Ken Griffey Jr.', 'Barry Bonds', 'Hank Aaron'],
  'answer' : 'Barry Bonds',
  'tidbit' : 'Barry Bonds hit 762 home runs during his 22 year career.' },

{ 'question' : 'Question #2: During Mark McGwire\'s historic 1998 season, he hit 70 home runs.  Who hit the second most that year?',
  'choices' : ['Sammy Sosa', 'Ken Griffey Jr.', 'Pedro Cerrano', 'Barry Bonds'],
  'answer' : 'Sammy Sosa',
  'tidbit' : 'Sosa came in second with 66. Pedro Cerrano is a character in the movie "Major League."' },

{ 'question' : 'Question #3: Nolan Ryan has thrown the most career no-hitters with seven. Who has the second most?',
  'choices' : ['Tim Lincecum', 'Felix Hernandez', 'Randy Johnson', 'Sandy Koufax'],
  'answer' : 'Sandy Koufax',
  'tidbit' : 'Sandy Koufax threw four no-hitters in his career and famously refused to play on Yom Kippur during the 1965 World Series.' },

{ 'question' : 'Question #4: What was the final year that the Dodgers played in Brooklyn before moving to Los Angeles?',
  'choices' : ['1922', '1957', '1974', 'The Dodgers played in Brooklyn?'],
  'answer' : '1957',
  'tidbit' : 'They were originally called the "Dodgers" because of Brooklyn residents, in those days, having to dodge trolley cars in the street.' },

{ 'question' : 'Question #5: Which pitcher has the most career strikeouts in baseball history?',
  'choices' : ['Nolan Ryan', 'Randy Johnson', 'Pedro Martinez', 'Roger Clemens'],
  'answer' : 'Nolan Ryan',
  'tidbit' : 'Ryan struck out 5,714 batters during his 27 year career, over 800 more than second place Randy Johnson.' },

{ 'question' : 'Question #6: Who\'s on first?',
  'choices' : ['Who', 'What', 'I don\'t know', '(confused picture)'],
  'answer' : 'Who',
  'tidbit' : '<img src="https://i.ytimg.com/vi/ZwWD-cBpYpU/hqdefault.jpg">' },

{ 'question' : 'Question #7: The only jersey number retired by every MLB team is #42. Who wore this number?',
  'choices' : ['Rickey Henderson', 'Babe Ruth', 'Mickey Mantle', 'Jackie Robinson'],
  'answer' : 'Jackie Robinson',
  'tidbit' : 'Robinson was the first African American to play in the modern era and was inducted into the National Baseball Hall of Fame in 1962.' },

{ 'question' : 'Question #8: In what year did the Mariners begin play in Seattle?',
  'choices' : ['1977', '1995', '1950', '1900'],
  'answer' : '1977',
  'tidbit' : 'The Mariners originally played at the Kingdome before moving to Safeco Field in 1999.' },

{ 'question' : 'Question #9: In what year did the Cubs last win the World Series?',
  'choices' : ['Never', '1908', '1951', '2003'],
  'answer' : '1908',
  'tidbit' : 'The Cubs currently play at Wrigley Field, the second-oldest stadium in the MLB.'}
];






//answer buttons
$('#answerA').click(function() {
      console.log('before A');
      $('.modal-body').html('');
    if (questionsArray[questionCounter].answer === questionsArray[questionCounter].choices[0]) {
        console.log('correct answer A');
        scoreAdder();
        // $('#pAnswerArea').html(questionsArray[questionCounter].choices[0]);
        $('#myModalLabel').html('You Got it!');
        $('.modal-body').html(questionsArray[questionCounter].tidbit);
  }
})

$('#answerB').click(function() {
      console.log('before B');
      $('.modal-body').html('');
      if (questionsArray[questionCounter].answer === questionsArray[questionCounter].choices[1]) {
        winState = 'correct';
        console.log('correct answer B');
        scoreAdder();
        // $('#pAnswerArea').html(questionsArray[questionCounter].choices[1]);
        $('#myModalLabel').html('You Got it!');
        $('.modal-body').html(questionsArray[questionCounter].tidbit);
  }

})

$('#answerC').click(function() {
      console.log('before C');
      $('.modal-body').html('');
    if (questionsArray[questionCounter].answer === questionsArray[questionCounter].choices[2]) {
        console.log('correct answer C');
        scoreAdder();
        // $('#pAnswerArea').html(questionsArray[questionCounter].choices[2]);
        $('#myModalLabel').html('You Got it!');
        $('.modal-body').html(questionsArray[questionCounter].tidbit);
  }
})

$('#answerD').click(function() {
      console.log('before D');
      $('.modal-body').html('');
    if (questionsArray[questionCounter].answer === questionsArray[questionCounter].choices[3]) {
        console.log('correct answer D');
        scoreAdder();
        // $('#pAnswerArea').html(questionsArray[questionCounter].choices[3]);
        $('#myModalLabel').html('You Got it!');
        $('.modal-body').html(questionsArray[questionCounter].tidbit);
  };
})
//start button listener
$('#start').click(function() {
    //clicking will start game - show first question
    //shows question
      $('#questionDiv').html(questionsArray[questionCounter].question);
      // $('#showAnswerDiv').html(questionsArray[questionCounter].choices);
      $('#start').hide();
      $('#next').show();
      $('#player1btn').show();
      $('#player2btn').show();
      $('#answerA').html(questionsArray[questionCounter].choices[0]);
      $('#answerB').html(questionsArray[questionCounter].choices[1]);
      $('#answerC').html(questionsArray[questionCounter].choices[2]);
      $('#answerD').html(questionsArray[questionCounter].choices[3]);
      $('#player1scoreboard').html('Player 1 Score: ' + player1Score);
      $('#player2scoreboard').html('Player 2 Score: ' + player2Score);
})

//Next question button
$('#next').click(function()   {
    questionCounter++;
      endOfGame();
      console.log('player 1 score is ' + player1Score + ' and player 2 score is ' + player2Score);
      $('#answerA').html(questionsArray[questionCounter].choices[0]);
      $('#answerB').html(questionsArray[questionCounter].choices[1]);
      $('#answerC').html(questionsArray[questionCounter].choices[2]);
      $('#answerD').html(questionsArray[questionCounter].choices[3]);
      $('#answerA').hide();
      $('#answerB').hide();
      $('#answerC').hide();
      $('#answerD').hide();
      $('#player1btn').show();
      $('#player2btn').show();
      $('#myModalLabel').html('Nope! Guess Again');
      $('#questionDiv').html(questionsArray[questionCounter].question);
      $('#player1scoreboard').html('Player 1 Score: ' + player1Score);
      $('#player2scoreboard').html('Player 2 Score: ' + player2Score);
})

//player 1 or player 2 buzzer
$('#player1btn').click(function() {
      player1Status = true;
      player2Status = false;
      console.log(player1Status);
      console.log(player2Status);
      $('#player1btn').hide();
      $('#player2btn').hide();
      $('#answerA').show();
      $('#answerB').show();
      $('#answerC').show();
      $('#answerD').show();
})

$('#player2btn').click(function() {
      player1Status = false;
      player2Status = true;
      console.log(player1Status);
      console.log(player2Status);
      $('#player1btn').hide();
      $('#player2btn').hide();
      $('#answerA').show();
      $('#answerB').show();
      $('#answerC').show();
      $('#answerD').show();
})

function scoreAdder() {
  if (player1Status === true) {
    player1Score++;
  } else if (player2Status === true) {
    player2Score++;
  } else if (questionCounter === questionsArray.length) {
      }
}

function endOfGame() {

    if (questionCounter === questionsArray.length) {
      if (player1Score > player2Score) {
          $('.body').html('Player 1 Wins!  <form><button type="submit" id="reloadButton">Replay</button></form>')
        } else if (player2Score > player1Score) {
          $('.body').html('Player 2 Wins! <form><button type="submit" id="reloadButton">Replay</button></form>')
        }
    }
}

$('#reloadButton').click(function() {
    history.go(0);
    console.log('replay is clicked');
})








//document.ready parentheses below
});
