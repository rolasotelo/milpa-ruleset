import MagueyScoreCalculator from "../../../../src/classes/goods/maguey/MagueyScoreCalculator";

describe("MagueyScoreCalculator Class", function () {
  describe("When object is created", function () {
    const scoreCalculator = new MagueyScoreCalculator();

    test("then scoring methods should return correct values", function () {
      expect(
        scoreCalculator.plusPointsWhenPlacedOnBoardAtPosition()
      ).toBeGreaterThan(0);
      expect(scoreCalculator.plusPointsFromBoardAtTurn()).toBeGreaterThan(0);
      expect(scoreCalculator.plusPointsFromBoardAtTheEnd()).toBeGreaterThan(0);
    });
  });
});
