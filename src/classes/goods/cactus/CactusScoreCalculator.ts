import ScoreCalculator from "../../ScoreCalculator";

class CactusScoreCalculator implements ScoreCalculator {
  public readonly pointsPerLonelyCactus = 10;

  public readonly pointsWhenPlayed = 5;

  public readonly pointsPerCactusAtTheEnd = 4;

  plusPointsFromBoardAtTheEnd(): number {
    return this.pointsPerCactusAtTheEnd;
  }

  plusPointsFromBoardAtTurn(): number {
    return this.pointsPerLonelyCactus;
  }

  plusPointsWhenPlacedOnBoardAtPosition(): number {
    return this.pointsWhenPlayed;
  }
}

export default CactusScoreCalculator;
