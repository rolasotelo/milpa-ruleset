import ScoreCalculator from "../../ScoreCalculator";

class ChilliScoreCalculator implements ScoreCalculator {
  public readonly pointsPerLonelyChilli = 10;

  public readonly pointsWhenPlayed = 5;

  public readonly pointsPerChiliDiagonallyAdjacent = 4;

  plusPointsFromBoardAtTheEnd(): number {
    return this.pointsPerChiliDiagonallyAdjacent;
  }

  plusPointsFromBoardAtTurn(): number {
    return this.pointsPerLonelyChilli;
  }

  plusPointsWhenPlacedOnBoardAtPosition(): number {
    return this.pointsWhenPlayed;
  }
}

export default ChilliScoreCalculator;
