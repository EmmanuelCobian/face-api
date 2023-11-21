const expression = document.getElementById('expression');
const button = document.getElementById('button');
const expressions = ["neutral", "happy", "sad", "angry", "fearful", "disgusted", "surprised"];


function getRandomExpression() {
    expression.innerHTML = expressions[Math.floor(Math.random() * months.length)];
}

button.addEventListener('click', getRandomExpression);