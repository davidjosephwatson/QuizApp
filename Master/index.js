$(function(){
  const QUIZ = {
    questions: [
      {
        text: 'The large usually colorful triangular sail used while running with the wind is calld the what?',
        answers: [
          {
            text: 'Spinnaker',
            isRight: true
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
        ]
      },
      {
        text: 'Turning a sailboat so that the bow passes through the eye of the wind is known as what?',
        answers: [
          {
            text: 'Jibing',
          },
          {
            text: 'Tacking',
            isRight: true
          },
          {
            text: 'Broaching',
          },
          {
            text: 'Reaching',
          } 
        ]
      },
      {
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
            text: 'Halyard',
            isRight: true
          }
          
        ]
      },
      {
        text: 'When a sailboat is pointing directly into the wind and all forward momentum has ceased, the boat is said to be what?',
        answers: [
          {
            text: 'Close hauled',
            
          },
          {
            text: 'Stopped',
          },
          {
            text: 'In irons',
            isRight: true
          },
          {
            text: 'Stalled',
          }
          
        ]
      },
      {
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
            text: 'Completely upide down',
            isRight: true
          } 
        ]
      },
      {
        text: 'Which of the following is not a type of sailboat?',
        answers: [
          {
            text: 'Yawl',
          },
          {
            text: 'Tabernacle',
            isRight: true
          },
          {
            text: 'Schooner',
          },
          {
            text: 'Dinghy',
          } 
        ]
      },
      {
        text: 'A sailing vessel which is under sail usually has the right of way over all of the following except what?',
        answers: [
          {
            text: 'A container ship',
            isRight: true
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
        ]
      },
      {
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
            isRight: true
          },
          {
            text: 'Anywhere you want as long as you stay between the buoys',
          } 
        ]
      },
      {
        text: 'The lines which are used to control a sails direction in relation to the direction of the wind are called what?',
        answers: [
          {
            text: 'Sheets',
            isRight: true
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
        ]
      },
      {
        text: 'Most sails have three corners. Which of the following is not the name of one of the corners?',
        answers: [
          {
            text: 'Head',
          },
          {
            text: 'Luff',
            isRight: true
          },
          {
            text: 'Tack',
          },
          {
            text: 'Clew',
          } 
        ]
      }
    ],
    answers: [], 
    currentQuestion: 0
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
  
  function getScore() {
    return QUIZ.answers.filter(answer => answer.isRight).length;
  }
  function insertQuestion() {
    let currentQuestion = getCurrentQuestion();
    console.log(currentQuestion);
    let question = generateQuestion(currentQuestion);
    console.log(question);
    $(".questionAnswerForm").html(question);
  }
  function generateQuestion(question){
    let liString = 
    question.answers.map((answer, index) => {
        return `
        <li><input type="radio" 
        id="${index}" 
        value="${index}" 
        name="answer">${answer.text}</li>`}
        ).join('')
    return `
      <form>
        <fieldset>
          <legend>
            ${question.text}
          </legend>
          <ol>
            ${liString}
          </ol>
        </fieldset>  
      </form>`
  }
  function clearStartPage() {
    $(".quizStart").hide();
  }
  function addEventListeners() {
    $(".startButton").click(e => {
      e.preventDefault();
      //remove intro text and start button
      clearStartPage();
      //insert first question
      insertQuestion();


    })
  }
  addEventListeners();
})