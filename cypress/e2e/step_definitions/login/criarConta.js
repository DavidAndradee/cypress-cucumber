import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('eu acesso a pagina de cadastro', ()=>{
    cy.visit("http://localhost:3000/")
    cy.get('a').contains('Criar conta').click()
})

When('eu informo os dados {string},{string},{string}',(nome,email,senha)=>{
    cy.get('.sc-AxiKw gQNeMt').type(nome)
    cy.get('.sc-AxiKw gQNeMt').type(email)
    cy.get('.sc-AxiKw gQNeMt').type(senha)
})

Then('sistema deve cadastrar o usuario',()=>{
    cy.get(".sc-Axmtr hvJMgY").click()
})