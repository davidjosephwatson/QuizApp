$(function(){

function getCurrentQuestionNumber() {
    return QUIZ.answers.length;
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

})