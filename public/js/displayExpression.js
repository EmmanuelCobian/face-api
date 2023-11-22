const getPrimaryExpression = (expressions) => {
  let maxKey = null;
  let maxValue = -Infinity;

  for (const key in expressions) {
    const value = expressions[key];
    if (value > maxValue) {
      maxValue = value;
      maxKey = key;
    }
  }
  return maxKey;
};
const socket = new WebSocket("ws://localhost:7474");

socket.addEventListener("message", (event) => {
  const expressionsDiv = document.getElementById("expression");
  const allExpressions = JSON.parse(event.data);

  expressionsDiv.textContent = getPrimaryExpression(allExpressions[0]);
});

socket.addEventListener("error", (event) => {
  console.error("WebSocket error:", event);
});

socket.addEventListener("close", (event) => {
  console.warn("WebSocket connection closed:", event);
});
