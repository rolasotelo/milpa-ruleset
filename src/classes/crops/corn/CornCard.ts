import { CardType, Crop } from "../../../common";
import Card from "../../Card";
import CornScoreCalculator from "./CornScoreCalculator";

class CornCard extends Card {
  constructor() {
    super(
      Crop.CORN,
      "Corn",
      "The most important crop of latin america",
      "WIP",
      "WIP",
      "🌽",
      CardType.CROP,
      new CornScoreCalculator()
    );
  }
}

export default CornCard;
