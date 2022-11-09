describe('teste do login', () => {
    it('passo a passo', () => {
      cy.visit('https://facebook.com')
  
      cy.wait(2);
  
      cy.contains('O Facebook ajuda');
      
      cy.get('[name="login"]').click();
  
      cy.get('#email').type('chiquinho@email.com');
    })
  });