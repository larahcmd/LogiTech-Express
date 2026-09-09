const express = require("express");

const router = express.Router();

router.get("/entregas", (req, res) => {
    res.send("Lista de entregas");
});

router.post("/entregas", (req, res) => {
    res.send("Entrega cadastrada");
});

router.put("/entregas/:id", (req, res) => {
    res.send("Entrega atualizada");
});

router.delete("/entregas/:id", (req, res) => {
    res.send("Entrega excluída");
});

module.exports = router;
