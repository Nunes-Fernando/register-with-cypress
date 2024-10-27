import register from "../support/obejects/register"

describe('Cadastro de usuários', ()=>{
    beforeEach('Acessando página inicial', ()=>{
        cy.visit('/')
        
        cy.get('.right_list_fix > :nth-child(2) > a')
            .click();
    })

    it('Registrando usuário', () =>{
        register.registerUser();
    })

    it('Email inválido', () => {
        register.ivalidEmail();
    })

    it('Senha inválida', () => {
        register.invalidPassword();
    })
})