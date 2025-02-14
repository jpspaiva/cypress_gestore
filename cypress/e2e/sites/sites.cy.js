describe('Cadastro de Site', () => {
    beforeEach(() => {
      // Faz login antes de cada teste para garantir acesso
      cy.visit('https://gestore-balancer-sustentacao.sistemas.ufrn.br/gestore-web/login');
      cy.get('.card-simple').click();
      cy.get('input[name="username"]').type('josefa.dalania');
      cy.get('input[name="password"]').type('josefa.dalania');
      cy.get('.btn-primary').click();
      cy.url({ timeout: 50000 }).should('include', '/gestore-web/admin');
    });
  
    it('Deve acessar a funcionalidade de sites e cadastrar um novo site', () => {
      // Acessa a funcionalidade de sites
      cy.get(':nth-child(2) > .submenu').click(); 
      cy.url().should('include', '/gestore-web/admin'); 
  
      // Opta por cadastrar um novo site
      cy.get('li[aria-expanded="true"] > .submenu__content > .nav > :nth-child(3) > .nav-link').click();
      cy.url().should('include', '/gestore-web/sites/custom_create'); 
  
      // Preenche o formulário de cadastro
      cy.get('#descricao').type('URL teste 1234!@$#@!');
      cy.get('#url').type('https://www.meusiteteste.com');
      cy.get('#alias').type('aliassite1teste');
      cy.get('#linkManual').type('https://www.manualsiteteste.com');
      
      cy.get('#internacionalizacao-custom').click();
      cy.get('#internacionalizacao-custom-0').first().click();
      cy.get('label[for="siteIdioma0.selecionado1"]').click();
      cy.get('label[for="siteIdioma1.selecionado1"]').click();
  
      // Submete o formulário
      cy.get('#button_form_site').click();
  
      // Verifica se o cadastro foi bem-sucedido
      cy.contains('Cadastro realizado com sucesso.').should('be.visible');
    });
  });
  