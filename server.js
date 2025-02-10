const express = require("express");
const app = express();

app.use(express.json()); 

app.post("/echo", (req, res) => {
    res.send(req.body.message);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => { 
    console.log(`Echo server is running on port ${PORT}`);
});
