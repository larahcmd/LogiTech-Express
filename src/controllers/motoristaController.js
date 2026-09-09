const motoristaService = require("../services/motoristaService");

const cadastrarMotorista = (req, res) => {
    res.send("Cadastro de motorista");
};

const listarMotoristas = (req, res) => {
    res.send("Lista de motoristas");
};

module.exports = {
    cadastrarMotorista,
    listarMotoristas
};
