const entregaService = require("../services/entregaService");

const cadastrarEntrega = (req, res) => {
    res.send("Cadastro de entrega");
};

const listarEntregas = (req, res) => {
    res.send("Lista de entregas");
};

module.exports = {
    cadastrarEntrega,
    listarEntregas
};
