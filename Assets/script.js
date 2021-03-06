let TimeEl =document.querySelector("p.time");
let secondsLeft = 120;
let ScoreEl =document.querySelector("#score");

const introEl =document.querySelector("#intro");

const questionsEl =document.querySelector("#questions");
let questionEl =document.querySelector("question");
let questioncount = 0;

const yaynayEl =document.querySelector("#yaynay");

const FinalsEl =document.querySelector("#final");
let initialsinput =document.querySelector("#initials");

const highscoresEl =document.querySelector("#highscores");
let scoreslistEl =document.querySelector("#score-list");
let scorelist = [];

const startBtn = document.querySelector("#start");
const ansBtn = document.querySelectorAll("button.ansBtn")
const ans1Btn = document.querySelector("#answer1");
const ans2Btn = document.querySelector("#answer2");
const ans3Btn = document.querySelector("#answer3");
const ans4Btn = document.querySelector("#answer4");
const submitScrBtn = document.querySelector("#submit-score");
const goBackBtn = document.querySelector("#goback");
const clearScrBtn = document.querySelector("#clearscores");
const viewScrBtn = document.querySelector("#view-scores");

const questions = [
    {
        question: "What is the capital of the Czech Republic?",
        answers: ["1. Vienna", "2. Prague", "3. Manchester", "4. Kyiv"],
        correctAnswer: "2"
    },
    {
        question:"What is the capital of Spain?",
        answers: ["1. Barcelona", "2. Moscow", "3. Madrid", "4. Hamsburg"],
        correctAnswer:"3"
    },
    {
        question:"What is the capital of Estonia?",
        answers: ["1. Warsaw", "2. Tallinn", "3. Bucharest", "None of the above"],
        correctAnswer:"3"
    },
    {
        question:"What is the capital of Latvia?",
        answers: ["1. Riga", "2. Vilnius", "3. Bucharest", "4. Nur-Sultan"],
        correctAnswer:"1"
    },
]


function setTime(){
    let timerInterval = setInterval(function(){
        secondsLeft--;
        TimeEl.textContent = "Time:${secondsLeft}s";

        if (secondsLeft === 0 || questioncount === questions.length){
            clearInterval(timerInterval);
            questionsEl.style.display = "none";
            FinalsEl.style.display ="block";
            ScoreEl.textContent = secondsLeft;
        }
    }, 1000);
}

function startQuiz(){
introEl.style.display = "none";
questionsEl.style.display = "block";
questioncount = 0;

setTime();
setQuestion(questioncount);
}

function setQuestion(){
    if(id < questions.length){
        questionsEl.textContent = questions[id].question;
        ans1Btn.textContent = questions[id].answers[0];
        ans2Btn.textContent = questions[id].answers[1];
        ans3Btn.textContent = questions[id].answers[2];
        ans4Btn.textContent = questions[id].answers[3];
    }
}

function checkAnswer(event){
    event.preventDefault();
    yaynayEl.style.display = "block";
    let p = document.createElement("p");
    yaynayEl.appendChild(p);


    setTimeout(function () {
        p.style.display = "none";
    }, 1000);


    if (questions[questioncount].correctAnswer === event.target.value){
        p.textContent = "correctomondo";
    } else if (question[questioncount].correctAnswer !== event.target.value){
        secondsLeft = secondsLeft -10;
        p.textContent = "LOL", "Nope";
    }

    if (questioncount < question.length){
        questioncount++;
    }
    
    setQuestion(questioncount);
}


function addScore(event){
    event.preventDefault();
    FinalsEl.style.display = "none";
    highscoresEl.style.display = "block";
    let init = initialsinput.value.toUpperCase();
    scorelist.push({initials: init, score: secondsLeft});
    scorelist = scorelist.sort((a,b) =>{
        if(a.score < b.score){
            return 1;
        } else {
            return -1;
        }
    });


    scoreslistEl.innerHTML="";
    for (let i = 0; i< scorelist.length; i++){
        let li = document.createElement("li");
        li.textContent = `${scoreList[i].initials}: ${scoreList[i].score}`;
        scoreListEl.append(li);
    }

    storeScores();
    displayScores();

}


function storeScores(){
    localStorage.setItem("scoreList", JSON.stringify(scorelist));
}

function displayScores(){
    let storedScoreList = JSON.parse(localStorage.getItem("scoreList"));

    if (scorelist !== null){
        scorelist = storedScoreList;
    }
}



