class Question {
  constructor(question, answer, category, categoryID, point, currIndex) {
    this.question = question;
    this.answer = answer;
    this.category = category;
    this.categoryID = categoryID;
    this.point = point;
    this.currIndex = {};
  }
  newQuestion() {
    //when a player has clicked on a box on the board, we will find that box by event targeting
    // we will acquire the id of the chosen question
    // we will then make a popup appear with the question
    // domUpdates.displayQuestion();
  }

  submitQuestion() {
    // upon submit button click, we will take the value of the text field and compare it with the answer from the dataset
    // we will then add or deduct points based on if the answer was correct
  }
    validAns(answer, index, round) {
    // whether they get the question right or wrong decrease qCount //once qCount = 0 round is over
    //return Ans.toUppercase
  }
  displayCurrQuestion(currRound, index, qPopup, ddPopup, questionMessage, overlay) {
    //set currQuestion to roundQuestion[i]
    //update the DOM with the qPopup
    }
}

export default Question;