import ScoreCalculator from "../../ScoreCalculator";

class CornScoreCalculator implements ScoreCalculator {
  public readonly pointsPerRow = 10;

  public readonly pointsWhenPlayed = 5;

  public readonly pointsPerCornWithHuitlacoche = 4;

  plusPointsFromBoardAtTheEnd(): number {
    return this.pointsPerCornWithHuitlacoche;
  }

  plusPointsFromBoardAtTurn(): number {
    return this.pointsPerRow;
  }

  plusPointsWhenPlacedOnBoardAtPosition(): number {
    return this.pointsWhenPlayed;
  }
}

export default CornScoreCalculator;
