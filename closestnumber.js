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
    document.getElementById("play").innerHTML = "<button type=\"button\" class=\"btn btn-link btn-lg w-100 border border-success\" onclick=\"showAnswer(), endRound()\" data-bs-toggle=\"tooltip\" data-bs-placement=\"right\" title=\"Answer\"><img class=\"w-50\" src=\"res/check.svg\" alt=\"Answer\"></button>";
}


// Stop the timer, set game not active, and reset play button 
function endRound(){
    isGameActive = false;
    stopTimer();

    // Reactivate the play button
    // document.getElementById("play").className = "btn btn-success btn-lg w-100";
    document.getElementById("play").innerHTML = "<button type=\"button\" class=\"btn btn-success btn-lg w-100\" id=\"play\" onclick=\"startRound()\" data-bs-toggle=\"tooltip\" data-bs-placement=\"right\" title=\"Play\"><img class=\"w-50\" src=\"res/play.svg\" alt=\"Play\"></button>";
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


var bestdiff;
var bestvalsums;

var OPS = {
    "+": function(n1, n2) { if (n1 < 0 || n2 < 0) return false; return n1+n2; },
    "-": function(n1, n2) { if (n2 >= n1) return false; return n1-n2; },
    "_": function(n2, n1) { if (n2 >= n1) return false; return n1-n2; },
    "*": function(n1, n2) { return n1*n2; },
    "/": function(n1, n2) { if (n2 == 0 || n1%n2 != 0) return false; return n1/n2; },
    "?": function(n2, n1) { if (n2 == 0 || n1%n2 != 0) return false; return n1/n2; },
};

var OPCOST = {
    "+": 1,
    "-": 1.05,
    "_": 1.05,
    "*": 1.2,
    "/": 1.3,
    "?": 1.3,
};

function _recurse_solve_numbers(numbers, searchedi, was_generated, target, levels, valsums, trickshot) {
    levels--;

    for (var i = 0; i < numbers.length-1; i++) {
        var ni = numbers[i];

        if (ni === false)
            continue;

        numbers[i] = false;

        for (var j = i+1; j < numbers.length; j++) {
            var nj = numbers[j];

            if (nj === false)
                continue;

            if (i < searchedi && !was_generated[i] && !was_generated[j])
                continue;

            for (var o in OPS) {
                var r = OPS[o](ni[0], nj[0]);
                if (r === false)
                    continue;

                var op_cost = Math.abs(r);
                while (op_cost % 10 == 0 && op_cost != 0)
                    op_cost /= 10;
                if ((ni[0] == 10 || nj[0] == 10) && o == '*') // HACK: multiplication by 10 is cheap
                    op_cost = 1;
                op_cost *= OPCOST[o];

                var newvalsums = valsums + op_cost;

                if ((Math.abs(r - target) < Math.abs(bestresult[0] - target))
                        || (Math.abs(r - target) == Math.abs(bestresult[0] - target) && (trickshot || newvalsums < bestvalsums))) {
                    bestresult = [r,o,ni,nj];
                    bestvalsums = newvalsums;
                }

                numbers[j] = [r, o, ni, nj];
                var old_was_gen = was_generated[j];
                was_generated[j] = true;

                if (levels > 0 && (trickshot || bestresult[0] != target || newvalsums < bestvalsums))
                    _recurse_solve_numbers(numbers, i+1, was_generated, target, levels, newvalsums, trickshot);

                was_generated[j] = old_was_gen;
                numbers[j] = nj;
            }
        }

        numbers[i] = ni;
    }
}

function tidyup_result(result) {
    var mapping = {
        "?": "/", "_": "-"
    };

    var swappable = {
        "*": true, "+": true
    };

    if (result.length < 4)
        return result;

    for (var i = 2; i < result.length; i++) {
        var child = result[i];

        child = tidyup_result(child);

        if (child[1] == result[1] && swappable[result[1]]) {
            result.splice(i--, 1);
            result = result.concat(child.slice(2));
        } else {
            result[i] = child;
        }
    }

    if (result[1] in mapping) {
        result[1] = mapping[result[1]];
        var j = result[2];
        result[2] = result[3];
        result[3] = j;
    } else if (swappable[result[1]]) {
        childs = result.slice(2).sort(function(a,b) { return b[0] - a[0]; });
        for (var i = 2; i < result.length; i++)
            result[i] = childs[i-2];
    }

    return result;
}

function fullsize(array) {
    if (array.constructor != Array)
        return 0;

    var l = 0;

    for (var i = 0; i < array.length; i++)
        l += fullsize(array[i]);

    return l + array.length;
}

function serialise_result(result) {
    var childparts = [];

    for (var i = 2; i < result.length; i++) {
        var child = result[i];

        if (child.length >= 4)
            childparts.push(serialise_result(child));
    }

    childparts = childparts.sort(function(a,b) { return fullsize(b) - fullsize(a); });

    var parts = [];
    for (var i = 0; i < childparts.length; i++) {
        parts = parts.concat(childparts[i]);
    }

    var sliced = result.slice(2).map(function(l) { return l[0]; });
    var thispart = [result[0], result[1]].concat(sliced);

    return parts.concat([thispart]);
}

function stringify_result(serialised, target) {
    var output = '';

    serialised = serialised.slice(0);

    for (var i = 0; i < serialised.length; i++) {
        var x = serialised[i];

        var args = x.slice(2);
        output += args.join(' ' + x[1] + ' ') + ' = ' + x[0] + '\n';
    }

    var result = serialised[serialised.length-1][0];
    if (result != target)
        output += '(off by ' + (Math.abs(result - target)) + ')\n';

    return output;
}

function _solve_numbers(numbers, target, trickshot) {
    numbers = numbers.map(function(x) { return [x, false] });

    var was_generated = [];
    for (var i = 0; i < numbers.length; i++)
        was_generated.push(false);

    bestresult = [0, 0];

    /* attempt to solve with dfs */
    _recurse_solve_numbers(numbers, 0, was_generated, target, numbers.length, 0, trickshot);

    return bestresult;
}

function solve_numbers(numbers, target, trickshot) {
    numbers.sort();
    bestresult = [numbers[0], numbers[0]];

    /* see if one of these numbers is the answer; with trickshot you'd rather
     * have an interesting answer that's close than an exact answer
     */
    if (!trickshot) {
        for (var i = 1; i < numbers.length; i++) {
            if (Math.abs(numbers[i] - target) < Math.abs(bestresult[0] - target)) {
                bestresult = [numbers[i], numbers[i]];
                bestvalsums = numbers[i];
            }
        }
        if (bestresult[0] == target)
            return target + " = " + target;
    }

    return stringify_result(serialise_result(tidyup_result(_solve_numbers(numbers, target, trickshot))), target);
}
