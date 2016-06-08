$(document).ready(function() {

var questionCounter = 0;







//All questions stored in an object array
questionsArray = [
{ 'question' : 'Question #1: Who has hit the most home runs in MLB history?',
  'choices' : ['A) Babe Ruth, ', 'B) Ken Griffey Jr., ', 'C) Barry Bonds, ', 'D) Hank Aaron'],
  'answer' : 'C) Barry Bonds, ',
  'tidbit' : 'Barry Bonds hit 762 home runs during his 22 year career.'},

{ 'question' : 'Question #2: During Mark McGwire\'s historic 1998 season, he hit 70 home runs.  Who hit the second most that year?',
  'choices' : ['A) Sammy Sosa, ', 'B) Ken Griffey Jr., ', 'C) Pedro Cerrano, ', 'D) Barry Bonds'],
  'answer' : 'A) Sammy Sosa, ',
  'tidbit' : 'Sosa came in second with 66. Pedro Cerrano is a character in the movie "Major League."'},

{ 'question' : 'Question #3: Nolan Ryan has thrown the most career no-hitters with seven. Who has the second most?',
  'choices' : ['A) Tim Lincecum , ', 'B) Felix Hernandez, ', 'C) Randy Johnson, ', 'D) Sandy Koufax'],
  'answer' : 'D) Sandy Koufax',
  'tidbit' : 'Sandy Koufax threw four no-hitters in his career and famously refused to play on Yom Kippur during the 1965 World Series.'},

{ 'question' : 'Question #4: What was the final year that the Dodgers played in Brooklyn before moving to Los Angeles?',
  'choices' : ['A) 1922, ', 'B) 1957, ', 'C) 1974, ', 'D) The Dodgers played in Brooklyn?'],
  'answer' : 'B) 1957, ',
  'tidbit' : 'They were originally called the "Dodgers" because Brooklyn residents, in those days, having to dodge trolley cars in the street.'},

{ 'question' : 'Question #5: Which pitcher has the most career strikeouts in baseball history?',
  'choices' : ['A) Nolan Ryan, ', 'B) Randy Johnson, ', 'C) Pedro Martinez, ', 'D) Roger Clemens'],
  'answer' : 'A) Nolan Ryan, ',
  'tidbit' : 'Ryan struck out 5,714 batters during his 27 year career, over 800 more than second place Randy Johnson.'},

{ 'question' : 'Question #6: Who\'s on first?',
  'choices' : ['A) Who, ', 'B) What, ', 'C) I don\'t know, ', 'D) (confused picture)'],
  'answer' : 'A) Who, ',
  'tidbit' : '(pic of Abbott and Costello)'},

{ 'question' : 'Question #7: The only jersey number retired by every MLB team is #42. Who wore this number?',
  'choices' : ['A) Rickey Henderson, ', 'B), Babe Ruth, ', 'C) Mickey Mantle, ', 'D) Jackie Robinson'],
  'answer' : 'D) Jackie Robinson',
  'tidbit' : 'Robinson was the first African American to play in the modern era and was inducted into the National Baseball Hall of Fame in 1962.'},

{ 'question' : 'Question #8: In what year did the Mariners begin play in Seattle?',
  'choices' : ['A) 1977, ', 'B) 1995, ', 'C) 1950, ', 'D) 1900'],
  'answer' : 'A) 1977, ',
  'tidbit' : 'The Mariners originally played at the Kingdome before moving to Safeco Field in 1999.'}
];



    console.log(questionsArray.length);


//answer buttons
$('#answerA').click(function() {
      console.log('before A');
      $('.modal-body').html('');
    if (questionsArray[questionCounter].answer === questionsArray[questionCounter].choices[0]) {
        console.log('correct answer A');
        $('#pAnswerArea').html(questionsArray[questionCounter].choices[0]);
        $('#myModalLabel').html('You Got it!');
        $('.modal-body').html(questionsArray[questionCounter].tidbit);
  }
})

$('#answerB').click(function() {
      console.log('before B');
      $('.modal-body').html('');
    if (questionsArray[questionCounter].answer === questionsArray[questionCounter].choices[1]) {
        console.log('correct answer B');
        $('#pAnswerArea').html(questionsArray[questionCounter].choices[1]);
        $('#myModalLabel').html('You Got it!');
        $('.modal-body').html(questionsArray[questionCounter].tidbit);
  }
})

$('#answerC').click(function() {
      console.log('before C');
      $('.modal-body').html('');
    if (questionsArray[questionCounter].answer === questionsArray[questionCounter].choices[2]) {
        console.log('correct answer C');
        $('#pAnswerArea').html(questionsArray[questionCounter].choices[2]);
        $('#myModalLabel').html('You Got it!');
        $('.modal-body').html(questionsArray[questionCounter].tidbit);
  }
})

$('#answerD').click(function() {
      console.log('before D');
      $('.modal-body').html('');
    if (questionsArray[questionCounter].answer === questionsArray[questionCounter].choices[3]) {
        console.log('correct answer D');
        $('#pAnswerArea').html(questionsArray[questionCounter].choices[3]);
        $('#myModalLabel').html('You Got it!');
        $('.modal-body').html(questionsArray[questionCounter].tidbit);
  };
})
//start button listener
$('#start').click(function() {
    //clicking will start game - show first question
    //shows question
      $('#questionDiv').html(questionsArray[questionCounter].question);
      $('#showAnswerDiv').html(questionsArray[questionCounter].choices);
      $('#start').hide();
      $('#next').show();
      $('#answerA').show();
      $('#answerB').show();
      $('#answerC').show();
      $('#answerD').show();
})

//Next question button
$('#next').click(function()   {
    questionCounter++;
          if (questionCounter === questionsArray.length) {
        questionCounter = 0;
    }
    $('#myModalLabel').html('Nope! Guess Again');
    $('#pAnswerArea').html('');
    $('#questionDiv').html(questionsArray[questionCounter].question);
    $('#showAnswerDiv').html(questionsArray[questionCounter].choices);
  console.log(questionCounter);
})

















//document.ready parentheses below
});
