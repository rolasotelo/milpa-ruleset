import Card from "../Card";
import { CardType, CORN, Crop } from "../../common";

export default class Corn extends Card {
  constructor() {
    super(
      Crop.CORN,
      "Corn",
      "The most important crop of latin america",
      "WIP",
      "WIP",
      "🌽",
      CardType.CROP,
      CORN.pointsWhenPlayed
    );
  }

  scoreWhenPlayed(): number {
    return this.pointsWhenPlayed;
  }
}
