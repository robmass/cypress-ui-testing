import "@testing-library/cypress/add-commands";

Cypress.Commands.add("acceptCrushDialog", (selector: string, findText: string): void => {
  cy.get(selector).within(() => {
    cy.findByText(new RegExp(findText, "i")).click();
  });
});

Cypress.Commands.add("acceptCrushBanner", (selector: string, contains: string): void => {
  cy.get(selector).within(() => {
    cy.get("button").contains(new RegExp(contains, "i")).click();
  });
});
