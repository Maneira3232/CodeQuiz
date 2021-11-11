
//global variable for application state
var questions = [
    {
        text: "Who coined the term 'Bug' ?",
        choices: ["A technician at Harvard had an issue with the performance of their Mark II computer.", "Thomas Edison used the term to scribe issues with his inventions.", "It was a common term before they existed."],
        answer: "It was a common term before they existed."
    },
    {
        text: "What Football team in the NFL has the most Superbowls to date?",
        choices: ["The Stealers", "The Eagles", "The Patriots"],
        answer: "The Stealers"
    },

    {
        text: "Who was known as the worlds first Coder?",
        choices: ["Archimedes", "Ada Lovelace", "Melba Roy Mouton"],
        answer: "Ada Lovelace"
    },

    {
        text: "Who through the most intersections in NFL history",
        choices: ["Mark Sanchez", "Eli Manning", "Brett Favre"],
        answer: "Brett Favre"
    },
    {
        text: "Who was the Creator of the first Football Video game?",
        choices: ["Keiji Yamagishi", "Ralph Baer", "John Madden"],
        answer: "Keiji Yamagishi"
    }
]
//HTML elements
var startScreenEl = document.getElementById("start-screen");
var startBtn = document.getElementById("start");
var questionContainer = document.getElementById("question");
var choiceContainer = document.getElementById("choices");
var timerContainer = document.getElementById("timer");
var viewScore = document.getElementById("scores")

var questionsIndex = 0
var score = 0
var timer = 60

function scoreview() {
    var score = document.createElement('')

}

function setTime() {
    var time = document.createElement('h4')
    var loseTime = setInterval(() => {
        time.textContent = timer + ' Seconds Remaining'
        timer--
        if (timer < 0) {
            clearInterval(loseTime)
        }
    }, 1000);
    timerContainer.prepend(time)
}

function startQuiz() {
    startScreenEl.setAttribute("class", "hide");
    setTime()
    renderQuestion()
};

function renderQuestion() {
    var currentQuestion = document.createElement('h2')

    // clearing question content
    questionContainer.textContent = ""
    choiceContainer.textContent = ""

    // creating current question
    currentQuestion.textContent = questions[questionsIndex].text
    questionContainer.prepend(currentQuestion)

    // creating choices for current question 
    for (var i = 0; i < questions[questionsIndex].choices.length; i++) {
        var listEl = document.createElement('li')
        listEl.setAttribute('id', questions[questionsIndex].choices[i])
        listEl.textContent = questions[questionsIndex].choices[i]
        choiceContainer.append(listEl)

        // click event to check answer and render new question but adding 1 to questionsIndex
        listEl.addEventListener("click", function (event) {
            if (event.target.id === questions[questionsIndex].answer) {
                score += 10
                console.log('correct')
                console.log(score)
            } else {
                timer -= 20
                console.log('incorrect')
                console.log(score)
            }
            questionsIndex++;
            renderQuestion()
        })
    }
}

startBtn.addEventListener("click", startQuiz);
viewScore.addEventListener("click",  );