Cypress.Commands.add('gui_preencheFormulario', usuario => {
  cy.get('input[type="text"]')
    .should('be.visible')
    .type(usuario.login, { delay: 0 })

  cy.get('input[type=password]')
    .should('be.visible')
    .type(usuario.senha, { log: false, delay: 0 })
    
    cy.gui_clicaLogin()
})

Cypress.Commands.add('gui_clicaLogin', () => {
  cy.get('button[type="submit"]')
    .should('be.visible')
    .click()
})

Cypress.Commands.add('gui_clicaCalendario', () => {
  cy.get('.datetimepicker-dummy-input')
    .should('be.visible')
    .click()
})

Cypress.Commands.add('gui_clicaVoltar', () => {
  cy.contains('Voltar')
    .should('be.visible')  
    .click()
})
