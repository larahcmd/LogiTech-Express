# Plano de Testes - LogiTech Express

## 1. Testes de Motoristas

### CT01 - Cadastro de Motorista com Dados Obrigatórios
Nível do Teste: Sistema (End-to-End / Caixa Preta)
Pré-condição: Sistema disponível e usuário com permissão para cadastrar motoristas.
Passos de Execução:
Acessar a funcionalidade de cadastro de motorista.
Informar todos os dados obrigatórios.
Enviar o formulário.
Aguardar resposta do sistema.
Resultado Esperado:
Status Code: 201 Created.
Motorista cadastrado com sucesso.
Dados do motorista persistidos no banco de dados.

### CT02 - Cadastro de Motorista sem Nome
Nível do Teste: Sistema (End-to-End / Caixa Preta)
Pré-condição: Sistema disponível e usuário com permissão para cadastrar motoristas.
Passos de Execução:
Acessar a funcionalidade de cadastro de motorista.
Deixar o campo nome vazio.
Informar os demais dados obrigatórios.
Enviar o formulário.
Resultado Esperado:
Status Code: 400 Bad Request.
Mensagem informando que o nome é obrigatório.
Motorista não deve ser cadastrado no banco de dados.

### CT03 - Consulta de Motorista Existente
Nível do Teste: Sistema (End-to-End / Caixa Preta)
Pré-condição: Existir um motorista cadastrado no sistema.
Passos de Execução:
Informar o ID de um motorista existente.
Enviar a requisição de consulta.
Aguardar resposta da API.
Resultado Esperado:
Status Code: 200 OK.
Sistema apresenta os dados do motorista informado.
Dados retornados correspondem ao motorista consultado.

### CT04 - Consulta de Motorista Inexistente
Nível do Teste: Sistema (End-to-End / Caixa Preta)
Pré-condição: Sistema disponível e não existir motorista com o ID informado.
Passos de Execução:
Informar um ID de motorista inexistente.
Enviar a requisição de consulta.
Aguardar resposta da API.
Resultado Esperado:
Status Code: 404 Not Found.
Mensagem: "Motorista não encontrado".
Nenhum dado de motorista deve ser retornado.

### Testes de Veículos

### CT05 - Cadastro de Veículo com Dados Obrigatórios
Nível do Teste: Sistema (End-to-End / Caixa Preta)
Pré-condição: Sistema disponível e usuário com permissão para cadastrar veículos.
Passos de Execução:
Acessar a funcionalidade de cadastro de veículo.
Informar placa, modelo, tipo e status válidos.
Enviar o formulário.
Aguardar resposta do sistema.
Resultado Esperado:
Status Code: 201 Created.
Veículo cadastrado com sucesso.
Dados do veículo persistidos no banco de dados.

### CT06 - Cadastro de Veículo com Placa Inválida
Nível do Teste: Sistema (End-to-End / Caixa Preta)
Pré-condição: Sistema disponível e usuário com permissão para cadastrar veículos.
Passos de Execução:
Acessar a funcionalidade de cadastro de veículo.
Informar uma placa em formato inválido.
Informar os demais dados obrigatórios.
Enviar o formulário.
Resultado Esperado:
Status Code: 400 Bad Request.
Sistema informa que a placa é inválida.
Veículo não deve ser cadastrado no banco de dados.

### Testes de Entregas

### CT07 - Cadastro de Entrega com Dados Obrigatórios
Nível do Teste: Sistema (End-to-End / Caixa Preta)
Pré-condição: Existir motorista e veículo cadastrados e disponíveis para associação à entrega.
Passos de Execução:
Acessar a funcionalidade de cadastro de entrega.
Informar origem, destino, data, motorista e veículo.
Enviar o formulário.
Aguardar resposta do sistema.
Resultado Esperado:
Status Code: 201 Created.
Entrega cadastrada com sucesso.
Dados da entrega persistidos no banco de dados.

### CT08 - Cadastro de Entrega sem Dados Obrigatórios
Nível do Teste: Sistema (End-to-End / Caixa Preta)
Pré-condição: Sistema disponível e usuário com permissão para cadastrar entregas.
Passos de Execução:
Acessar a funcionalidade de cadastro de entrega.
Deixar um dos campos obrigatórios vazio.
Informar os demais dados necessários.
Enviar o formulário.
Resultado Esperado:
Status Code: 400 Bad Request.
Sistema informa qual campo obrigatório não foi preenchido.
Entrega não deve ser cadastrada no banco de dados.

