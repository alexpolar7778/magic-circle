document.addEventListener("DOMContentLoaded", function() {
    let container = document.createElement("div");
    container.id = "magicBallContainer";

    let header = document.createElement("h1");
    header.id = "header";
    header.innerText = "Магічна куля";

    let magicBall = document.createElement("div");
    magicBall.id = "magicBall";
    magicBall.innerText = "Задайте питання";

    let questionInput = document.createElement("input");
    questionInput.id = "questionInput";
    questionInput.type = "text";
    questionInput.placeholder = "Ваше питання";

    let submitButton = document.createElement("button");
    submitButton.id = "submitButton";
    submitButton.innerText = "Відправити";

    submitButton.addEventListener("click", function() {
        if (questionInput.value.trim() === "") alert("Будь ласка, введіть питання!");
        else {
            let answers = ["Так", "Ні", "Можливо"];
            let randomIndex = Math.floor(Math.random() * answers.length);
            magicBall.innerText = answers[randomIndex];
        }
    });

    container.appendChild(header);
    container.appendChild(magicBall);
    container.appendChild(questionInput);
    container.appendChild(submitButton);

    document.body.appendChild(container);
});