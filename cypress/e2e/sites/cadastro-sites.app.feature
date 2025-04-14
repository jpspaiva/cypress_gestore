Feature: Create Web Site
    Como usuário do sistema
    Quero cadastrar um site com informações válidas
    Para que ele seja registrado corretamente no sistema

    @CadastroSite
    Scenario 1: Cadastro com todos os campos obrigatórios preenchidos
        Given estou na página de cadastro de site
        When preencho os campos obrigatórios:
        And clico no botão "Cadastrar"
        Then o sistema deve exibir a mensagem "Cadastro realizado com sucesso."

    @CadastroSite
    Scenario 2: Cadastro com todos os campos preenchidos, incluindo opcionais
        Given estou na página de cadastro de site
        When preencho todos os campos
        And clico no botão "Cadastrar"
        Then o sistema deve exibir a mensagem "Cadastro realizado com sucesso."

    @CadastroSite
    Scenario 3: Cadastro com campos obrigatórios vazios
        Given estou na página de cadastro de site
        When deixo os campos obrigatórios vazios
        And clico no botão "Cadastrar"
        Then o sistema deve exibir as mensagens "O campo descrição não pode ser vazio", "A URL é obrigatória" e "O campo Alias não pode ser vazio"

    @CadastroSite
    Scenario 4: Cadastro com URL inválida 
        Given estou na página de cadastro de site
        And preencho o campo "URL" com uma URL inválida
        When preencho os demais campos obrigatórios
        And clico no botão "Cadastrar"
        Then o sistema deve exibir a mensagem "Informe uma URL válida"

    @CadastroSite
    Scenario 5: Cadastro com Alias inválido
        Given estou na página de cadastro de site
        And preencho o campo "Alias" com um Alias inválido
        When preencho os demais campos obrigatórios
        And clico no botão "Cadastrar"
        Then o sistema deve exibir a mensagem "O campo Alias aceita apenas letras minúsculas, números, hífen e underline."

    @CadastroSite
    Scenario 6: Cadastro com Alias já existente OK
        Given existe um site cadastrado com o alias "meusite"
        And estou na página de cadastro de site
        And preenchi o campo "Alias" com um Alias já cadastrado em outro site
        When preencho os demais campos obrigatórios
        And clico no botão "Cadastrar"
        Then o sistema deve exibir a mensagem "O campo Alias deve ser único"

    @CadastroSite
    Scenario 7: Cadastro com Internacionalização desmarcada OK
        Given estou na página de cadastro de site
        When preencho os campos obrigatórios
        And seleciono a opção "Não" para Internacionalização
        And clico no botão "Cadastrar"
        Then o sistema deve exibir a mensagem "Cadastro realizado com sucesso."

    @CadastroSite
    Scenario 8: Cadastro com Site pai não selecionado OK
        Given estou na página de cadastro de site
        When preencho os campos obrigatórios:
        And deixo o campo "Site pai" vazio
        And clico no botão "Cadastrar"
        Then o sistema deve exibir a mensagem "Cadastro realizado com sucesso."