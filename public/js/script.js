const expression = document.getElementById('expression');
const button = document.getElementById('button');
const expressions = ["neutral", "happy", "sad", "angry", "fearful", "disgusted", "surprised"];
let nIntervId;

function getRandomExpression() {
    console.log("clicked");
    expression.innerHTML = expressions[Math.floor(Math.random() * expressions.length)];
}

function changeText() {
    // check if an interval has already been set up
    if (!nIntervId) {
      nIntervId = setInterval(getRandomExpression, 1000);
    }
  }

button.addEventListener('click', changeText);