describe('Login', () => {
  beforeEach(() => {
    cy.visit('https://gestore-balancer-sustentacao.sistemas.ufrn.br/gestore-web/login');
  });

  it('Deve acessar a página de login', () => {
    cy.url().should('include', '/gestore-web/login');
  });

  it('Deve fazer login no sistema', () => {
    cy.get('.card-simple', { timeout: 10000 }).should('be.visible').click();
    cy.get('input[name="username"]', { timeout: 10000 }).should('be.visible').type('josefa.dalania');
    cy.get('input[name="password"]', { timeout: 10000 }).should('be.visible').type('josefa.dalania');
    cy.get('.btn-primary', { timeout: 10000 }).should('be.visible').click();
    cy.visit('https://gestore-balancer-sustentacao.sistemas.ufrn.br/gestore-web/');
  }); 
});

