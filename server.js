const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post("/register", (req, res) => {
    const { phone } = req.body;

    // Here you would typically add the phone number to a database
    // and return a response indicating success or failure
    // For the sake of this example, we're just sending a JSON response
    res.json({ success: true });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
