const veiculoService = require("../services/veiculoService");

const cadastrarVeiculo = (req, res) => {
    res.send("Cadastro de veículo");
};

const listarVeiculos = (req, res) => {
    res.send("Lista de veículos");
};

module.exports = {
    cadastrarVeiculo,
    listarVeiculos
};
