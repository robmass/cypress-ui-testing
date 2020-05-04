describe("Feature / E2E", () => {
  beforeEach(() => {
    cy.task("cleanupDb");

    cy.kcLogout();
    cy.kcLogin("admin").as("accessToken");

    cy.visit("page");
  });

  it("should create a new configuration", () => {
    cy.findByText(/create.*configuration/i).click();

    cy.findByLabelText(/name/i).type("TestConfiguration");

    cy.findByText(/save/i).click();

    cy.contains("datatable-row-wrapper", "TestConfiguration").should("exist");
  });

  it("should edit an existing configuration", () => {
    cy.get<string>("@accessToken").then((token) => {
      cy.request({
        method: "post",
        url: "api/dashboard/configuration",
        body: {...},
        auth: {
          bearer: token,
        },
      });
    });

    cy.get("datatable-row-wrapper").contains("TestConfiguration").click();

    cy.findByLabelText(/name/i).clear().type("RenamedConfiguration");

    cy.findByText(/save/i).click();

    cy.get("datatable-row-wrapper").contains("RenamedConfiguration").should("exist");
  });
});
