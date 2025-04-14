describe('Cadastro de Tipo de Site', () => {
    before(() => {
        // Faz login apenas uma vez antes de todos os testes
        cy.visit('https://gestore-balancer-sustentacao.sistemas.ufrn.br/gestore-web/login', { timeout: 40000 });
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

    //Scenario 1: Cadastro com todos os campos obrigatórios preenchidos
    it('Cadastro com todos os campos obrigatórios preenchidos', () => {
        // Acessando a funcionalidade de cadastro de Tipo de Site
        cy.get('.menu-lateral__item > :nth-child(3) > .submenu', { timeout: 5000 }).click(); 
        cy.get('li[aria-expanded="true"] > .submenu__content > .nav > :nth-child(3) > .nav-link', { timeout: 5000 }).click();

        // Preenchendo os campos obrigatórios o formulário de cadastro
        cy.get('#titulo', { timeout: 5000 }).type('Descrição Obrigatória Teste');
        cy.get('#url', { timeout: 5000 }).type('https://www.obrigatorio-teste.com');
        cy.get('#tipo_unidade-custom-1', { timeout: 5000 }).first().click({force: true});
        cy.get('#arquivoAnexado', { timeout: 5000 }).selectFile('img_teste.png',{force: true});

        cy.get('#button_form_tipo_site', { timeout: 5000 }).click();
        
        cy.contains('Cadastro realizado com sucesso.', { timeout: 5000 }).should('be.visible');
    });

    //Scenario 2 : Cadastro com todos os campos preenchidos, incluindo opcionais
    it('Cadastro com todos os campos preenchidos, incluindo opcionais', () => {
        // Acessando a funcionalidade de cadastro de Tipo de Site
        cy.get('.menu-lateral__item > :nth-child(3) > .submenu', { timeout: 5000 }).click(); 
        cy.get('li[aria-expanded="true"] > .submenu__content > .nav > :nth-child(3) > .nav-link', { timeout: 5000 }).click();
        
        cy.get('#titulo', { timeout: 5000 }).type('Descrição Obrigatória Teste');
        cy.get('#url', { timeout: 5000 }).type('https://www.obrigatorio-teste.com');
        cy.get('#linkManual', { timeout: 5000 }).type('https://www.linkManual-teste-obrigatorio.com');
        cy.get('#internacionalizacao-custom-0', { timeout: 5000 }).first().click({force: true});
        cy.get('#tipo_unidade-custom-1', { timeout: 5000 }).first().click({force: true});
        cy.get('#possuiGestores-custom-1', { timeout: 5000 }).first().click({force: true});
        cy.get('#selecionaTodos').check({force: true});
        cy.get('#arquivoAnexado', { timeout: 5000 }).selectFile('img_teste.png',{force: true});
        
        cy.get('#button_form_tipo_site', { timeout: 5000 }).click();
        
        cy.contains('Cadastro realizado com sucesso.', { timeout: 5000 }).should('be.visible');
    });

    //Scenario 4: Cadastro de tipo de site com gestores, unidade responsável
    it('Cadastro com gestores, unidade responsável', () => {
        // Acessando a funcionalidade de cadastro de Tipo de Site
        cy.get('.menu-lateral__item > :nth-child(3) > .submenu', { timeout: 5000 }).click(); 
        cy.get('li[aria-expanded="true"] > .submenu__content > .nav > :nth-child(3) > .nav-link', { timeout: 5000 }).click();
        
        cy.get('#titulo', { timeout: 5000 }).type('Descrição Obrigatória Teste');
        cy.get('#url', { timeout: 5000 }).type('https://www.obrigatorio-teste.com');
        cy.get('#linkManual', { timeout: 5000 }).type('https://www.linkManual-teste-obrigatorio.com');
        cy.get('#internacionalizacao-custom-0', { timeout: 5000 }).first().click({force: true});
        cy.get('#tipo_unidade-custom-1', { timeout: 5000 }).first().click({force: true});
        cy.get('#possuiGestores-custom-0', { timeout: 5000 }).first().click({force: true});
        cy.get('#autocomplete_tiposite-unidade').type('PRÓ-REITORIA DE GRADUAÇÃO');
        cy.get('#selecionaTodos').check({force: true});
        cy.get('#arquivoAnexado', { timeout: 5000 }).selectFile('img_teste.png',{force: true});
        
        cy.get('#button_form_tipo_site', { timeout: 5000 }).click();
        
        cy.contains('Cadastro realizado com sucesso.', { timeout: 5000 }).should('be.visible');
    });

    //Scenario 5: Cadastro de tipo de site com gestores, unidade responsável
    it('Cadastro com gestores, gestor e vice-gestor responsáveis', () => {
        // Acessando a funcionalidade de cadastro de Tipo de Site
        cy.get('.menu-lateral__item > :nth-child(3) > .submenu', { timeout: 5000 }).click(); 
        cy.get('li[aria-expanded="true"] > .submenu__content > .nav > :nth-child(3) > .nav-link', { timeout: 5000 }).click();
        
        cy.get('#titulo', { timeout: 5000 }).type('Descrição Obrigatória Teste');
        cy.get('#url', { timeout: 5000 }).type('https://www.obrigatorio-teste.com');
        cy.get('#linkManual', { timeout: 5000 }).type('https://www.linkManual-teste-obrigatorio.com');
        cy.get('#internacionalizacao-custom-0', { timeout: 5000 }).first().click({force: true});
        cy.get('#tipo_unidade-custom-1', { timeout: 5000 }).first().click({force: true});
        cy.get('#possuiGestores-custom-0', { timeout: 5000 }).first().click({force: true});
        cy.get('#login_gestor').type('josefa.dalania');
        cy.get('#login_vice_gestor').type('joao.paiva.119');
        cy.get('#selecionaTodos').check({force: true});
        cy.get('#arquivoAnexado', { timeout: 5000 }).selectFile('img_teste.png',{force: true});
        
        cy.get('#button_form_tipo_site', { timeout: 5000 }).click();
        
        cy.contains('Cadastro realizado com sucesso.', { timeout: 5000 }).should('be.visible');
    });

    //Scenario 6: Cadastro com campos obrigatórios vazios
    it('Cadastro com campos obrigatórios vazios', () => {
        // Acessando a funcionalidade de cadastro de Tipo de Site
        cy.get('.menu-lateral__item > :nth-child(3) > .submenu', { timeout: 5000 }).click(); 
        cy.get('li[aria-expanded="true"] > .submenu__content > .nav > :nth-child(3) > .nav-link', { timeout: 5000 }).click();
        
        cy.get('#linkManual', { timeout: 5000 }).type('https://www.linkManual-teste-obrigatorio.com');
        cy.get('#internacionalizacao-custom-0', { timeout: 5000 }).first().click({force: true});
        cy.get('#possuiGestores-custom-0', { timeout: 5000 }).first().click({force: true});
        cy.get('#login_gestor').type('josefa.dalania');
        cy.get('#login_vice_gestor').type('joao.paiva.119');
        cy.get('#selecionaTodos').check({force: true});
        
        cy.get('#button_form_tipo_site', { timeout: 5000 }).click();
        
        cy.contains('O título é obrigatório', { timeout: 5000 }).should('be.visible');
        cy.contains('A URL é obrigatória', { timeout: 5000 }).should('be.visible');
        cy.contains('É necessário selecionar um tipo de unidade', { timeout: 5000 }).should('be.visible');
        cy.contains('O campo de imagem é obrigatório', { timeout: 5000 }).should('be.visible');
    });

});