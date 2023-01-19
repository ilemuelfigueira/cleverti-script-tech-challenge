import Normaliser from "../use-cases/normaliser";
// create some tests for normaliser
describe("Normaliser", () => {
  describe("normalise", () => {
    it("should normalise a job title", () => {
      const n = new Normaliser();
      const normalisedTitle = n.normalise("Java engineer");
      expect(normalisedTitle).toEqual("Software engineer");
    });
  });
});


// jest test command to run all tests
// jest --coverage
