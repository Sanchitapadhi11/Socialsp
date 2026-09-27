// ==============================
// BUILD STRATEGY BUTTON
// ==============================

const strategyButton = document.querySelector(".nav-button");

strategyButton.addEventListener("click", function () {
    document.querySelector("#strategy").scrollIntoView({
        behavior: "smooth"
    });
});


// ==============================
// SCROLL ANIMATION
// ==============================

const cards = document.querySelectorAll(
    ".strategy-card, .platform-card, .impact-box"
);

const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    },
    {
        threshold: 0.15
    }
);


cards.forEach(function (card) {
    observer.observe(card);
});
// ==============================
// STRATEGY PLANNER
// ==============================

const generateButton = document.querySelector("#generateStrategy");

generateButton.addEventListener("click", function () {

    const platform = document.querySelector("#platformSelect").value;
    const goal = document.querySelector("#goalSelect").value;
    const day = document.querySelector("#daySelect").value;

    const result = document.querySelector("#strategyResult");


    if (platform === "" || goal === "" || day === "") {

        result.innerHTML = `
            <p>Please select all three options first.</p>
        `;

        return;
    }


    result.innerHTML = `
        <div>
            <h3>Your Social Media Plan</h3>

            <p>
                📱 Platform: <strong>${platform}</strong>
            </p>

            <p>
                🎯 Goal: <strong>${goal}</strong>
            </p>

            <p>
                📅 Posting Day: <strong>${day}</strong>
            </p>

            <p>
                Your organization can use ${platform}
                on ${day} to focus on ${goal}.
            </p>
        </div>
    `;

});
// =========================
// QUIZ DATA
// =========================

const quizData = {

    basics: {
        title: "Strategy Basics",

        questions: [
            {
                question: "What should a community-based organization decide first when creating a social media strategy?",
                options: [
                    "Post colors",
                    "Number of followers",
                    "Clear goals",
                    "Trending hashtags"
                ],
                answer: "Clear goals"
            },

            {
                question: "Why is knowing your audience important?",
                options: [
                    "To use every platform",
                    "To create relevant content",
                    "To post more often",
                    "To increase the number of hashtags"
                ],
                answer: "To create relevant content"
            },

            {
                question: "Which type of content can help people understand a community organization's real work?",
                options: [
                    "Random advertisements",
                    "Unrelated memes",
                    "Only promotional posts",
                    "Community stories"
                ],
                answer: "Community stories"
            },

            {
                question: "Why should an organization stay consistent on social media?",
                options: [
                    "To avoid measuring results",
                    "To post without a goal",
                    "To use every social platform",
                    "To maintain regular communication"
                ],
                answer: "To maintain regular communication"
            },

            {
                question: "What should an organization do after measuring its social media results?",
                options: [
                    "Ignore the results",
                    "Improve the strategy",
                    "Stop communicating",
                    "Delete all content"
                ],
                answer: "Improve the strategy"
            }
        ]
    },


    platforms: {
        title: "Platform Selection",

        questions: [
            {
                question: "Which platform can be useful for visual community content?",
                options: [
                    "Calculator",
                    "Notepad",
                    "Instagram",
                    "File Explorer"
                ],
                answer: "Instagram"
            },

            {
                question: "Why should an organization choose platforms based on its audience?",
                options: [
                    "To reach the right people",
                    "To use every platform",
                    "To increase random posts",
                    "To avoid planning"
                ],
                answer: "To reach the right people"
            },

            {
                question: "Which platform can be useful for quick updates and announcements?",
                options: [
                    "Calculator",
                    "Paint",
                    "WhatsApp",
                    "File Manager"
                ],
                answer: "WhatsApp"
            },

            {
                question: "What should an organization consider before choosing a platform?",
                options: [
                    "Only the platform color",
                    "Only the logo",
                    "Only the number of buttons",
                    "Audience and communication goal"
                ],
                answer: "Audience and communication goal"
            },

            {
                question: "What is the main purpose of platform selection?",
                options: [
                    "To use every social media platform",
                    "To communicate effectively with the community",
                    "To post without a goal",
                    "To avoid audience research"
                ],
                answer: "To communicate effectively with the community"
            }
        ]
    },


    content: {
        title: "Content Strategy",

        questions: [
            {
                question: "Which content can show the real experiences of people in a community?",
                options: [
                    "Random advertisements",
                    "Unrelated posts",
                    "Only promotional messages",
                    "Community Stories"
                ],
                answer: "Community Stories"
            },

            {
                question: "What is the purpose of an Awareness Post?",
                options: [
                    "To inform people about an important issue",
                    "To hide information",
                    "To post without a purpose",
                    "To avoid communication"
                ],
                answer: "To inform people about an important issue"
            },

            {
                question: "Which content can recognize and highlight the contribution of volunteers?",
                options: [
                    "Volunteer Spotlight",
                    "Random Update",
                    "Advertisement",
                    "Unrelated Video"
                ],
                answer: "Volunteer Spotlight"
            },

            {
                question: "What can Behind-the-Scenes content help people understand?",
                options: [
                    "Only the number of followers",
                    "Only advertising costs",
                    "Nothing about the organization",
                    "How the organization works"
                ],
                answer: "How the organization works"
            },

            {
                question: "Why can asking the community questions be useful?",
                options: [
                    "It stops communication",
                    "It removes the need for content",
                    "It encourages people to participate",
                    "It prevents feedback"
                ],
                answer: "It encourages people to participate"
            }
        ]
    },


    analytics: {
        title: "Measure & Improve",

        questions: [
            {
                question: "What should an organization measure to understand its social media impact?",
                options: [
                    "Only post colors",
                    "Community Reach",
                    "Only the logo",
                    "Nothing"
                ],
                answer: "Community Reach"
            },

            {
                question: "Which metric shows how people interact with an organization's content?",
                options: [
                    "Background color",
                    "Font size",
                    "Page title",
                    "Engagement"
                ],
                answer: "Engagement"
            },

            {
                question: "Why is measuring awareness useful?",
                options: [
                    "To choose random content",
                    "To understand whether people are becoming aware of the message",
                    "To avoid communication",
                    "To remove all posts"
                ],
                answer: "To understand whether people are becoming aware of the message"
            },

            {
                question: "What should an organization do after measuring its results?",
                options: [
                    "Ignore the results",
                    "Stop posting",
                    "Measure and improve the strategy",
                    "Delete the strategy"
                ],
                answer: "Measure and improve the strategy"
            },

            {
                question: "Which of these is useful for understanding digital insights?",
                options: [
                    "Support",
                    "Gaming score",
                    "Weather",
                    "Shopping price"
                ],
                answer: "Support"
            }
        ]
    }

};

