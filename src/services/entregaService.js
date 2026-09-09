const entregaRepository = require("../repositories/entregaRepository");

const cadastrarEntrega = (dados) => {
    return entregaRepository.cadastrar(dados);
};

const listarEntregas = () => {
    return entregaRepository.listar();
};

module.exports = {
    cadastrarEntrega,
    listarEntregas
};
