//    function check() {

//     var question1 = document.quiz.question1.value;
//     var question2 = document.quiz.question2.value;
//     var question3 = document.quiz.question3.value;
//     var correct = 0;

//     if(question1 == "Mobile Suit Gundam") {
//         correct++;
//     }
//     if (question2 == "Loran Cehack") {
//         correct++;
//     }
//     if (question3 == "Stargazer") {
//         correct++;
//     }

//     var pictures = ["assets/images/win.gif", "assets/images/meh.gif", "assets/images/lose.gif"];

//     var range;

//     if (correct < 1) {
//         range = 2;
//     }
//     if (correct > 0 && correct < 3) {
//         range = 1;
//     }
//     if (correct > 2) {
//         range = 0;
//     }

// document.getElementById("after_sumbit").style.visibility = "visible";

// document.getElementById("number_correct").innerHTML = " You got " + correct + "correct";
// document.getElementById("picture").src = pictures[range];
// }
// app.get('/assets/javascript/app.js', function (req, res) {
//   res.sendFile(path.join(__dirname, 'assets', 'app.js'));
// });


var card = $("#quiz-area");
// Question set
var questions = [
  {
    question: "Whats the name of these big machines?",
    answers: ["Mobile Suit Gundam", "Inspector Gadget", "R2-D2", "The Iron Giant"],
    correctAnswer: "Mobile Suit Gundam"
  },
  {
    question: "Which one is the name of a Female pilot?",
    answers: ["Loran Cehack", "Amber Rose", "Princess Leia", "Spongebob"],
    correctAnswer: "Princess Leia"
  },
  {
    question: "Which Machine was the fastest?",
    answers: ["Stargazer", "GP03 Dendrobium", "GP01 Zephyranthes", "MightyMouse"],
    correctAnswer: "Stargazer"
  },
  
];


// Variable that will hold the setInterval
var timer;
var game = {
  correct: 0,
  incorrect: 0,
  counter: 120,
  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.done();
    }
  },
  start: function() {
    timer = setInterval(game.countdown, 1000);
    $("#sub-wrapper").prepend(
      "<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>"
    );
    $("#start").remove();
    for (var i = 0; i < questions.length; i++) {
      card.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        card.append("<input type='radio' name='question-" + i +
          "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }
    card.append("<button id='done'>Done</button>");
  },
  done: function() {
    var inputs = card.children("input:checked");
    for (var i = 0; i < inputs.length; i++) {
      if ($(inputs[i]).val() === questions[i].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    }
    this.result();
  },
  result: function() {
    clearInterval(timer);
    $("#sub-wrapper h2").remove();
    card.html("<h2>All Done!</h2>");
    card.append("<h3>Correct Answers: " + this.correct + "</h3>");
    card.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
  }
};
// CLICK EVENTS
$(document).on("click", "#start", function() {
  game.start();
});
$(document).on("click", "#done", function() {
  game.done();
});
