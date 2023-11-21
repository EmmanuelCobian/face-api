const expression = document.getElementById('expression');
const button = document.getElementById('button');
const expressions = ["neutral", "happy", "sad", "angry", "fearful", "disgusted", "surprised"];


function getRandomExpression() {
    console.log("clicked");
    expression.innerHTML = expressions[Math.floor(Math.random() * expressions.length)];
}

button.addEventListener('click', getRandomExpression);