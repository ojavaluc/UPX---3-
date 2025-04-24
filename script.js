// Mostrar/ocultar textos das ideias
function toggleVisibility(id) {
    const textElement = document.getElementById(id);
    const allTexts = document.querySelectorAll('.text-idea');

    allTexts.forEach(text => text.style.display = 'none');
    textElement.style.display = "block";
}

// Quiz
const quizQuestions = [
    {
        question: "1. O que é um biodigestor?",
        options: ["Uma planta que gera energia", "Sistema que transforma resíduos em energia", "Tipo de bicicleta sustentável"],
        answer: 1
    },
    {
        question: "2. Qual fonte de energia é renovável?",
        options: ["Carvão", "Petróleo", "Energia solar"],
        answer: 2
    },
    {
        question: "3. O que é lixo eletrônico?",
        options: ["Lixo hospitalar", "Dispositivos eletrônicos descartados", "Papel reciclado"],
        answer: 1
    },
    {
        question: "4. A energia de biomassa vem de:",
        options: ["Plástico", "Matéria orgânica", "Água do mar"],
        answer: 1
    },
    {
        question: "5. Como as bicicletas geram energia?",
        options: ["Pelo esforço do ciclista", "Com placas solares", "Com reatores químicos"],
        answer: 0
    }
];

function loadQuiz() {
    const container = document.getElementById("quiz-container");
    quizQuestions.forEach((q, index) => {
        const questionHTML = `<p>${q.question}</p>` +
            q.options.map((opt, i) =>
                `<label><input type="radio" name="q${index}" value="${i}"> ${opt}</label><br>`
            ).join("");
        container.innerHTML += questionHTML;
    });
}

function submitQuiz() {
    let score = 0;
    quizQuestions.forEach((q, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);
        if (selected && parseInt(selected.value) === q.answer) {
            score++;
        }
    });
    document.getElementById("quiz-result").innerText =
        `Você acertou ${score} de ${quizQuestions.length} perguntas!`;
}

window.onload = loadQuiz;
