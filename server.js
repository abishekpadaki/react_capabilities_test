const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 5000;

// Serve any static files built by React
app.use(express.static(path.join(__dirname, "dist")));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
