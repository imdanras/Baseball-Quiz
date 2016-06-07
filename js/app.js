$(document).ready(function() {

var i = 0;







//All questions stored in an object array
questionsArray = [
{ 'question' : 'Who has hit the most home runs in MLB history?',
  'choices' : ['A) Babe Ruth, ', 'B) Ken Griffey Jr., ', 'C) Barry Bonds, ', 'D) Hank Aaron'],
  'answer' : 'C) Barry Bonds, ',
  'tidbit' : 'Barry Bonds hit 762 home runs during his 22 year career.'},

{ 'question' : 'During Mark McGwire\'s historic 1998 season, he hit 70 home runs.  Who hit the second most that year?',
  'choices' : ['A) Sammy Sosa, ', 'B) Ken Griffey Jr., ', 'C) Pedro Cerrano, ', 'D) Barry Bonds'],
  'answer' : 'A) Sammy Sosa, ',
  'tidbit' : 'Sosa came in second with 66. Pedro Cerrano is a character in the movie "Major League."'},

{ 'question' : 'Nolan Ryan has thrown the most career no-hitters with seven. Who has the second most?',
  'choices' : ['A) Tim Lincecum , ', 'B) Felix Hernandez, ', 'C) Randy Johnson, ', 'D) Sandy Koufax'],
  'answer' : 'D) Sandy Koufax',
  'tidbit' : 'Sandy Koufax threw four no-hitters in his career and famously refused to play on Yom Kippur during the 1965 World Series.'}
];



    console.log(questionsArray.length);


//answer buttons
$('#answerA').click(function() {
      console.log('before A');
  for (var i = 0; i < questionsArray.length; i++){
    if (questionsArray[i].answer === questionsArray[i].choices[0]) {
        console.log('correct answer A');
        $('#pAnswerArea').html(questionsArray[i].choices[0]);
    }
  }
})

$('#answerB').click(function() {
      console.log('before B');
  for (var i = 0; i < questionsArray.length; i++){
    if (questionsArray[i].answer === questionsArray[i].choices[1]) {
        console.log('correct answer B');
        $('#pAnswerArea').html(questionsArray[i].choices[1]);
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
        $('#pAnswerArea').html(questionsArray[i].choices[3]);
    }
  }
})
//start button listener
$('#start').click(function() {
    //clicking will start game - show first question
    //shows question
      $('#questionDiv').html(questionsArray[0].question);

      $('#showAnswerDiv').html(questionsArray[0].choices);

      // answerQuestion(questionsArray);
      $('#start').hide();



    // showQuestion(i);
    // showChoices(i);

    //tidbit function will show tidbit and advance quiz
    // showTidbit();
})

//Next question button
$('#next').click(function()

{

   {
  $('#pAnswerArea').html('');

    $('#questionDiv').html(questionsArray[i].question);
    $('#showAnswerDiv').html(questionsArray[i].choices);
    // answerQuestion(questionsArray);
    i++;
    if (i === questionsArray.length) {
      i = 0;
    }
}


})


function answerQuestion(questionsArray) {
  for (var i = 0; i < questionsArray.length; i++) {
      console.log(questionsArray[i].choices);
  }
}

//question display function
function showQuestion(i) {

  return questionInputArea.innerHTML = questionsArray[i]['question'];

  }



//answer display function

function showChoices(i) {

     return answerInputArea.innerHTML = "<input type='button' value='" + questionsArray[i] + "'/>";
    }
// console.log('choices loop');


//function to show tidbit after question has been answered
//MAY NEED TO BE INSIDE showChoices FUNCTION
function showTidbit(i) {
      alert(questionsArray[i].tidbit);
  } i++;








//document.ready parentheses below
});
