const socket = new WebSocket("ws://localhost:7474");
const expression = document.getElementById("expression");
const button = document.getElementById("button");
const expressions = [
  "neutral",
  "happy",
  "sad",
  "angry",
  "fearful",
  "disgusted",
  "surprised",
];
let nIntervId;

const getExpressions = (expressions) => {
  let result = "";
  for (const [personNum, person] of Object.entries(expressions)) {
    let maxKey = null;
    let maxValue = -Infinity;
    for (const emotion in person) {
      const prob = person[emotion]
      if (prob > maxValue) {
        maxValue = prob;
        maxKey = emotion;
      }
    }
    result += "Person " + (parseInt(personNum) + 1) + ": " + maxKey + " ";
  }
  return result;
};

function getRandomExpression() {
  console.log("clicked");
  expression.innerHTML =
    expressions[Math.floor(Math.random() * expressions.length)];
}

function changeText() {
  // check if an interval has already been set up
  if (!nIntervId) {
    nIntervId = setInterval(getRandomExpression, 5000);
  }
}

button.addEventListener("click", changeText);

socket.addEventListener("message", (event) => {
  const expressionsDiv = document.getElementById("emotion");
  const allExpressions = JSON.parse(event.data);
  expressionsDiv.textContent = getExpressions(allExpressions);
});

socket.addEventListener("error", (event) => {
  console.error("WebSocket error:", event);
});

socket.addEventListener("close", (event) => {
  console.warn("WebSocket connection closed:", event);
});
