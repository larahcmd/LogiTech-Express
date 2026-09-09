const express = require("express");

const router = express.Router();

router.get("/veiculos", (req, res) => {
    res.send("Lista de veículos");
});

router.post("/veiculos", (req, res) => {
    res.send("Veículo cadastrado");
});

router.put("/veiculos/:id", (req, res) => {
    res.send("Veículo atualizado");
});

router.delete("/veiculos/:id", (req, res) => {
    res.send("Veículo excluído");
});

module.exports = router;
