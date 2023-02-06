const word_games_activities = [
    {
        category: "word_games",
        name: "Anagram",
        link: "anagram.html",
        time: "2min+",
        tags: ["group","individual"],
        summary: "Unscramble the letters to find the original word in the brain-teasing game of Anagram!",
    },
    {
        category: "word_games",
        name: "Word Rush",
        link: "wordrush.html",
        time: "2min+",
        tags: ["group","individual"],
        summary: "A fast paced word search game where you come up with as many words as possible that use the letters in a given word.", 
    },
    {
        category: "word_games",
        name: "Scattergories",
        link: "https://swellgarfo.com/scattergories/",
        time: "2min+",
        tags: ["group","individual"],
        summary: "Scattergories is a creative-thinking category-based party game.", 
    }
]

const math_games_activities = [
    {
        category: "maths_games",
        name: "Greedy Pig",
        link: "greedypig.html",
        time: "5min+",
        tags: ["activity","individual"],
        summary: "There is a balance between greed and victory in this simple probability game."
    },
    {
        category: "maths_games",
        name: "Closest Number",
        link: "closestnumber.html",
        time: "2min+",
        tags: ["individual"],
        summary: "Using the numbers provided, how close can you get to a specified number using the basic operations of mathematics?"
    }
]

const māori_games_activities = [
]

const quizzes_activities = [
    {
        category: "quizzes",
        name: "Kahoot",
        link: "https://kahoot.com/schools-u/",
        time: "5min+",
        tags: ["device","individual"],
        summary: "Kahoot! is a game-based learning platform that makes it easy to create, share and play learning games or trivia quizzes in minutes."
    },
    {
        category: "quizzes",
        name: "Blooket",
        link: "https://www.blooket.com/",
        time: "5min+",
        tags: ["device","individual"],
        summary: "Blooket is a multi-choice trivia platform that engages students with a range of game modes."
    },
    {
        category: "quizzes",
        name: "Geo Guesser",
        link: "https://geoguessmaster.net/",
        time: "2min+",
        tags: ["group"],
        summary: "You are placed somewhere is the world and you need to use the clues around you to determine where."
    },
    
]

const team_building_activities = [
    {
        category: "team_building",
        name: "Never Have I Ever",
        link: "neverhaveiever.html",
        time: "5min+",
        tags: ["group"],
        summary: "'Never Have I Ever' is a game of truth-telling and storytelling."
        }
]

const other_activities = [
    {
        category: "other",
        name: "Mafia",
        link: "mafia.html",
        time: "10min+",
        tags: ["activity","group"],
        summary: "'Mafia' is a game of deception and deduction played in two teams: mafia and townspeople."
    }
]


const activity_lists = [word_games_activities, math_games_activities, māori_games_activities, quizzes_activities, team_building_activities, other_activities]

window.addEventListener("load", myInit, true); function myInit(){
    generateActivityList()
  }

  
// Dynamically generate the activity lists based on activities object.
// This will create a list item with the activity title/link, description, and tags
function generateActivityList(){
    for (let x in activity_lists){
        var category_list = activity_lists[x];
        var activity_html;
        for (let i=0; i<category_list.length;i++){
            activity = category_list[i];
            activity_html = "";
            activity_html += "<li class=\"list-group-item\">";
            // Title with link
            activity_html += "<h1><a href=\"" + activity.link + "\">" + activity.name + "</a></h1>";

            // Time tag HTML
            activity_html += "<span class=\"badge rounded-pill bg-time\">" + activity.time + "</span>\n";

            // Other tags HTML
            for (x in activity.tags){
                tag = activity.tags[x];
                if (tag == "device"){
                    activity_html += "<span class=\"badge rounded-pill bg-device\" data-bs-toggle=\"tooltip\" data-bs-placement=\"right\" title=\"Devices Required\"><img src=\"res/laptop.svg\" alt=\"Devices\"></span>\n"
                } else if (tag == "activity") {
                    activity_html += "<span class=\"badge rounded-pill bg-activity\" data-bs-toggle=\"tooltip\" data-bs-placement=\"right\" title=\"Movement Required\"><img src=\"res/activity.svg\" alt=\"Movement\"></span>\n"
                } else if (tag == "group") {
                    activity_html += "<span class=\"badge rounded-pill bg-group\" data-bs-toggle=\"tooltip\" data-bs-placement=\"right\" title=\"Groups\"><img src=\"res/people.svg\" alt=\"Group\"></span>\n"
                } else if (tag == "individual") {
                    activity_html += "<span class=\"badge rounded-pill bg-individual\" data-bs-toggle=\"tooltip\" data-bs-placement=\"right\" title=\"Individual\"><img src=\"res/person.svg\" alt=\"Individual\"></span>\n"
                }
            }
            
            // Summary description
            activity_html += "<p>" + activity.summary + "</p>";
            activity_html += "</li>";
            document.getElementById(activity.category).innerHTML += activity_html;
        }
    }
}



