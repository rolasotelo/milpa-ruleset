import Card from "../../Card";
import { CardType, Good } from "../../../common";
import MagueyScoreCalculator from "./MagueyScoreCalculator";

class MagueyCard extends Card {
  constructor() {
    super(
      Good.MAGUEY,
      "Maguey",
      "Good for almost everything",
      "WIP",
      "WIP",
      "🦚",
      CardType.GOOD,
      new MagueyScoreCalculator()
    );
  }
}

export default MagueyCard;
