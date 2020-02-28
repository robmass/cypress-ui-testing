describe("Post Resource", () => {
  it("Creating a New Post", () => {
    cy.visit("/posts/new");

    cy.get("input.post-title")
      .clear()
      .type("My First Post");

    cy.get("input.post-body")
      .clear()
      .type("Hello, world!");

    cy.contains("Submit").click();

    cy.url().should("include", "/posts/my-first-post");

    cy.get("h1").should("contain", "My First Post");
  });
});
