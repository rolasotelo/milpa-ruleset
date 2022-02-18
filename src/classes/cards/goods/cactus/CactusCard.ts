import Card from "../../Card";
import { CardType, Good } from "../../../../common";

class CactusCard extends Card {
  constructor() {
    super(
      Good.CACTUS,
      "Cactus",
      "Be careful it is spiky",
      "WIP",
      "WIP",
      "🌵",
      CardType.GOOD
    );
  }
}

export default CactusCard;
