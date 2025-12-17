const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(express.text({ limit: "10mb" }));

app.post("/save", (req, res) => {
    const content = req.body || "";
    const filePath = path.join(__dirname, "arquivo.txt");

    fs.writeFileSync(filePath, content, "utf8");
    res.download(filePath, "arquivo.txt");
});

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});
