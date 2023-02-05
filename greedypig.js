


window.addEventListener("load", myInit, true); function myInit() {
    setNumberOfRounds();
}


var slider = document.getElementById("myRange");
var output = document.getElementById("number_of_rounds");

slider.oninput = function () {
    slider.value = this.value;
    setNumberOfRounds();
}



var current_round = 0;
var current_round_scores = [];
var isrollingdice = false;


function setNumberOfRounds() {
    var num_rounds = slider.value;
    var round_scores_list = document.getElementById("round_scores");
    var round_scores_list_HTML = "";
    var round_list_item_HTML;
    for (let i = 0; i < num_rounds; i++) {
        round_list_item_HTML = "<li id=\"round_" + i + "_scores\"></li>";
        round_scores_list_HTML += round_list_item_HTML;
    }
    round_scores_list.innerHTML = round_scores_list_HTML;
    if (current_round > 0) {
        resetGame();
    }

}

function rolldice() {

    // Clear data in rounds if game has restarted and hide round and game over messages
    if (current_round == slider.value) {
        resetGame();
    }
    if (current_round == 0) {
        document.getElementById("round_" + current_round + "_scores").className = "bg-maths";
    }
    document.getElementById("round_over_message").style.display = "none";
    document.getElementById("game_over_message").style.display = "none";

    // Don't start another roll until current roll is finished.
    if (isrollingdice) {
        return;
    }

    isrollingdice = true;
    var dice1 = document.getElementById("die1");
    var dice2 = document.getElementById("die2");
    var d1 = Math.floor(Math.random() * 6) + 1;
    var d2 = Math.floor(Math.random() * 6) + 1;
    var total = d1 + d2;
    current_round_scores.push(total);
    var num = 0;
    var interval = setInterval(function () {
        num += 1;
        var num1 = Math.floor(Math.random() * 6) + 1;
        var num2 = Math.floor(Math.random() * 6) + 1;
        if (num == '20') {
            dice1.src = "res/die" + d1 + ".svg";
            dice2.src = "res/die" + d2 + ".svg";
            clearInterval(interval);
            if (d1 == d2) { roundOver() }
            updateRoundScores();
            isrollingdice = false;

        } else {
            dice1.src = "res/die" + num1 + ".svg";
            dice2.src = "res/die" + num2 + ".svg";
        }
    }, 75);
}

function updateRoundScores() {
    if (document.getElementById("round_" + current_round + "_scores")){
        document.getElementById("round_" + current_round + "_scores").innerHTML = current_round_scores;
    }   
}

// If a double is rolled, game over
function roundOver() {
    document.getElementById("round_" + current_round + "_scores").className = "";
    current_round++;
    current_round_scores = [];
    if (current_round == slider.value) {
        gameOver();
    } else {
        document.getElementById("round_over_message").style.display = "block";

    }

    if (document.getElementById("round_" + current_round + "_scores")) {
        document.getElementById("round_" + current_round + "_scores").className = "bg-maths";
    }
}

function gameOver() {
    document.getElementById("game_over_message").style.display = "block";
    isrollingdice = false;
}

function resetGame() {
    current_round = 0;
    current_round_scores = [];
    setNumberOfRounds();

}