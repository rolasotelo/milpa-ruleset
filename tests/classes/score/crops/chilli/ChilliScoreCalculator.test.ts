import { ChilliScoreCalculator } from "../../../../../src/classes/score/crops";
import { EMPTY_EDGE, EMPTY_MILPA } from "../../../../stubs/slots";
import { ChilliCard } from "../../../../../src/classes/cards/crops";

describe("ChilliScoreCalculator Class", function () {
  describe("When card placed in empty slot", function () {
    const scoreCalculator = new ChilliScoreCalculator();
    test("then return points when played and updated boards", function () {
      const response = scoreCalculator.plusPointsWhenPlacedOnBoardAtPosition(
        [EMPTY_MILPA, EMPTY_EDGE],
        [0, 0]
      );
      expect(response.score).toEqual(scoreCalculator.pointsWhenPlayed);
      expect(response.milpaAndEdges[0][0].cards.pop()).toBeInstanceOf(
        ChilliCard
      );
    });
  });
  describe("When scoring out of harvest turn", function () {
    const scoreCalculator = new ChilliScoreCalculator();
    test("then it should return 0 points", function () {
      const response = scoreCalculator.plusPointsFromBoardAtTurn(
        [EMPTY_MILPA, EMPTY_EDGE],
        0
      );
      expect(response.score).toBe(0);
    });
  });
  describe("When scoring in one of harvest turns", function () {
    const scoreCalculator = new ChilliScoreCalculator();
    test("then it should return correct points", function () {
      const response = scoreCalculator.plusPointsFromBoardAtTurn(
        [EMPTY_MILPA, EMPTY_EDGE],
        scoreCalculator.turnsOFHarvesting[0]
      );
      expect(response.score).toBe(scoreCalculator.pointsPerLonelyChilli);
    });
  });
  describe("When scoring at the end of the game", function () {
    const scoreCalculator = new ChilliScoreCalculator();
    test("then it should return correct points", function () {
      const response = scoreCalculator.plusPointsFromBoardAtTheEnd([
        EMPTY_MILPA,
        EMPTY_EDGE,
      ]);
      expect(response.score).toBe(
        scoreCalculator.pointsPerChiliDiagonallyAdjacent
      );
    });
  });
});
