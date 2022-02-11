// https://docs.cypress.io/api/introduction/api.html

describe('Pruebas EndToEnd con Cypress', () => {

  const title_home = 'Lista de Juegos Disponibles';
  const title_opinion = 'Lista de Opiniones';
  const title_administration = 'Administrando la Lista de Opiniones';

  it('Visitar Home', () => {
    cy.visit('/')
    cy.contains('h1', title_home)
    cy.get('.row > .col-4:nth-child(1) > .card > .card-body > .btn')
      .click();
    cy.get('.modal-wrapper > .modal-dialog > .modal-content > .modal-footer > .btn-secondary')
      .click();
  });

  it('Visitar Opiniones', () => {
    cy.get('.navbar > .container > #navbarNavAltMarkup > .navbar-nav > .nav-link:nth-child(2)')
      .click()
    cy.contains('h1', title_opinion);
  });

  it('Visitar Administracion', () => {
    cy.get('.navbar > .container > #navbarNavAltMarkup > .navbar-nav > .nav-link:nth-child(3)')
      .click();
    cy.contains('h1', title_administration)
  });
})
