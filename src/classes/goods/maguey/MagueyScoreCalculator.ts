import ScoreCalculator from "../../ScoreCalculator";

class MagueyScoreCalculator implements ScoreCalculator {
  public readonly pointsPerLonelyMaguey = 10;

  public readonly pointsWhenPlayed = 5;

  public readonly pointsPerMagueyAtTheEnd = 4;

  plusPointsFromBoardAtTheEnd(): number {
    return this.pointsPerMagueyAtTheEnd;
  }

  plusPointsFromBoardAtTurn(): number {
    return this.pointsPerLonelyMaguey;
  }

  plusPointsWhenPlacedOnBoardAtPosition(): number {
    return this.pointsWhenPlayed;
  }
}

export default MagueyScoreCalculator;
