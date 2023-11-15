# Face-api & MAX/MSP Integration

This code uses your webcam to see if you're smiling and turns on a toggle in MAX if you are. To use this code, follow these steps:

1. Open a terminal and navigate to the project directory.
2. Run the command `npm install` to install the necessary dependencies.
4. Open a browser window and navigate to `http://localhost:8080`, making sure your webcam is on.
5. Open the `face_api.maxpat` file and click on the `script start` message button to start up the WebSocket server (you may need to refresh you browser page after doing this).
6. After a few moments, you should see the infomation populating in Max, try smiling to see if the toggle turns on.
