import acess from "../support/obejects/acess";

describe('Logando na aplicação', () =>{
    beforeEach('Acessando página inicial', ()=>{
        cy.visit('/')
        
        cy.get('.right_list_fix > :nth-child(1) > a')
            .click()
    })

    it('Direcionando para área logada', () =>{
        acess.login();
    })

})