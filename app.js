const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello from Node App 1");
});

app.get('/time', (req, res) => {
    res.json({ time: new Date().toISOString() });
});

app.listen(port, () => {
    console.log(`Node App 1 is running on port ${port}`);
});

module.exports = app;
