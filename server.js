const express = require("express")
const app = express()
require("dotenv").config();
const dbConfig = require("./config/dbConfig")
const portfolioRoute = require("./routes/portfolioRoute")
const path = require("path")


app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});


app.use(express.json())

app.use("/api/portfolio", portfolioRoute)

const port = process.env.PORT || 5000

// Serve static files from the React app
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "client/build")));
  
    // The "index.html" file serves the React app
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "client/build/index.html"));
    });
  }



app.listen(port, () => {
    console.log(`server is running on ${port}`)
})


