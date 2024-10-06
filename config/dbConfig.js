const mongoose = require("mongoose");

// Directly using the MongoDB URI
const mongoUrl = "mongodb+srv://khanshaheer6969:5yfiC8hdP0VfU3mM@cluster0.n28a9.mongodb.net/";

mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;

connection.on("error", () => {
    console.log("Error is in connection");
});

connection.on("connected", () => {
    console.log("Connected");
});

module.exports = connection;
