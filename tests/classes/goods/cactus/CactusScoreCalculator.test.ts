import CactusScoreCalculator from "../../../../src/classes/goods/cactus/CactusScoreCalculator";

describe("CactusScoreCalculator Class", function () {
  describe("When object is created", function () {
    const scoreCalculator = new CactusScoreCalculator();

    test("then scoring methods should return correct values", function () {
      expect(
        scoreCalculator.plusPointsWhenPlacedOnBoardAtPosition()
      ).toBeGreaterThan(0);
      expect(scoreCalculator.plusPointsFromBoardAtTurn()).toBeGreaterThan(0);
      expect(scoreCalculator.plusPointsFromBoardAtTheEnd()).toBeGreaterThan(0);
    });
  });
});
