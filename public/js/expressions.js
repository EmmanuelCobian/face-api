const MODEL_URL = "/weights";
const video = document.querySelector("#video");
const overlay = document.querySelector("#overlay");
const ws = new WebSocket("ws://localhost:7474");

const arrToDict = (arr) => {
  let result = {}
  arr.forEach((val, index) => {
    result[index] = val.expressions
  })
  return result
}

const detect = async () => {
  const results = await faceapi
    .detectAllFaces(video)
    .withFaceLandmarks()
    .withFaceExpressions();
  if (results && results.length > 0) {
    const dims = faceapi.matchDimensions(overlay, video, true);
    const resizedResults = faceapi.resizeResults(results, dims);
    faceapi.draw.drawDetections(overlay, resizedResults);
    faceapi.draw.drawFaceExpressions(overlay, resizedResults, 0.05);
    allExpressions = arrToDict(results)
    ws.send(JSON.stringify(allExpressions));
  }
  requestAnimationFrame(detect);
};

const run = async () => {
  await Promise.all([
    faceapi.nets.ssdMobilenetv1.loadFromUri(MODEL_URL),
    faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
    faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
    faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
  ]);
  const stream = await navigator.mediaDevices.getUserMedia({ video: {} });
  video.srcObject = stream;
  video.addEventListener("play", detect);
};

run();
