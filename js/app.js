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
  'tidbit' : 'They were originally called the "Dodgers" because of having to dodge trolley cars in Brooklyn'}
];



    console.log(questionsArray.length);


//answer buttons
$('#answerA').click(function() {
      console.log('before A');
    if (questionsArray[questionCounter].answer === questionsArray[questionCounter].choices[0]) {
        console.log('correct answer A');
        $('#pAnswerArea').html(questionsArray[questionCounter].choices[0]);
  }
})

$('#answerB').click(function() {
      console.log('before B');
    if (questionsArray[questionCounter].answer === questionsArray[questionCounter].choices[1]) {
        console.log('correct answer B');
        $('#pAnswerArea').html(questionsArray[questionCounter].choices[1]);
  }
})

$('#answerC').click(function() {
      console.log('before C');
    if (questionsArray[questionCounter].answer === questionsArray[questionCounter].choices[2]) {
        console.log('correct answer C');
        $('#pAnswerArea').html(questionsArray[questionCounter].choices[2]);
  }
})

$('#answerD').click(function() {
      console.log('before D');
    if (questionsArray[questionCounter].answer === questionsArray[questionCounter].choices[3]) {
        console.log('correct answer D');
        $('#pAnswerArea').html(questionsArray[questionCounter].choices[3]);
  }
})
//start button listener
$('#start').click(function() {
    //clicking will start game - show first question
    //shows question
      $('#questionDiv').html(questionsArray[questionCounter].question);
      $('#showAnswerDiv').html(questionsArray[questionCounter].choices);

      // answerQuestion(questionsArray);
      // $('#start').hide();



    // showQuestion(i);
    // showChoices(i);

    //tidbit function will show tidbit and advance quiz
    // showTidbit();
})

//Next question button
$('#next').click(function()   {
    questionCounter++;
          if (questionCounter === questionsArray.length) {
        questionCounter = 0;
    }
    $('#pAnswerArea').html('');
    $('#questionDiv').html(questionsArray[questionCounter].question);
    $('#showAnswerDiv').html(questionsArray[questionCounter].choices);
  console.log(questionCounter);
})

















//document.ready parentheses below
});
