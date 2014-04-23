node-eyetribe
=============

Reads from a *TheEyeTribe* eyetracking device server, and forwards this to the browser via websocket (`socket.io`). `index.html` takes this data and visualizes it in `heatmap.js`

It is not...
---
- ... anywhere near finished
- ... an NPM module
- ... something you can use to track the eyes of your visitors
- ... a HTTP server

It is...
---
- ... a hello-world experiment
- ... something you can use to track the eyes of your test subject
- ... a websocket server

To use...
---
- Make sure you have TheEyeTribe server running and the device calibrated
- Run `npm install` once
- Run `npm start` and open index.html in your browser
