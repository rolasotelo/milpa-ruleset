import { ScoreCalculator } from "../../../../interfaces";
import { Slot } from "../../../slots";
import { ChilliCard } from "../../../cards/crops";

class ChilliScoreCalculator implements ScoreCalculator {
  public readonly pointsPerLonelyChilli = 10;

  public readonly pointsWhenPlayed = 5;

  public readonly pointsPerChiliDiagonallyAdjacent = 4;

  public readonly turnsOFHarvesting = [5, 6, 7, 8];

  plusPointsFromBoardAtTheEnd(milpaAndEdges: [Slot[], Slot[]]): {
    score: number;
    milpaAndEdges: [Slot[], Slot[]];
  } {
    return {
      score: this.pointsPerChiliDiagonallyAdjacent,
      milpaAndEdges,
    };
  }

  plusPointsFromBoardAtTurn(
    milpaAndEdges: [Slot[], Slot[]],
    turn: number
  ): { score: number; milpaAndEdges: [Slot[], Slot[]] } {
    if (this.turnsOFHarvesting.indexOf(turn) >= 0) {
      return {
        score: this.pointsPerLonelyChilli,
        milpaAndEdges,
      };
    }
    return {
      score: 0,
      milpaAndEdges,
    };
  }

  plusPointsWhenPlacedOnBoardAtPosition(
    milpaAndEdges: [Slot[], Slot[]],
    position: [number, number]
  ): { score: number; milpaAndEdges: [Slot[], Slot[]] } {
    if (milpaAndEdges[position[0]][position[1]].cards.length < 2) {
      const card = new ChilliCard();
      // eslint-disable-next-line no-param-reassign
      milpaAndEdges[position[0]][position[1]].cards = [card];
      return {
        score: this.pointsWhenPlayed,
        milpaAndEdges,
      };
    }
    return {
      score: 0,
      milpaAndEdges,
    };
  }
}

export default ChilliScoreCalculator;
