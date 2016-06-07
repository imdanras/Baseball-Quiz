$(document).ready(function() {

var questionCounter = 0;







//All questions stored in an object array
questionsArray = [
{ 'question' : 'Who has hit the most home runs in MLB history?',
  'choices' : ['A) Babe Ruth, ', 'B) Ken Griffey Jr., ', 'C) Barry Bonds, ', 'D) Hank Aaron'],
  'answer' : 'C) Barry Bonds, ',
  'tidbit' : 'Barry Bonds hit 762 home runs during his 22 year career.'},

{ 'question' : 'During Mark McGwire\'s historic 1998 season, he hit 70 home runs.  Who hit the second most that year?',
  'choices' : ['A) Sammy Sosa, ', 'B) Ken Griffey Jr., ', 'C) Pedro Cerrano, ', 'D) Barry Bonds'],
  'answer' : 'A) Sammy Sosa',
  'tidbit' : 'Sosa came in second with 66. Pedro Cerrano is a character in the movie "Major League."'},

{ 'question' : 'Nolan Ryan has thrown the most career no-hitters with seven. Who has the second most?',
  'choices' : ['A) Tim Lincecum , ', 'B) Felix Hernandez, ', 'C) Randy Johnson, ', 'D) Sandy Koufax'],
  'answer' : 'D) Sandy Koufax',
  'tidbit' : 'Sandy Koufax threw four no-hitters in his career and famously refused to play on Yom Kippur during the 1965 World Series.'}
];
answersArray = ['Barry Bonds', 'Sammy Sosa'];


    console.log(questionsArray.length);


//answer buttons
$('#answerA').click(function() {
      console.log('before A');
  for (var i = 0; i < questionsArray.length; i++){
    if (questionsArray[i].answer === questionsArray[i].choices[0]) {
        console.log('correct answer A');
    }
  }
})

$('#answerB').click(function() {
      console.log('before B');
  for (var i = 0; i < questionsArray.length; i++){
    if (questionsArray[i].answer === questionsArray[i].choices[1]) {
        console.log('correct answer B');
    }
  }
})

$('#answerC').click(function() {
      console.log('before C');
  for (var i = 0; i < questionsArray.length; i++){
    if (questionsArray[i].answer === questionsArray[i].choices[2]) {
        console.log('correct answer C');
        $('#pAnswerArea').html(questionsArray[i].choices[2]);
    }
  }
})

$('#answerD').click(function() {
      console.log('before D');
  for (var i = 0; i < questionsArray.length; i++){
    if (questionsArray[i].answer === questionsArray[i].choices[3]) {
        console.log('correct answer D');
    }
  }
})
//start button listener
$('#start').click(function(e) {
    //clicking will start game - show first question
    //shows question
      $('#questionDiv').html(questionsArray[0].question);

      $('#showAnswerDiv').html(questionsArray[0].choices);

      // answerQuestion(questionsArray);
      $('#start').hide();



    // showQuestion(questionCounter);
    // showChoices(questionCounter);

    //tidbit function will show tidbit and advance quiz
    // showTidbit();
})

//Next question button
$('#next').click(function() {
  i = 1;
  while (i < questionsArray.length) {
  $('#pAnswerArea').html('');

    $('#questionDiv').html(questionsArray[i].question);
    $('#showAnswerDiv').html(questionsArray[i].choices);
    // answerQuestion(questionsArray);
}


})


function answerQuestion(questionsArray) {
  for (var i = 0; i < questionsArray.length; i++) {
      console.log(questionsArray[i].choices);
  }
}

//question display function
function showQuestion(questionCounter) {

  return questionInputArea.innerHTML = questionsArray[questionCounter]['question'];

  }



//answer display function

function showChoices(questionCounter) {

     return answerInputArea.innerHTML = "<input type='button' value='" + questionsArray[questionCounter] + "'/>";
    }
// console.log('choices loop');


//function to show tidbit after question has been answered
//MAY NEED TO BE INSIDE showChoices FUNCTION
function showTidbit(questionCounter) {
      alert(questionsArray[questionCounter].tidbit);
  } questionCounter++;








//document.ready parentheses below
});
