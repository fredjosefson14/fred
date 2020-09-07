function ButtonFunction() {
    alert("Kolla här");
}

/*function MC() {
    <h1>JavaScript is ______ Language.</h1><br>
<form>
  <input type="radio" name="choice" value="Scripting"> >
  </input>Scripting
  <input type="radio" name="choice" value="Programming">> Programming
  <input type="radio" name="choice" value="Application"> Application
  <input type="radio" name="choice" value="None of These"> None of These
</form>
<button>Submit Answer</button>
}
*/

/*
function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	


	// when user clicks submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}

var myQuestions = [
	{
		question: "What is 10/2?",
		answers: {
			a: '3',
			b: '5',
			c: '115'
		},
		correctAnswer: 'b'
	},
	{
		question: "What is 30/3?",
		answers: {
			a: '3',
			b: '5',
			c: '10'
		},
		correctAnswer: 'c'
	}
];

function showQuestions(questions, quizContainer){
	// we'll need a place to store the output and the answer choices
	var output = [];
	var answers;

	// for each question...
	for(var i=0; i<questions.length; i++){
		
		// first reset the list of answers
		answers = [];

		// for each available answer to this question...
		for(letter in questions[i].answers){

			// ...add an html radio button
			answers.push(
				'<label>'
					+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
					+ letter + ': '
					+ questions[i].answers[letter]
				+ '</label>'
			);
		}

		// add this question and its answers to the output
		output.push(
			'<div class="question">' + questions[i].question + '</div>'
			+ '<div class="answers">' + answers.join('') + '</div>'
		);
	}

	// finally combine our output list into one string of html and put it on the page
	quizContainer.innerHTML = output.join('');
}

function showResults(questions, quizContainer, resultsContainer){
	
	// gather answer containers from our quiz
	var answerContainers = quizContainer.querySelectorAll('.answers');
	
	// keep track of user's answers
	var userAnswer = '';
	var numCorrect = 0;
	
	// for each question...
	for(var i=0; i<questions.length; i++){

		// find selected answer
		userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
		
		// if answer is correct
		if(userAnswer===questions[i].correctAnswer){
			// add to the number of correct answers
			numCorrect++;
			
			// color the answers green
			answerContainers[i].style.color = 'lightgreen';
		}
		// if answer is wrong or blank
		else{
			// color the answers red
			answerContainers[i].style.color = 'red';
		}
	}

	// show number of correct answers out of total
	resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
}

// on submit, show results
submitButton.onclick = function(){
	showResults(questions, quizContainer, resultsContainer);
}

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit'); //

*/

(function(){
  function buildQuiz(){
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        // variable to store the list of possible answers
        const answers = [];

        // and for each available answer...
        for(letter in currentQuestion.answers){

          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

  function showResults(){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {

      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if(userAnswer === currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  
    if(numCorrect<=3)

    alert("Bra jobbat, du är en Fredrikexpert")

    else alert("AJAJAJ, du får plugga på mer om Fredrik")
}

  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const correctText = document.getElementById('correct');
  const myQuestions = [
    {
      question: "Vart var Fredrik på utbyte under studietiden?",
      answers: {
        a: "Spanien",
        b: "Mexiko",
        c: "Peru"
      },
      correctAnswer: "b"
    },
    {
      question: "Efter hur många km svimmade Fredrik på Göteborgsvarvet?",
      answers: {
        a: "7 km",
        b: "15 km",
        c: "20 km"
      },
      correctAnswer: "c"
    },

    {
        question: "Har Fredrik...",
        answers: {
          a: "...tappat plånbok med pengar och kort under en tågluff och vart tvugnen att lifta till Rom för att möta upp hans farbror som agerade bank",
          b: "...blivit jagad av extremt argsinta kor",
          c: "...tappat sin två dagar gamla iphone så att han var tvungen att byta skärm"
        },
        correctAnswer: "a"
      },
    
      {
        question: "Vilken Disneyfilm kan kopplas ihop med Fredriks mellannamn?",
        answers: {
          a: "Askungen",
          b: "Lejonkungen",
          c: "Lilla Sjöjungrfrun"
        },
        correctAnswer: "c"
      },
      {
      question: "Vilken Ben & Jerry´s smak är Fredriks favorit?",
      answers: {
        a: "Strawberry Cheesecake",
        b: "Cookie Dough",
        c: "Peanut Butter Cup",
      },
      correctAnswer: "a"
    }
  ];

  // Kick things off
  buildQuiz();

  // Event listeners
  submitButton.addEventListener('click', showResults);
})();