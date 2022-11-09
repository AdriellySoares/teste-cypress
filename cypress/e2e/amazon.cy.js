describe('adicionando item no carrinho', () => {
    it('passo a passo', () => {
    cy.visit('https://amazon.com')

    cy.wait(2);

    cy.contains('Cart')
    
    cy.get('[name="adicionando ao cart"]').click();

    cy.on('uncaught:exceptio', () => false);

    cy.get('.p13n-sc-uncoverable-faceout').click({multiple: true})

    // cy.get('#email').type('chiquinho@email.com');
    })

});