import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('eu realizo o login na pagina', ()=>{
    cy.visit("http://localhost:3000/")
})

When("eu informo meu email e password", ()=>{
    cy.get(':nth-child(3) > [data-testid="input-container"]').type("david1999andrade@gmail.com")
    cy.get(':nth-child(4) > [data-testid="input-container"]').type("teste1")
    cy.get('.sc-Axmtr').click()
})

Then("eu espero sucesso no login", ()=>{
    cy.get('h1').contains('Minhas Tarefas')
    cy.get('.sc-Axmtr').should('be.visible')
})