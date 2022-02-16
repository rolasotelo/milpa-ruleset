interface ScoreCalculator {
  plusPointsWhenPlacedOnBoardAtPosition(): number;
  plusPointsFromBoardAtTurn(): number;
  plusPointsFromBoardAtTheEnd(): number;
}

export default ScoreCalculator;
