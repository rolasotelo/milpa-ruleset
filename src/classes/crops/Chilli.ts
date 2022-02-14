import Card from "../Card";
import { CardType, CHILLI, Crop } from "../../common";

export default class Chilli extends Card {
  constructor() {
    super(
      Crop.CHILLI,
      "Chilli",
      "The most spicy crop of latin america",
      "WIP",
      "WIP",
      "🌶",
      CardType.CROP,
      CHILLI.pointsWhenPlayed
    );
  }

  scoreWhenPlayed(): number {
    return this.pointsWhenPlayed;
  }
}
