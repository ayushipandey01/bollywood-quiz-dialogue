var readLinesync = require('readline-sync');

var score = 0;

welcome();
playgame();
scoredisplay();


function welcome() {
  var username = readLinesync.question("What is your name ? ");
  console.log("\n");
  console.log("Welcome to the Quiz", username, " ! ")
  // console.log("\n");
  console.log("Guess the movie from dialogues --->>>>");
  console.log("\n");
  
}

function playgame() {
  var QuestionOne = {
    question : "Kitne aadmi the ? ",
    answer: "Sholay",
  }

  var QuestionTwo = {
    question: "Mogambo khush hua ? ",
    answer: "Mr. India",
  }

  var QuestionThree = {
    question: "Ja Simran ja jee le apni zindagi ? ",
    answer: "Dilwale Dulhaniya Le Jayenge",
  }

  var QuestionFour = {
    question: "Utha le re baba ? ",
    answer: "Hera Pheri",
  }

  var QuestionFive = {
    question: "Ek chutki sindoor ki keemat tum kya jano Ramesh babu ? ",
    answer: "Om Shanti Om",
  }

  var quiz = [QuestionOne, QuestionTwo, QuestionThree, QuestionFour, QuestionFive]

  // var score = 0 ;


  for (var i = 0; i < quiz.length; i++) {
    var useranswer = readLinesync.question(quiz[i].question);

    if (useranswer == quiz[i].answer) {
      score++;
      console.log("Right answer !")
      console.log("Your current Score : ", score, "/5");
      console.log("------------------------------------------------")
    }
    else {
      score--;
      console.log("Wrong answer !")
      console.log("Your current Score : ", score, "/5");
      console.log("------------------------------------------------")
    }
  }

}

function scoredisplay() {
  console.log("\n")
  console.log("Your total Score : ", score, "/5");
}

