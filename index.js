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
    return `
      <form>
        <fieldset>
          <legend>
            ${question.text}
          </legend>
          <ol>
            ${question.answers.map((answer, index) =>
            <li><input type="radio" 
            id="${index}" 
            value="${index}" 
            name="answer">label</li>
            ).join('\n')}
          </ol>
        </fieldset>  
      </form>`
  }