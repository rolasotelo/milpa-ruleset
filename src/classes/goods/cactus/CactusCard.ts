import Card from "../../Card";
import { CardType, Good } from "../../../common";
import CactusScoreCalculator from "./CactusScoreCalculator";

class CactusCard extends Card {
  constructor() {
    super(
      Good.CACTUS,
      "Cactus",
      "Be careful it is spiky",
      "WIP",
      "WIP",
      "🌵",
      CardType.GOOD,
      new CactusScoreCalculator()
    );
  }
}

export default CactusCard;
