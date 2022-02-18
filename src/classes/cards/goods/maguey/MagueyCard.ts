import Card from "../../Card";
import { CardType, Good } from "../../../../common";

class MagueyCard extends Card {
  constructor() {
    super(
      Good.MAGUEY,
      "Maguey",
      "Good for almost everything",
      "WIP",
      "WIP",
      "🦚",
      CardType.GOOD
    );
  }
}

export default MagueyCard;
