// method, path, response
cy.intercept("POST", "/api", (req) => {
  switch (req.body.operationName) {
    case "IsEmailAvailable":
      {
        req.alias = "gqlIsEmailAvailableQuery";
        req.reply({ fixture: "isEmailAvailable.json" });
      }
      break;
    case "TokenAuth":
      {
        req.alias = "gqlTokenAuthMutation";
        req.reply({ fixture: "tokenAuth.json" });
      }
      break;
    default:
      req.reply();
  }
});
