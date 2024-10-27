import { faker } from '@faker-js/faker';

const fillEmail = faker.internet.email();
const fillPassword = faker.internet.password();

export default{
     login(){
    
        cy.get('#user')
            .type(fillEmail);
            
        cy.screenshot('preenchendo campo de nome');
        
        cy.get('#password')
            .type(fillPassword);
        
        cy.screenshot('preenchendo campo de senha');
        
        cy.get('#btnLogin')
            .click();

        cy.get('.swal2-popup')
            .as('Login com sucesso')
        
        cy.get('@Login com sucesso')
            .should('be.visible');

        cy.screenshot('login com sucesso');
    }
}