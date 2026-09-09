const express = require("express");

const router = express.Router();

router.get("/motoristas", (req, res) => {
    res.send("Lista de motoristas");
});

router.post("/motoristas", (req, res) => {
    res.send("Motorista cadastrado");
});

router.put("/motoristas/:id", (req, res) => {
    res.send("Motorista atualizado");
});

router.delete("/motoristas/:id", (req, res) => {
    res.send("Motorista excluído");
});

module.exports = router;
