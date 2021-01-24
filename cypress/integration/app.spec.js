/// <reference types="Cypress" />

context('App', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  const selectResource = '[data-testid="selectResource"]';
  const selectResourceItem = '[data-testid="selectResourceItem"]';
  const nextRoundButton = '[data-testid="nextRoundButton"]';
  const counter = '[data-testid="counter"]';
  const gameCard = '[data-testid="gameCard"]';

  it('navigate to main page, check select values and button', () => {
    cy.get(selectResource)
      .click();
    cy.get(selectResourceItem)
      .should('have.length', 3);
    cy.get(nextRoundButton)
      .should('exist');
    cy.get(nextRoundButton)
      .should('be.disabled');
  });

  it('navigate to main page, select people resource', () => {
    cy.get(selectResource)
      .click();
    cy.get(selectResourceItem)
      .contains("people")
      .click();
    cy.get(nextRoundButton)
      .should('not.be.disabled');
    cy.get(counter)
      .should('have.length', 2);
    cy.get(gameCard)
      .should('have.length', 2);
    cy.get(`${gameCard} > div`)
      .should('have.length', 32);
  });

  it('navigate to main page, select starships resource', () => {
    cy.get(selectResource)
      .click();
    cy.get(selectResourceItem)
      .contains("starships")
      .click();
    cy.get(nextRoundButton)
      .should('not.be.disabled');
    cy.get(counter)
      .should('have.length', 2);
    cy.get(gameCard)
      .should('have.length', 2);
    cy.get(`${gameCard} > div`)
      .should('have.length', 36);
  });

  it('navigate to main page, check next round button', () => {
    cy.get(selectResource)
      .click();
    cy.get(selectResourceItem)
      .contains("starships")
      .click();
    cy.get(nextRoundButton)
      .click();
  });
});
