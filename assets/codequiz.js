//data
//global variable for application state
var questions = [
    {
    text:"My code Quiz question 1"
    choices:["c1","c2","c3"]
    answer:"c3"
},
{
    text:"My code Quiz question 1"
    choices:["c1","c2","c3"]
    answer:"c3"}

{
     text:"My code Quiz question 1"
    choices:["c1","c2","c3"]
    answer:"c3"}
    
{
    text:"My code Quiz question 1"
    choices:["c1","c2","c3"]
    answer:"c3"}
{   
    text:"My code Quiz question 1"
    choices:["c1","c2","c3"]
    answer:"c3"}
    
]
//HTML elements
var startScreenEl = document.getElementsByClassName("start-screen");
var startBtn = document.getElementById("start");

function startQuiz(){
    startScreenEl = document.setAtribute("class", "hide");
};

startBtn.addEventListener("click", startQuiz);