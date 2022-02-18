import { ScoreCalculator } from "../../../../interfaces";
import { Slot } from "../../../slots";

class MagueyScoreCalculator implements ScoreCalculator {
  public readonly pointsPerLonelyMaguey = 10;

  public readonly pointsWhenPlayed = 5;

  public readonly pointsPerMagueyAtTheEnd = 4;

  public readonly turnsOFHarvesting = [5, 6, 7, 8];

  plusPointsFromBoardAtTheEnd(milpaAndEdges: [Slot[], Slot[]]): {
    score: number;
    milpaAndEdges: [Slot[], Slot[]];
  } {
    return {
      score: this.pointsPerMagueyAtTheEnd,
      milpaAndEdges,
    };
  }

  plusPointsFromBoardAtTurn(
    milpaAndEdges: [Slot[], Slot[]],
    turn: number
  ): { score: number; milpaAndEdges: [Slot[], Slot[]] } {
    if (turn in this.turnsOFHarvesting) {
      return {
        score: this.pointsPerLonelyMaguey,
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

export default MagueyScoreCalculator;
