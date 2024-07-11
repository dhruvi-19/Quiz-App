const questions = [
    {
        question: "Who created React.js?",
        options: ["Jordan Mike", "Jordan Walke", "Tim Lee", "Jordan Lee"],
        answer: "Jordan Walke"
    },
    {
        question: "How many elements can a valid react component return?",
        options: ["1", "2", "3", "4"],
        answer: "1"
    },
    {
        question: "Among the corner which is a must-have for every ReactJS component?",
        options: ["renderComponent", "SetinitialComponent", "Render", "All of the above"],
        answer: "renderComponent"
    },
    {
        question: "Total ways of defining variables in ES6 is?",
        options: ["1", "2", "3", "4"],
        answer: "3"
    },
    {
        question: "Using which of the following command can prevent default behaviour at in react?",
        options: ["preventDefault()", "avoidDefault()", "revokeDefault()", "All of the above"],
        answer: "preventDefault()"
    },
    {
        question: "What are arbitrary inputs of components in react also known as?",
        options: ["Elements", "Props", "Keys", "Ref"],
        answer: "Props"
    },
    {
        question: "What is ReactJS mainly used for building?",
        options: ["Database", "Connectivity", "User interface", "Design platform"],
        answer: "User interface"
    },
    {
        question: "What is used to handle code-splitting?",
        options: ["React.lazy", "React.memo", "React.fallback", "React.split"],
        answer: "React.lazy"
    },
    {
        question: "Which company developed ReactJS?",
        options: ["Apple", "Twitter", "Facebook", "Google"],
        answer: "Facebook"
    },
    {
        question: "Which of the following port is the default where webpack-dev-server runs?",
        options: ["3000", "3306", "3030", "8080"],
        answer: "8080"
    }
];



let currentQuestionIndex = 0;
let score = 0;


document.addEventListener('DOMContentLoaded', () => {
    showQuestion();
});

const nextButton = document.getElementById('next-btn');
nextButton.addEventListener('click', nextQuestion);



function showQuestion() {
    const questionContainer = document.getElementById('question-container');
    const questionNumber = document.getElementById('question-number');
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const nextButton = document.getElementById('next-btn');

    const question = questions[currentQuestionIndex];
    questionNumber.innerText = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
    questionElement.innerText = question.question;
    optionsElement.innerHTML = '';

    
    question.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('option');
        button.addEventListener('click', () => selectAnswer(option));
        optionsElement.appendChild(button);
    });

    nextButton.style.display = 'none';
}

function selectAnswer(selectedOption) {
    const question = questions[currentQuestionIndex];
    if (selectedOption === question.answer) {
        score++;
    }

    Array.from(document.getElementsByClassName('option')).forEach(button => {
        button.disabled = true;
        if (button.innerText === question.answer) {
            button.style.backgroundColor = '#93dba3';
        }
         else {
            button.style.backgroundColor = '#e3717c';
        }
    });

    const nextButton = document.getElementById('next-btn');
    nextButton.style.display = 'block';

    // setTimeout(nextQuestion, 1000);
   
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        //Result is remaining
        showResult();

    }
}

function showResult() {
    const quizContainer = document.getElementById('quiz-container');
    const resultContainer = document.getElementById('result-container');


    console.log('It should display result');

    quizContainer.style.display = 'none';
    resultContainer.style.display = 'flex';

    resultContainer.innerText = `Your score is ${score} out of ${questions.length}`;

}













