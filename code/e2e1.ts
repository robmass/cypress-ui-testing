describe("Feature / E2E", () => {
  beforeEach(() => {
    cy.task("cleanupDb");

    cy.kcLogout();
    cy.kcLogin("admin");

    cy.visit("page");
  });

  it("should create, edit and delete an entity", () => {
    // Create the entity
    // ...
    // Verify in the DOM that the new entity exists
    // ...
    // Edit the entity
    // ...
    // Verify in the DOM that the entity has been edited
    // ...
    // Delete the entity
    // ...
    // Verify in the DOM that the entity has been deleted
  });
});
