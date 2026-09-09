# Plano de Testes - LogiTech Express

## 1. Testes de Motoristas

### Teste 1 - Cadastrar motorista
- Informar todos os dados obrigatórios.
- Resultado esperado: motorista cadastrado com sucesso.

### Teste 2 - Cadastrar motorista sem nome
- Deixar o campo nome vazio.
- Resultado esperado: sistema deve informar que o nome é obrigatório.

### Teste 3 - Consultar motorista
- Informar o ID de um motorista existente.
- Resultado esperado: sistema deve apresentar os dados do motorista.

### Teste 4 - Consultar motorista inexistente
- Informar um ID que não existe.
- Resultado esperado: sistema deve informar que o motorista não foi encontrado.

## 2. Testes de Veículos

### Teste 5 - Cadastrar veículo
- Informar placa, modelo, tipo e status.
- Resultado esperado: veículo cadastrado com sucesso.

### Teste 6 - Placa inválida
- Informar uma placa inválida.
- Resultado esperado: sistema deve rejeitar o cadastro.

## 3. Testes de Entregas

### Teste 7 - Cadastrar entrega
- Informar origem, destino, data, motorista e veículo.
- Resultado esperado: entrega cadastrada com sucesso.

### Teste 8 - Entrega sem dados obrigatórios
- Deixar um dos campos obrigatórios vazio.
- Resultado esperado: sistema deve informar o erro.

### Teste 9 - Consultar entrega
- Informar o ID de uma entrega existente.
- Resultado esperado: sistema deve apresentar os dados da entrega.

## 4. Testes de Segurança

### Teste 10 - Proteger informações confidenciais
- Verificar se senhas e tokens não estão diretamente no código.
- Resultado esperado: informações confidenciais devem estar protegidas por variáveis de ambiente.

### Teste 11 - Arquivo .env
- Verificar se o arquivo .env está protegido pelo .gitignore.
- Resultado esperado: o arquivo .env não deve ser enviado ao GitHub.
