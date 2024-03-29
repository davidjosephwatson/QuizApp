
const QUIZ = {
  questions: [
    {//1
      text: 'The large usually colorful triangular sail used while running with the wind is called the what?',
      answers: [
        {
          text: 'Spinnaker'
        },
        {
          text: 'Jib',
        },
        {
          text: 'Main',
        },
        {
          text: 'Mast',
        }
      ],
      correctAnswer: 'Spinnaker'
    },
    {//2
      text: 'Turning a sailboat so that the bow passes through the eye of the wind is known as what?',
      answers: [
        {
          text: 'Jibing',
        },
        {
          text: 'Tacking'
        },
        {
          text: 'Broaching',
        },
        {
          text: 'Reaching',
        } 
      ],
      correctAnswer: 'Tacking'
    },
    {//3
      text: 'What is the name of the line which is used to raise or lower the sails?',
      answers: [
        {
          text: 'Sheet',
        },
        {
          text: 'Teather',
        },
        {
          text: 'Painter',
        },
        {
          text: 'Halyard'
        }  
      ],
      correctAnswer: 'Halyard'
    },
    {//4
      text: 'When a sailboat is pointing directly into the wind and all forward momentum has ceased, the boat is said to be what?',
      answers: [
        {
          text: 'Close hauled',      
        },
        {
          text: 'Pointing',
        },
        {
          text: 'In irons'
        },
        {
          text: 'Stalled',
        }
      ],
      correctAnswer: 'In irons'
    },
    {//5
      text: 'When a sailboat "turtles", it is what?',
      answers: [
        {
          text: 'Taking water over the bow',
        },
        {
          text: 'Has dramatically slowed down',
        },
        {
          text: 'Taking water of the stern',
        },
        {
          text: 'Completely upside down',
        } 
      ],
      correctAnswer: 'Completely upside down'
    },
    {//6
      text: 'Which of the following is not a type of sailboat?',
      answers: [
        {
          text: 'Yawl',
        },
        {
          text: 'Tabernacle'
        },
        {
          text: 'Schooner',
        },
        {
          text: 'Dinghy',
        } 
      ],
      correctAnswer: 'Tabernacle'
    },
    {//7
      text: 'A sailing vessel which is under sail usually has the right of way over all of the following except what?',
      answers: [
        {
          text: 'A container ship'
        },
        {
          text: 'Another boat approaching from the left',
        },
        {
          text: 'A similar sized vessel which is being powered by a motor',
        },
        {
          text: 'A jet ski',
        } 
      ],
      correctAnswer: 'A container ship'
    },
    {//8
      text: 'You are returning to port after a day of sailing. Ahead of you is a channel marked by colored buoys. How should you enter the channel?',
      answers: [
        {
          text: 'With all of the buoys on your left',
        },
        {
          text: 'To the left of the black and white buoy and to the left of the green buoy',
        },
        {
          text: 'To the right of the black and white buoy and to the left of the red buoy',
        },
        {
          text: 'Anywhere you want as long as you stay between the buoys',
        } 
      ],
      correctAnswer: 'To the right of the black and white buoy and to the left of the red buoy'
    },
    {//9
      text: 'The lines which are used to control a sails direction in relation to the direction of the wind are called what?',
      answers: [
        {
          text: 'Sheets'
        },
        {
          text: 'Halyards',
        },
        {
          text: 'Ropes',
        },
        {
          text: 'Outhaul',
        } 
      ],
      correctAnswer: 'Sheets'
    },
    {//10
      text: 'Most sails have three corners. Which of the following is not the name of one of the corners?',
      answers: [
        {
          text: 'Head',
        },
        {
          text: 'Luff',
        },
        {
          text: 'Tack',
        },
        {
          text: 'Clew',
        } 
      ],
      correctAnswer: 'Luff'
    }
  ],
  currentQuestion: 0,
  score: 0
}

function getCurrentQuestionNumber() {
    return QUIZ.currentQuestion;
  }
  