// =========================
// START QUIZ
// =========================

let currentQuiz = null;
let currentQuestion = 0;
let score = 0;

function startQuiz(quizName) {

    currentQuiz = quizData[quizName];
    currentQuestion = 0;
    score = 0;

    showQuestion();

    document.querySelector("#quizArea").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

// =========================
// SHOW QUESTION
// =========================

function showQuestion() {

    const quizArea = document.getElementById("quizArea");
    const questionData = currentQuiz.questions[currentQuestion];

    quizArea.innerHTML = `
        <div class="active-quiz">

            <div class="quiz-progress">
                Question ${currentQuestion + 1}
                of ${currentQuiz.questions.length}
            </div>

            <h2>${questionData.question}</h2>

            <div class="quiz-answer-list">

                ${questionData.options.map(function(option) {
                    return `
                        <button
                            class="answer-btn"
                            onclick="checkAnswer('${option}')">
                            ${option}
                        </button>
                    `;
                }).join("")}

            </div>

            <div id="answerMessage"></div>

        </div>
    `;
}


// =========================
// CHECK ANSWER
// =========================

function checkAnswer(selectedAnswer) {

    const questionData = currentQuiz.questions[currentQuestion];
    const message = document.getElementById("answerMessage");

    if (selectedAnswer === questionData.answer) {

        score++;

        message.innerHTML =
            "✓ Correct! Well done.";

    } else {

        message.innerHTML =
            "✗ Not quite. Think about the main purpose of a social media strategy.";
    }

    document.querySelectorAll(".answer-btn").forEach(function(button) {
        button.disabled = true;
    });

    setTimeout(function() {

        currentQuestion++;

        if (currentQuestion < currentQuiz.questions.length) {

            showQuestion();

        } else {

            showResult();

        }

    }, 1000);
}


// =========================
// SHOW RESULT
// =========================

function showResult() {

    const quizArea = document.getElementById("quizArea");

    quizArea.innerHTML = `
        <div class="quiz-result-box">

            <p class="quiz-tag">QUIZ COMPLETED</p>

            <h2>Your Score</h2>

            <div class="score">
                ${score} / ${currentQuiz.questions.length}
            </div>

            <p>
                You completed the ${currentQuiz.title} quiz.
            </p>

            <button onclick="startQuiz('basics')">
                Try Again →
            </button>

        </div>
    `;
}