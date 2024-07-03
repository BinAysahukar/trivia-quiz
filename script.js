const questions = [
    {
        question: "Which Indian hill station in India is known as the “Queen of the Hills”?",
        options: ["Shillng", "Darjeeling", "Shimla", "Mussoorie"],
        correctAnswer: 3 // Index of correct option (Paris)
    },
    // Add more questions here...
];

let currentQuestion = 0; // Initialize with the first question

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const labelA = document.getElementById("labelA");
    // Repeat similar assignments for other options (B, C, D)

    questionElement.textContent = questions[currentQuestion].question;
    labelA.textContent = questions[currentQuestion].options[0];
    // Assign other options' text content

    // Hide or show buttons based on the current question
    if (currentQuestion === questions.length - 1) {
        document.getElementById("next-button").style.display = "none";
        document.getElementById("submit-button").style.display = "block";
    } else {
        document.getElementById("next-button").style.display = "block";
        document.getElementById("submit-button").style.display = "none";
    }
}

// Event listener for the Next button
document.getElementById("next-button").addEventListener("click", () => {
    currentQuestion++;
    loadQuestion();
});

// Event listener for the Submit button
document.getElementById("submit-button").addEventListener("click", () => {
    // Handle submission (check user's answer against correctAnswer)
    // Display feedback (correct/incorrect)
});

// Initial load
loadQuestion();


document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;
    
    if (!name || !email || !subject || !message) {
        alert('Please fill in all fields.');
        return;
    }
    
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    $('.toast').toast('show');
    
    document.getElementById('feedbackForm').reset();
});