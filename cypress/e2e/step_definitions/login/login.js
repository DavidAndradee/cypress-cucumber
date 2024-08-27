import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given('eu acesso a pagina de login', ()=>{
    cy.visit("http://localhost:3000/")
})

When("eu informo meu email e password", ()=>{
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

When("eu informo meu email e uma senha incorreta", ()=>{
    cy.get(':nth-child(3) > [data-testid="input-container"]').type("david1999andrade@gmail.com")
    cy.get(':nth-child(4) > [data-testid="input-container"]').type("teste3")
    cy.get('.sc-Axmtr').click()
})

Then("eu espero que o login falhe", ()=>{
    cy.get('.notice').contains('Ocorreu um erro ao fazer login, verifique suas credenciais')
})

