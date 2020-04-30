describe("Recipe Edit / Temperature", () => {
  beforeEach(() => {
    cy.route("**/recipe/recipes/{*}", "fx:recipe/recipes/cook-and-hold.json");
    cy.route("put", "**/recipe/recipes/**", "").as("saveApi");
    cy.kcFakeLogin(
      "admin",
      "recipeLibrary/recipes/{cef64877-c8af-4b55-a665-c884198f5727}/edit"
    );
  });

  it("should edit and save hot smoking step", () => {
    cy.findByText("Stage 2").closest(stepContainerSelector).openStepEditModal();

    cy.get(modalContentClass).within(() => {
      cy.findByLabelText(smokingTemperatureFRegex).clear().type("200{enter}");
    });

    cy.get(modalContentClass)
      .should("not.be.visible")
      .get('button[type="submit"]')
      .click();

    cy.wait("@saveApi").then((xhr) => {
      const body = xhr.requestBody as any;
      expect(body.content.steps[1]).to.have.property("cavitySetpoint", 200);
      expect(body.content.steps[1]).to.have.property("probeSetpoint", -1);
    });
  });
});
