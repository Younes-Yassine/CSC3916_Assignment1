const express = require("express");
const app = express();

app.use(express.json());


app.post("/echo", (req, res) => {
    console.log("POST request received on /echo");
    console.log("Request body:", req.body);

    if (!req.body.message) {
        return res.status(400).json({ error: "Message field is required" });
    }
    res.json({ message: req.body.message }); 
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Echo server is running on port ${PORT}`);
});
