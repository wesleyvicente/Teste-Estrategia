import { faker } from '@faker-js/faker'

describe('Testa Formulário de Login do Usuário Orkut QA-Ninja', () => {
  beforeEach(() => {
    cy.visit('/login')
  })

  it('Valida mensagem de erro ao realizar Login sem Nickname', () => {
    const senha = Cypress.env('usuario_senha')

    cy.get('input[type=password]')
      .should('be.visible')
      .type(senha, { log: false, delay: 0 })

    cy.gui_clicaLogin()

    cy.contains('Ops! Informe seu nickname.')
      .should('be.visible')
  })

  it('Valida mensagem de erro ao realizar Login sem Senha', () => {
    const usuarioLogin = Cypress.env('usuario_login')

    cy.get('input[type="text"]')
      .should('be.visible')
      .type(usuarioLogin, { delay: 0 })

    cy.gui_clicaLogin()

    cy.contains('Ops! Informe sua senha secreta.')
      .should('be.visible')
  })

  it('Valida Login com Sucesso', () => {
    const usuario = {
      login: Cypress.env('usuario_login'),
      senha: Cypress.env('usuario_senha')
    }

    cy.gui_preencheFormulario(usuario)

    cy.contains('Olá Papito, bem-vindo ao Orkut')
      .should('be.visible')

    cy.get('.is-danger')
      .should('be.visible')

    cy.verificaUrl('secure')
  })

  it('Valida mensagem de erro ao realizar Login com Nickname incorreto', () => {
    const usuarioNicknameIncorreto = {
      login: faker.random.word().toLowerCase(),
      senha: Cypress.env('usuario_senha')
    }

    cy.gui_preencheFormulario(usuarioNicknameIncorreto)

    cy.contains('Oops! nickname e/ou senha incorretos :(')
      .should('be.visible')

    cy.verificaUrl('login')
  })

  it('Valida mensagem de erro ao realizar Login com Senha incorreta', () => {
    const usuarioSenhaIncorreta = {
      login: Cypress.env('usuario_login'),
      senha: faker.random.word(),
    }

    cy.gui_preencheFormulario(usuarioSenhaIncorreta)

    cy.contains('Oops! nickname e/ou senha incorretos :(')
      .should('be.visible')

    cy.verificaUrl('login')
  })

  it('Valida mensagem de erro ao realizar Login com Nickname e Senha incorretos', () => {
    const usuarioNicknameESenhaIncorretos = {
      login: faker.random.word().toLowerCase(),
      senha: faker.random.word(),
    }

    cy.gui_preencheFormulario(usuarioNicknameESenhaIncorretos)

    cy.contains('Oops! nickname e/ou senha incorretos :(')
      .should('be.visible')

    cy.verificaUrl('login')
  })

  it('Valida mensagem de erro ao tentar acessar área de usuário logado sem ter realizado Login', () => {

    cy.visit('/secure')

    cy.contains('Você deve fazer o login para ver a área logada!')
      .should('be.visible')

    cy.verificaUrl('login')
  })

  it('Extra 1: Volta para a página inicial QA-Ninja', () => {

    cy.gui_clicaVoltar()

    cy.contains('Formulário de login')
      .should('be.visible')

    cy.contains('Checkboxes')
      .should('be.visible')

    cy.contains('Radio Buttons')
      .should('be.visible')

    cy.verificaUrl()
  })

  it('Extra 2: Volta para a página inicial e entra na página de Date Picker', () => {

    cy.gui_clicaVoltar()

    cy.contains('Date Picker')
      .should('be.visible')
      .click()

    cy.get('.subtitle')
      .should('be.visible')
      .and('have.text', 'Um componente customizado para manipulação de datas com seleção do mês, dia e ano :)')

    cy.verificaUrl('datepicker')
  })

})