function getQuestion(questionNumber) {
  return QUIZ.questions[questionNumber]
}
  
function getCurrentQuestion() {
  return getQuestion(getCurrentQuestionNumber())
  }
  
function insertQuestion() {
  let currentQuestion = getCurrentQuestion();
  let question = generateQuestion(currentQuestion);
  $(".question-answer-form").html(question);
  updateScore();
}

function generateQuestion(question){
  let liString = 
  question.answers.map((answer, index) => {
    return `
      <li>
        <label class="answer-choice" for="${index}">
          <input type="radio"
          class="answer-choice"  
          id="${index}" 
          value="${answer.text}"
          name="answer">${answer.text}</label>
      </li>`}
      ).join('')
    return `
      <form id="quiz-question">
        <fieldset>
          <div class="question-answer-list">
            <legend>
              ${question.text}
            </legend>
            <ol class="answer-list">
              <label for="answer">${liString}</label>
            </ol>
          </div> 
          <label for="submit"></label> 
          <input type="submit" class="submit-button button"/>
        </fieldset>  
      </form>`
};

function generateCorrectPage() {
  $(".response-form").html(
    `<div class="correct-screen">
      <h2>THAT IS CORRECT!</h2>
      <div>
        <img src="./images/gqBfSZ5E_400x400.jpg" alt="correct" class="correct-img">
      </div>
      <button type="button" class="next-button button">Next</button>
    </div>`
  );
}

function generateWrongPage() {
  $(".response-form").html(
    `<div class="wrong-screen">
      <h2>THAT IS WRONG!</h2>
      <h3>The correct answer is ${QUIZ.questions[QUIZ.currentQuestion].correctAnswer}.</h3>
      <div>
        <img src="./images/wreck.jpg" alt="wrong" class="wrong-img">
      </div>
      <button type="button" class="next-button button">Next</button>
    </div>`
  );
}

function generateFinalPage() {
  $(".final").html(
    `<div class="final-screen">
      <h2>ALL DONE!</h2>
      <h2>You scored ${QUIZ.score} out of 10</h2>
      <button type="button" class="button restart">
        <label for="button restart">Restart</label>
      </button>
    </div>`
  );
}

function insertResponsePage(userInput, correctAnswer) {
  $(".response-form").show();
  if (userInput === correctAnswer) {
    generateCorrectPage();
  } else {
    generateWrongPage();
  }
}

function restartGame() {
  $(".final-screen").hide();
  $(".quizStart").show();
  QUIZ.currentQuestion = 0;
  QUIZ.score = 0;
  updateScore();
}

function quizIsOver() {
  $(".final").show();
  generateFinalPage();
}

function addEventListeners() {
  $(".start-button").click(e => {
    e.preventDefault();
    $(".quizStart").hide();
    insertQuestion();
  })

  $("body").on("click", ".restart", e => {
    e.preventDefault();
    restartGame() 
  })

  $("body").on("click", ".next-button", e => {
    e.preventDefault();
    $(".response-form").hide();
    if(QUIZ.currentQuestion < QUIZ.questions.length) {
      insertQuestion(); 
    } else {
      quizIsOver();
    }
  })

  $("body").on("submit", "#quiz-question", e => {
    e.preventDefault();
    let userInput = $("input[name='answer']:checked").val();
    if (userInput === undefined) {
      alert("Please Answer Question!")
    } else {
      let correctAnswer = QUIZ.questions[QUIZ.currentQuestion].correctAnswer;
      if (userInput === correctAnswer) {
        QUIZ.score++;
      }
      $("#quiz-question").hide();
      insertResponsePage(userInput, correctAnswer);
      QUIZ.currentQuestion++;
    }
  })
}

function updateScore() {
  $('.question-score').html(
  `<ul>
    <li>Question: <span class="question-number">${QUIZ.currentQuestion}</span>/10</li>
    <li>Score: <span class="score">${QUIZ.score}</span></li>
  </ul>`)
}

function init() {
  addEventListeners();
  updateScore();
}
$(init);