import { faker } from '@faker-js/faker';

const createdName = faker.internet.username();
const createdEmail = faker.internet.email();
const createdPassword = faker.internet.password();
const ivalidEmail = 'teste.com';
const invalidPassword = 123;

export default{
    registerUser(){
        cy.get('#user')
            .type(createdName);
        
        cy.screenshot('preenchendo campo de nome');
    
        cy.get('#email')
            .type(createdEmail);
        
        cy.screenshot('preenchendo campo de email');
        
        cy.get('#password')
            .type(createdPassword);
        
        cy.screenshot('preenchendo campo de senha');
        
        cy.get('#btnRegister')
            .click();
        
        cy.get('.swal2-popup') 
            .as('Registro com sucesso');

        cy.get('@Registro com sucesso')
            .should('be.visible');
    
        cy.screenshot('registro-com-sucesso');
    },

    ivalidEmail(){
        cy.get('#user')
            .type(createdName);
        
        cy.screenshot();
    
        cy.get('#email')
            .type(ivalidEmail);
        
        cy.screenshot();
        
        cy.get('#password')
            .type(createdPassword);
        
        cy.screenshot();
        
        cy.get('#btnRegister')
            .click();
        
        cy.get('.errorLabel')
            .should('be.visible')
       
        cy.screenshot();
    },

    invalidPassword(){
        cy.get('#user')
            .type(createdName);
        
        cy.screenshot();
    
        cy.get('#email')
            .type(createdEmail);
        
        cy.screenshot();
        
        cy.get('#password')
            .type(invalidPassword);
        
        cy.screenshot();
        
        cy.get('#btnRegister')
            .click();
        
        cy.get('.errorLabel')
            .should('be.visible')

        cy.screenshot();
       
    }
}

