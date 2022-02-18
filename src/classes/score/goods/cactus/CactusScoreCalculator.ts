import { ScoreCalculator } from "../../../../interfaces";
import { Slot } from "../../../slots";

class CactusScoreCalculator implements ScoreCalculator {
  public readonly pointsPerLonelyCactus = 10;

  public readonly pointsWhenPlayed = 5;

  public readonly pointsPerCactusAtTheEnd = 4;

  public readonly turnsOFHarvesting = [5, 6, 7, 8];

  plusPointsFromBoardAtTheEnd(milpaAndEdges: [Slot[], Slot[]]): {
    score: number;
    milpaAndEdges: [Slot[], Slot[]];
  } {
    return {
      score: this.pointsPerCactusAtTheEnd,
      milpaAndEdges,
    };
  }

  plusPointsFromBoardAtTurn(
    milpaAndEdges: [Slot[], Slot[]],
    turn: number
  ): { score: number; milpaAndEdges: [Slot[], Slot[]] } {
    if (turn in this.turnsOFHarvesting) {
      return {
        score: this.pointsPerLonelyCactus,
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

export default CactusScoreCalculator;
