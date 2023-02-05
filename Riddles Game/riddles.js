const riddles = [
    
]



window.addEventListener("load", myInit, true); function myInit(){
    generateWordCategories();
  }

// Create HTML for word category select
function generateWordCategories(){
    categoryHTML = "<h3>Change Category</h3>";
    for (var word_list in word_lists){
        var category_name = word_list.split("_")[0];
        category_name = category_name.charAt(0).toUpperCase() + category_name.slice(1);
        categoryHTML += "<button type=\"button\" id=\"" + word_list + "\" class=\"btn btn-light m-1\" onclick=\"setCurrectWordList('" + word_list + "')\">" + category_name + "</button>"
    }
    document.getElementById("categories").innerHTML = categoryHTML;
    // Set default as academic word list
    setCurrectWordList("academic_word_list");
}


// var isAllWordsVisible = false;
// function toggleAllWordsDisplay(){
//     words_string = "";
//     if (isAllWordsVisible == false){
//         isAllWordsVisible = true;
//         for (var word_list in word_lists){
//             console.log(word_list);
//             words_string += word_list + "\n";
//             for (var word in word_lists.word_list){
//                 console.log(word);
//                 words_string += word_list[word] + "\n";
//             }
//         }

//     } else {
//         isAllWordsVisible = false;
//         words_string = "";
//     }
//     document.getElementById("all_words").innerHTML = words_string;
// }


// Default word list is academic word list
var currentWordList = academic_word_list;
// When category is selected by user set current word list 
function setCurrectWordList(selected_word_list){
    currentWordList = word_lists[selected_word_list];

    for (var word_list in word_lists){
        if (word_list == selected_word_list){
            document.getElementById(word_list).className = "btn btn-dark border m-1"
        } else {
            document.getElementById(word_list).className = "btn btn-light m-1"
        }
    }

}



var isGameActive = false;
function startRound(){
    // Don't start a new round if game is active
    if (isGameActive){
        return;
    } 
    
    isGameActive = true;
    loadAnagram();
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

var anagram_solution;
var anagram_with_hint;
// When user hits play or reset, load a word from the word list with the letters jumbled up
function loadAnagram(){
    anagram_solution = currentWordList[Math.floor(Math.random() * currentWordList.length)];
    do {
        shuffled_word = shuffleLetters(anagram_solution);
    }
    while (isNotShuffled(shuffled_word, anagram_solution));

    shuffled_word = shuffled_word.split('').join(' ');
    window.document.getElementById("anagram_word").innerHTML = shuffled_word;

    blank_solution = "";
    for (char in anagram_solution){
        blank_solution+="_ "
    }
    anagram_with_hint = blank_solution;
    window.document.getElementById("anagram_solution").innerHTML = anagram_with_hint;

}

// tests if anagram is sufficiently shuffled. Returns true if not shuffled enough.
function isNotShuffled(shuffled_word, anagram_solution){
    //  count of the number of characters that are in the same position
    var count = 0;
    for (let i = 0; i<shuffled_word.length; i++){
        if (shuffled_word[i]==anagram_solution[i]){
            count++;
        }
    }
    return (count > shuffled_word.length/2)
}

// When user requests a hint, fill a random the character from the anagram
function giveHint(){

    // generate array of indices that correspond to a blank space in the anagram hint
    var blankspaces_array =[];
    for (let i = 0; i < anagram_with_hint.length; i++) {
        if (anagram_with_hint[i]=="_"){
            blankspaces_array.push(i);
            i++;
        }
    }

    // If no blank spaces are left the full solution is shown -> end the round
    if (blankspaces_array.length == 1){
        endRound();
    }

    random_index = Math.floor(Math.random() * blankspaces_array.length);
    random_index_index = blankspaces_array[random_index];

    var anagram_with_hint_updated = "";
    for (let i=0; i < anagram_with_hint.length;i++){
        if (i == random_index_index){
            anagram_with_hint_updated+=anagram_solution[i/2];
        } else {
            anagram_with_hint_updated+=anagram_with_hint[i];
        }
    }
    anagram_with_hint = anagram_with_hint_updated;
    
    window.document.getElementById("anagram_solution").innerHTML = anagram_with_hint;
}

// Shuffle the letters of a given word
function shuffleLetters(word){
  var shuffled = word.split('').sort(function(){return 0.5-Math.random()}).join('');
  return shuffled;
}

function showAnswer(){
    window.document.getElementById("anagram_solution").innerHTML = anagram_solution.split('').join(' ');;
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




function showDefinition(){
    url = "https://www.google.com/search?q=define+"+anagram_solution;
    window.open(url, '_blank');
}
