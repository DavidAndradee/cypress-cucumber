Feature: Login

Scenario: Valid Login

Given eu acesso a pagina de login
When eu informo meu email e senha
Then eu espero sucesso no login

Scenario: Invalid Login

Given eu acesso a pagina de login
When eu informo meu email incorreto
Then eu espero que o login falhe
And eu informo minha senha errada
Then eu espero que o login falhe

Scenario: Tentar acessar sem informar dados

Given eu acesso a pagina de login
When eu clicar em ENTRAR
Then eu espero que apresente uma mensagem de erro abaixo dos campos