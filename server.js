const express = require("express");
const app = express();

app.use(express.json()); 

app.post("/echo", (req, res) => {
    res.send(req.body.message);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Echo server is running on port ${PORT}`);
});
