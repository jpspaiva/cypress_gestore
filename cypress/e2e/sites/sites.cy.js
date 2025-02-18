describe('Cadastro de Site', () => {
  before(() => {
      // Faz login apenas uma vez antes de todos os testes
      cy.visit('https://gestore-balancer-sustentacao.sistemas.ufrn.br/gestore-web/login', { timeout: 20000 });
      cy.get('.card-simple', { timeout: 5000 }).click();
      cy.get('input[name="username"]', { timeout: 5000 }).type('josefa.dalania');
      cy.get('input[name="password"]', { timeout: 5000 }).type('josefa.dalania');
      cy.get('.btn-primary', { timeout: 5000 }).click();
      cy.visit('https://gestore-balancer-sustentacao.sistemas.ufrn.br/gestore-web/', { timeout: 10000 });
  });

  beforeEach(() => {
      // Garante que cada teste comece na página inicial
      cy.visit('https://gestore-balancer-sustentacao.sistemas.ufrn.br/gestore-web/', { timeout: 10000 });
  });

  it('Cadastro com todos os campos obrigatórios preenchidos', () => {
      cy.get(':nth-child(2) > .submenu', { timeout: 5000 }).click(); 
      cy.get('li[aria-expanded="true"] > .submenu__content > .nav > :nth-child(3) > .nav-link', { timeout: 5000 }).click();
      
      cy.get('#descricao', { timeout: 5000 }).type('Descrição Obrigatória Teste');
      cy.get('#url', { timeout: 5000 }).type('https://www.obrigatorio-teste.com');
      cy.get('#alias', { timeout: 5000 }).type('alias_existente');
      cy.get('#button_form_site', { timeout: 5000 }).click();
      
      cy.contains('Cadastro realizado com sucesso.', { timeout: 5000 }).should('be.visible');
  });

  it('Cadastro com todos os campos preenchidos, incluindo opcionais', () => {
      cy.get(':nth-child(2) > .submenu', { timeout: 5000 }).click(); 
      cy.get('li[aria-expanded="true"] > .submenu__content > .nav > :nth-child(3) > .nav-link', { timeout: 5000 }).click();
      
      cy.get('#descricao', { timeout: 5000 }).type('Descrição Completa Teste 2');
      cy.get('#url', { timeout: 5000 }).type('https://www.completo-teste.com');
      cy.get('#alias', { timeout: 5000 }).type('alias_completo_teste');
      cy.get('#linkManual', { timeout: 5000 }).type('https://www.manual-completo-teste.com');
      cy.get('#internacionalizacao-custom', { timeout: 5000 }).click();
      cy.get('#internacionalizacao-custom-0', { timeout: 5000 }).first().click();
      cy.get('label[for="siteIdioma0.selecionado1"]', { timeout: 5000 }).click();
      cy.get('label[for="siteIdioma1.selecionado1"]', { timeout: 5000 }).click();
      
      cy.get('#button_form_site', { timeout: 5000 }).click();
      
      cy.contains('Cadastro realizado com sucesso.', { timeout: 5000 }).should('be.visible');
  });

  it('Cadastro com campos obrigatórios vazios', () => {
      cy.get(':nth-child(2) > .submenu', { timeout: 5000 }).click(); 
      cy.get('li[aria-expanded="true"] > .submenu__content > .nav > :nth-child(3) > .nav-link', { timeout: 5000 }).click();
      
      cy.get('#button_form_site', { timeout: 5000 }).click();
      
      cy.contains('O campo descrição não pode ser vazio', { timeout: 5000 }).should('be.visible');
      cy.contains('A URL é obrigatória', { timeout: 5000 }).should('be.visible');
      cy.contains('O campo Alias não pode ser vazio', { timeout: 5000 }).should('be.visible');
  });

  it('Cadastro com URL inválida', () => {
      cy.get(':nth-child(2) > .submenu', { timeout: 5000 }).click(); 
      cy.get('li[aria-expanded="true"] > .submenu__content > .nav > :nth-child(3) > .nav-link', { timeout: 5000 }).click();
      
      cy.get('#descricao', { timeout: 5000 }).type('Descrição Inválida Teste');
      cy.get('#url', { timeout: 5000 }).type('url-invalida.com');
      cy.get('#alias', { timeout: 5000 }).type('alias_url_invalida_teste');
      cy.get('#button_form_site', { timeout: 5000 }).click();
      
      cy.contains('Informe uma URL válida', { timeout: 5000 }).should('be.visible');
  });

  it('Cadastro com Alias inválido', () => {
      cy.get(':nth-child(2) > .submenu', { timeout: 5000 }).click(); 
      cy.get('li[aria-expanded="true"] > .submenu__content > .nav > :nth-child(3) > .nav-link', { timeout: 5000 }).click();
      
      cy.get('#descricao', { timeout: 5000 }).type('Descrição Alias Inválido');
      cy.get('#url', { timeout: 5000 }).type('https://www.alias-invalido.com');
      cy.get('#alias', { timeout: 5000 }).type('Alias@Inválido!');
      cy.get('#button_form_site', { timeout: 5000 }).click();
      
      cy.contains('O Alias informado possui caracteres inválidos', { timeout: 5000 }).should('be.visible');
  });

  it('Cadastro com Alias já existente', () => {
      cy.get(':nth-child(2) > .submenu', { timeout: 5000 }).click(); 
      cy.get('li[aria-expanded="true"] > .submenu__content > .nav > :nth-child(3) > .nav-link', { timeout: 5000 }).click();
      
      cy.get('#descricao', { timeout: 5000 }).type('Descrição Alias Existente');
      cy.get('#url', { timeout: 5000 }).type('https://www.alias-existente.com');
      cy.get('#alias', { timeout: 5000 }).type('alias_existente');
      cy.get('#button_form_site', { timeout: 5000 }).click();
      
      cy.contains('O alias informado já existe.', { timeout: 5000 }).should('be.visible');
  });
});