import Card from "../../Card";
import { CardType, Crop } from "../../../common";
import ChilliScoreCalculator from "./ChilliScoreCalculator";

class ChilliCard extends Card {
  constructor() {
    super(
      Crop.CHILLI,
      "Chilli",
      "The most spicy crop of latin america",
      "WIP",
      "WIP",
      "🌶",
      CardType.CROP,
      new ChilliScoreCalculator()
    );
  }
}

export default ChilliCard;
