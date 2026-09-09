CREATE DATABASE logitech_express;
USE logitech_express;

CREATE TABLE motorista (
    id_motorista INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cpf VARCHAR(14) NOT NULL UNIQUE,
    telefone VARCHAR(20),
    cnh VARCHAR(20) NOT NULL
);

CREATE TABLE veiculo (
    id_veiculo INT AUTO_INCREMENT PRIMARY KEY,
    placa VARCHAR(10) NOT NULL UNIQUE,
    modelo VARCHAR(100) NOT NULL,
    tipo VARCHAR(50) NOT NULL,
    status VARCHAR(30) NOT NULL
);

CREATE TABLE rota (
    id_rota INT AUTO_INCREMENT PRIMARY KEY,
    origem VARCHAR(150) NOT NULL,
    destino VARCHAR(150) NOT NULL,
    distancia DECIMAL(10,2),
    id_motorista INT NOT NULL,

    FOREIGN KEY (id_motorista)
        REFERENCES motorista(id_motorista)
);

CREATE TABLE entrega (
    id_entrega INT AUTO_INCREMENT PRIMARY KEY,
    endereco_origem VARCHAR(200) NOT NULL,
    endereco_destino VARCHAR(200) NOT NULL,
    data_entrega DATE NOT NULL,
    status VARCHAR(30) NOT NULL,
    id_motorista INT NOT NULL,
    id_veiculo INT NOT NULL,

    FOREIGN KEY (id_motorista)
        REFERENCES motorista(id_motorista),

    FOREIGN KEY (id_veiculo)
        REFERENCES veiculo(id_veiculo)
);
