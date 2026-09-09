const motoristaRepository = require("../repositories/motoristaRepository");

const cadastrarMotorista = (dados) => {
    return motoristaRepository.cadastrar(dados);
};

const listarMotoristas = () => {
    return motoristaRepository.listar();
};

module.exports = {
    cadastrarMotorista,
    listarMotoristas
};
