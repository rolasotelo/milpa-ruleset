import CornScoreCalculator from "../../../../src/classes/crops/corn/CornScoreCalculator";

describe("CornScoreCalculator Class", function () {
  describe("When object is created", function () {
    const scoreCalculator = new CornScoreCalculator();

    test("then scoring methods should return correct values", function () {
      expect(
        scoreCalculator.plusPointsWhenPlacedOnBoardAtPosition()
      ).toBeGreaterThan(0);
      expect(scoreCalculator.plusPointsFromBoardAtTurn()).toBeGreaterThan(0);
      expect(scoreCalculator.plusPointsFromBoardAtTheEnd()).toBeGreaterThan(0);
    });
  });
});
