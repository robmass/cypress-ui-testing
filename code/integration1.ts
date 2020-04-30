describe("Recipe Create / Vector", () => {
  it("vector should not have preheat step", () => {
    cy.server();
    cy.route("**/recipe/recipes/{*}", "fx:recipe/vector/empty-recipe.json");
    cy.kcFakeLogin(
      "admin",
      "recipeLibrary/recipes/{dbbdc937-3f19-44db-b962-90a10222b076}/create"
    );

    cy.findByText(/add instruction/i, { selector: "button" }).click();

    cy.findByText(/preheat/).should("not.exist");
  });
});