### CT09 - Consulta de Entrega Existente
Nível do Teste: Sistema (End-to-End / Caixa Preta)
Pré-condição: Existir uma entrega cadastrada no sistema.
Passos de Execução:
Informar o ID de uma entrega existente.
Enviar a requisição de consulta.
Aguardar resposta da API.
Resultado Esperado:
Status Code: 200 OK.
Sistema apresenta os dados da entrega.
Dados retornados correspondem à entrega consultada.

### Testes de Segurança

### CT10 - Proteção de Informações Confidenciais
Nível do Teste: Segurança (Análise Estática / Caixa Branca)
Pré-condição: Código-fonte da aplicação disponível para análise.
Passos de Execução:
Realizar uma análise do código-fonte.
Verificar arquivos de configuração e variáveis utilizadas pela aplicação.
Procurar senhas, tokens, chaves de API ou outras credenciais diretamente declaradas no código.
Resultado Esperado:
Nenhuma senha, token ou chave de acesso deve estar diretamente exposta no código-fonte.
Informações confidenciais devem ser obtidas por meio de variáveis de ambiente.
Nenhuma credencial deve ser versionada no repositório.

### CT11 - Proteção do Arquivo .env pelo .gitignore
Nível do Teste: Segurança (Integração / Caixa Branca)
Pré-condição: Projeto versionado com Git e arquivo .env configurado para armazenar informações confidenciais.
Passos de Execução:
Acessar o arquivo .gitignore do projeto.
Verificar se o arquivo .env está listado nas regras de exclusão.
Executar git status para verificar os arquivos não rastreados.
Verificar se o .env não está sendo enviado para o repositório.
Resultado Esperado:
O arquivo .env deve estar presente no .gitignore.
O arquivo .env não deve aparecer como arquivo a ser versionado.
Informações confidenciais não devem ser enviadas ao GitHub.

### CT12 - Cálculo de Frete com Distância Negativa
- Nível do Teste: Unitário (Service / Caixa Branca)
- Pré-condição: Função calcularFrete(distancia, peso) disponível na camada Service.
Passos de Execução:
- Invocar a função calcularFrete(-50, 100).
- Monitorar execução da lógica.
Resultado Esperado:
- Exceção: InvalidDistanceException
- Nenhum cálculo realizado.

### CT13 - Concorrência no Cadastro de Motorista
- Nível do Teste: Integração (Repository / Banco de Dados)
- Pré-condição: Banco de dados de teste ativo e tabela motoristas vazia.
Passos de Execução:
- Disparar duas requisições simultâneas POST /motoristas com o mesmo payload.
- Aguardar resposta da API.
Resultado Esperado:
- Apenas um registro persistido no banco.
- Segunda requisição retorna 400 Bad Request com mensagem "CPF já cadastrado".

### CT14 - Login com Senha Inválida
- Nível do Teste: Sistema (End-to-End / Caixa Preta)
- Pré-condição: Usuário cadastrado com login válido (email: teste@logitech.com, senha correta 123456).
Passos de Execução:
- Enviar requisição POST /login com o payload acima.
- Aguardar resposta da API.
Resultado Esperado:
- Status Code: 401 Unauthorized
- Mensagem: "Credenciais inválidas"
- Nenhum token de autenticação gerado.

### Matriz de Rastreabilidade

### ID DO TESTE: CT03
REQUISITO ASSOCIADO: REQ-01 (consulta de Motorista)
GARGALO POTENCIAL: consulta de motorista existente 
TIPO DE TESTE: funcional / caixa preta
NÍVEL: sistema

### ID DO TESTE: CT05
REQUISITO ASSOCIADO: REQ-02 (cadastro de Veículo)
GARGALO POTENCIAL: dados obrigatórios inválidos ou incompletos
TIPO DE TESTE: funcional / caixa preta
NÍVEL: sistema

### ID DO TESTE: CT09
REQUISITO ASSOCIADO: REQ-03 (consulta de Entrega)
GARGALO POTENCIAL: consulta de entrega existente 
TIPO DE TESTE: funcional / caixa preta
NÍVEL: sistema

### ID DO TESTE: CT12
REQUISITO ASSOCIADO: REQ-05 (cálculo de frete)
GARGALO POTENCIAL: distância negativa
TIPO DE TESTE: estrutural / caixa branca
NÍVEL: unitário

### ID DO TESTE: CT13
REQUISITO ASSOCIADO: REQ-01 (cadastro Motorista)  
GARGALO POTENCIAL: concorrência no CPF 
TIPO DE TESTE: funcional / caixa preta
NÍVEL: integração

### ID DO TESTE: CT14
REQUISITO ASSOCIADO: 
GARGALO POTENCIAL: 
TIPO DE TESTE: funcional / caixa preta
NÍVEL: sistema
