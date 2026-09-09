const veiculoRepository = require("../repositories/veiculoRepository");

const cadastrarVeiculo = (dados) => {
    return veiculoRepository.cadastrar(dados);
};

const listarVeiculos = () => {
    return veiculoRepository.listar();
};

module.exports = {
    cadastrarVeiculo,
    listarVeiculos
};
