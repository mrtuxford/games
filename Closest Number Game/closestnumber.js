



window.addEventListener("load", myInit, true); function myInit(){
    setCurrectLargeNumbers();
}

// Default large number list is 2
// When large number is selected by user set current large number
var number_large = 2;
function setCurrectLargeNumbers(){

    for (let i = 0; i <= 4; i++){
        if (i == number_large){
            document.getElementById(i+"_large").className = "btn btn-dark border m-1"
        } else {
            document.getElementById(i+"_large").className = "btn btn-light m-1"
        }
    }

}

function changeSelectedLargeNumber(number){
    number_large = number;
    setCurrectLargeNumbers();
}

function clearSolutions(){
    document.getElementById("numbers_answer").innerHTML = "";
}





var isGameActive = false;
function startRound(){
    // Don't start a new round if game is active
    if (isGameActive){
        return;
    } 
    
    clearSolutions();

    isGameActive = true;
    loadNumbers();
    document.getElementById("timer_value").innerHTML=slider.value;
    startTimer();
    
    // Change the play button to show answer button
    // document.getElementById("play").className = "btn btn-light border btn-lg w-100";
    document.getElementById("play").innerHTML = "<button type=\"button\" class=\"btn btn-link btn-lg w-100 border border-success\" onclick=\"showAnswer(), endRound()\" data-bs-toggle=\"tooltip\" data-bs-placement=\"right\" title=\"Answer\"><img class=\"w-50\" src=\"/Anagram Game/res/check.svg\" alt=\"Answer\"></button>";

    
}


// Stop the timer, set game not active, and reset play button 
function endRound(){
    isGameActive = false;
    stopTimer();

    // Reactivate the play button
    // document.getElementById("play").className = "btn btn-success btn-lg w-100";
    document.getElementById("play").innerHTML = "<button type=\"button\" class=\"btn btn-success btn-lg w-100\" id=\"play\" onclick=\"startRound()\" data-bs-toggle=\"tooltip\" data-bs-placement=\"right\" title=\"Play\"><img class=\"w-50\" src=\"/Anagram Game/res/play.svg\" alt=\"Play\"></button>";
}

// When user hits play or reset, load random numbers, clear solutions from previous round
const min_target = 100;
const max_target = 999;
const max_small = 10;
const all_large_numbers = [25,50,75,100];

function loadNumbers(){

    var target_number = Math.floor(Math.random() * (max_target - min_target) + min_target);
    var small_numbers = [];
    var large_numbers = [];
    var number_small = 6 - number_large;

    for (let i = 0; i < number_small; i++){
        small_numbers.push(Math.floor(Math.random() * max_small)+1);
    }

    for (let i = 0; i < number_large; i++){
        var large_number_temp = all_large_numbers[Math.floor(Math.random()*all_large_numbers.length)];
        while(large_numbers.includes(large_number_temp)){
            large_number_temp = all_large_numbers[Math.floor(Math.random()*all_large_numbers.length)]
        }
        large_numbers.push(large_number_temp);
    }

    
    random_numbers = small_numbers.concat(large_numbers);

    for (var i = 1; i <= 6; i++) {
        document.getElementById('num'+i).innerHTML = random_numbers[i-1];
    }
    document.getElementById('target').innerHTML = target_number;
}





function showAnswer(){
    _ui_solve_numbers();
    stopTimer();
}


// -- Timer functions
// Set time slider
var slider = document.getElementById("myRange");
var output = document.getElementById("timer_value");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

var timerID;
// Take value from time limit slider and start the countdown
function startTimer() {
    secs = document.getElementById("timer_value").innerHTML;
    timerID = setInterval('Decrement()',1000);
}
function Decrement() {
    if(document.getElementById) {
        seconds=document.getElementById("timer_value");
        if(secs<=0) {
            stopTimer();
            alert('Times Up!');
        }
        else {
            secs--;
            document.getElementById("timer_value").innerHTML=secs;
        }
    }
}

function stopTimer(){
    clearInterval(timerID);
    document.getElementById("timer_value").innerHTML = slider.value;
}













/* Number solver code adapted from https://github.com/jes/cntdn/ */
function _ui_solve_numbers(trickshot) {
    var numbers = [];

    for (var i = 1; i <= 6; i++) {
        var x = parseInt(document.getElementById('num'+i).innerHTML, 10);
        if (!isNaN(x))
            numbers.push(x);
    }

    var target = parseInt(document.getElementById('target').innerHTML, 10);

    // if (numbers.length == 6)
    //     _gaq.push(['_trackEvent', 'solve', trickshot ? 'trickshot' : 'numbers', numbers.join(',')+','+target]);

    if (isNaN(target)) {
        document.getElementById('numbers_answer').innerHTML = 'Invalid target';
        return;
    }

    if (numbers.length < 2) {
        document.getElementById('numbers_answer').innerHTML = 'Not enough numbers';
        return;
    }


    var solution = solve_numbers(numbers, target, trickshot);
    var solutionHTML = solution;
    document.getElementById('numbers_answer').innerHTML = "<h3>Possible Solution</h3><p>" + solutionHTML.replaceAll('\n','<br>') + "</p>"; ;
    console.log(solution);
}



function ui_solve_numbers() {
    _ui_solve_numbers(false);
}

function ui_solve_trickshot() {
    _ui_solve_numbers(true);
}

function ui_reset_numbers() {
    for (var i = 1; i <= 6; i++) {
        document.getElementById('num'+i).innerHTML = '';
    }
    document.getElementById('target').innerHTML = '';

    ui_solve_numbers();
}