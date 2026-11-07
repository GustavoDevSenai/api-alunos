const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({
    projeto: "API Alunos",
    ambiente: "Docker + VPS",
    status: "online"
  });
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});