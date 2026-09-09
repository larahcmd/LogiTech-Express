const entregaModel = {
    id_entrega: Number,
    endereco_origem: String,
    endereco_destino: String,
    data_entrega: Date,
    status: String,
    id_motorista: Number,
    id_veiculo: Number
};

module.exports = entregaModel;
