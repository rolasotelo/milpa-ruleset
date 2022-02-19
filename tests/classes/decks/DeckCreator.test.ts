import CornCard from "../../../src/classes/cards/crops/corn/CornCard";
import CactusCard from "../../../src/classes/cards/goods/cactus/CactusCard";
import Card from "../../../src/classes/cards/Card";
import DeckCreator from "../../../src/classes/decks/DeckCreator";
import { Crop } from "../../../src/common";

describe("DeckCreator Class", function () {
  describe("When using static method for shuffleDeck", function () {
    const twentyCornsAndTwentyCactus: Card[] = Array.from(
      Array(20),
      () => new CornCard()
    );
    const twentyCactus = Array.from(Array(20), () => new CactusCard());
    twentyCornsAndTwentyCactus.push(...twentyCactus);

    test("then deck should be shuffled.", function () {
      const shuffledDeck = DeckCreator.shuffleDeck(twentyCornsAndTwentyCactus);
      let i = 0;
      let consecutiveCorn = 0;
      while (i < 20) {
        if (shuffledDeck[i].id === Crop.CORN) consecutiveCorn++;
        i++;
      }
      expect(consecutiveCorn).toBeLessThan(20);
    });
  });
});
