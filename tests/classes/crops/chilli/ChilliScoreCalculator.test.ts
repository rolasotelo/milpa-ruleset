import ChilliScoreCalculator from "../../../../src/classes/crops/chilli/ChilliScoreCalculator";

describe("ChilliScoreCalculator Class", function () {
  describe("When object is created", function () {
    const scoreCalculator = new ChilliScoreCalculator();

    test("then scoring methods should return correct values", function () {
      expect(
        scoreCalculator.plusPointsWhenPlacedOnBoardAtPosition()
      ).toBeGreaterThan(0);
      expect(scoreCalculator.plusPointsFromBoardAtTurn()).toBeGreaterThan(0);
      expect(scoreCalculator.plusPointsFromBoardAtTheEnd()).toBeGreaterThan(0);
    });
  });
});