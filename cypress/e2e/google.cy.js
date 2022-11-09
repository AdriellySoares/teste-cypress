describe('Testando a busca do google', () => {
  it('passo a passo', () => {
    cy.visit('https://google.com')

    cy.wait(2);

    cy.contains('Pesquisa Google');

    cy.get('[name="q"]').click();

    cy.get('[name="q"]').type('Digital College {enter}');
  })
})