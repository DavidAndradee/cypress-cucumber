import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given('eu acesso a pagina de login', ()=>{
    cy.visit("http://localhost:3000/")
})

When("eu informo meu email e senha", ()=>{
    cy.get(':nth-child(3) > [data-testid="input-container"]').type("david1999andrade@gmail.com")
    cy.get(':nth-child(4) > [data-testid="input-container"]').type("teste1")
    cy.get('.sc-Axmtr').click()
})

Then("eu espero sucesso no login", ()=>{
    cy.get('h1').contains('Minhas tarefas')
    cy.get('.sc-Axmtr').should('be.visible')
})

And

Given('eu acesso a pagina de login', ()=>{
    cy.visit("http://localhost:3000/")
})

When("eu informo meu email incorreto", ()=>{
    cy.get(':nth-child(3) > [data-testid="input-container"]').type("davidandrade@gmail.com")
    cy.get(':nth-child(4) > [data-testid="input-container"]').type("teste1")
    cy.get('.sc-Axmtr').click()
})
When("eu informo minha senha errada", ()=>{
    cy.get(':nth-child(3) > [data-testid="input-container"]').type("david1999andrade@gmail.com")
    cy.get(':nth-child(4) > [data-testid="input-container"]').type("teste1")
    cy.get('.sc-Axmtr').click()
})

Then("eu espero que o login falhe", ()=>{
    cy.get('.notice').contains('Ocorreu um erro ao fazer login, verifique suas credenciais')
})

And

Given('eu acesso a pagina de login', ()=>{
    cy.visit("http://localhost:3000/")
})

When("eu clicar em ENTRAR", ()=>{
    cy.get('.sc-Axmtr').click()
})

Then("eu espero que apresente uma mensagem de erro abaixo dos campos", ()=>{
    cy.get(':nth-child(3) > .alert').contains('Informe seu e-mail')
    cy.get(':nth-child(4) > .alert').contains('Informe sua senha')
})


