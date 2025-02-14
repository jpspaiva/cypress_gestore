describe('Login', () => {
  it('passes', () => {
    cy.visit('https://gestore-balancer-sustentacao.sistemas.ufrn.br/gestore-web/login')
  })

  it('Deve fazer login no sistema', () => {
      cy.get('.card-simple').click();
      cy.get('input[name="username"]').type('josefa.dalania');
      cy.get('input[name="password"]').type('josefa.dalania');
      cy.get('.btn-primary').click();
        // Espera e verifica um trecho genérico da URL
      cy.url({ timeout: 50000 }).should('include', 'https://gestore-balancer-sustentacao.sistemas.ufrn.br/gestore-web/admin?continue');
  }); 
});
