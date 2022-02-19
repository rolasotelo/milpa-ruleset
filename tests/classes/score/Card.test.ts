import { CardType, Crop } from "../../../src/common";
import Card from "../../../src/classes/cards/Card";
import ChilliScoreCalculator from "../../../src/classes/score/crops/chilli/ChilliScoreCalculator";

describe("Card Class", () => {
  describe("When a card extending Card is created", () => {
    class ExampleCard extends Card {
      constructor() {
        super(
          Crop.CHILLI,
          "Chilli",
          "The most spicy crop of latin america",
          "WIP",
          "WIP",
          "🌶",
          CardType.CROP
        );
      }
    }

    const card = new ExampleCard();

    test("then it should return proper representation", () => {
      expect(card).toBeInstanceOf(Card);
      expect(card.representation).toHaveProperty("name", "Chilli");
    });
  });
});
