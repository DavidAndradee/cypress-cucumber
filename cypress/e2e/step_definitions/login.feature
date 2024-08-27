Feature: Login

Scenario: Valid Login

Given eu acesso a pagina de login
When eu informo meu email e password
Then eu espero sucesso no login

Scenario: Invalid Login

Given eu acesso a pagina de login
When eu informo meu email e uma senha incorreta
Then eu espero que o login falhe