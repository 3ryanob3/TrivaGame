   function check() {

    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var correct = 0;

    if (question1 == "Mobile Suit Gundam") {
        correct++;
    }
    if (question2 == "Loran Cehack") {
        correct++;
    }
    if (question3 == "Stargazer") {
        correct++;
    }

    var pictures = ["assets/images/win.gif", "assets/images/meh.gif", "assets/images/lose.gif"];

    var range;

    if (correct < 1) {
        range = 2;
    }
    if (correct > 0 && correct < 3) {
        range = 1;
    }
    if (correct > 2) {
        range = 0;
    }

document.getElementById("after_sumbit").style.visibility = "visible";

document.getElementById("number_correct").innerHTML = " You got " + correct + "correct";
document.getElementById("picture").src = pictures[range];
}