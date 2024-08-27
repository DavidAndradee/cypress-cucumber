Feature: Criar Conta

Scenario: Criar conta com sucesso

Given eu acesso a pagina de cadastro
When eu informo os dados "<nome>","<email>","<senha>"
Then sistema deve cadastrar o usuario

Examples:
    | nome        | email       | senha   |
    | bob marley  | bob@marley  | teste2  |