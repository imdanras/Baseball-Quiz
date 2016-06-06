$(document).ready(function() {

var counter = 0;
var questionInputArea = document.getElementsByClassName('questionDiv')[0];
var answerInputArea = document.getElementsByClassName('answer');





//All questions stored in an object array
questionsArray = [{
  'question' : 'Who has hit the most home runs in MLB history?',
  'choices' : ['Babe Ruth', 'Ken Griffey Jr.', 'Barry Bonds'],
  'answer' : 'Barry Bonds',
  'tidbit' : 'Barry Bonds hit 762 during his 22 year career.'
},{
  'question' : 'During Mark McGwire\'s historic 1998 season, he hit 70 home runs.  Who hit the second most that year?',
  'choices' : ['Sammy Sosa', 'Ken Griffey Jr.', 'Pedro Cerrano'],
  'answer' : 'Sammy Sosa',
  'tidbit' : 'Sosa came in second with 66. Pedro Cerrano is a character in the movie "Major League."'
}]

    console.log(questionsArray.length);


//start button listener
$('#start').on('click', function() {


    // $(this).hide();
    // questionInputArea.innerHTML = questionsArray[0]['question'];
    // answerInputArea.innerHTML = questionsArray[0]['choices'];


    showQuestion(counter);
    showChoices(counter);
    //tidbit function will show tidbit and advance quiz
    // showTidbit();
})
//question display function
function showQuestion(counter) {

  return questionInputArea.innerHTML = questionsArray[counter]['question'];

  }




//answer display function

function showChoices(counter) {

     return answerInputArea.innerHTML = "<input type='button' value='" + questionsArray[counter] + "'/>";
    }
// console.log('choices loop');


//function to show tidbit after question has been answered
//MAY NEED TO BE INSIDE showChoices FUNCTION
function showTidbit(counter) {
      alert(questionsArray[counter].tidbit);
  } counter++;








//document.ready parentheses below
});
