// cypress/integration/awesome-test.ts

describe("Feature", () => {
  before(() => {
    // runs once before all tests in the block
  });

  after(() => {
    // runs once after all tests in the block
  });

  beforeEach(() => {
    // runs before each test in the block
  });

  afterEach(() => {
    // runs after each test in the block
  });

  it("should check a very complex logic", () => {
    expect(true).to.be.true;
  });

  it.only("should run only this test", () => {
    // ...
  });

  it.skip("should skip this failing test", () => {
    // ...
  });
});
