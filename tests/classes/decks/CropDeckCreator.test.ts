import CropDeckCreator from "../../../src/classes/decks/CropDeckCreator";
import {
  CardType,
  Crop,
  CROP_DECK_SIZE,
  CROP_HAND_SIZE,
  Errors,
  Good,
} from "../../../src/common";
import CornCard from "../../../src/classes/cards/crops/corn/CornCard";

describe("CropDeckCreator", function () {
  describe("When creating card", function () {
    const cropDeckCreator = new CropDeckCreator();
    test("then it should return correct card if given proper cardId", function () {
      expect(cropDeckCreator.createCard(Crop.CORN)).toBeInstanceOf(CornCard);
    });
    test("then it should throw error when given invalid cardId", function () {
      expect(function () {
        cropDeckCreator.createCard(Good.CACTUS);
      }).toThrowError(Errors.INVALID_CARD);
    });
  });

  describe("When creating deck", function () {
    const deck = new CropDeckCreator().createDeck();
    test("then it should have proper size and all cards should be of proper type", function () {
      expect(deck).toHaveLength(CROP_DECK_SIZE);
      deck.forEach(function (card) {
        expect(card.type).toBe(CardType.CROP);
      });
    });
  });

  describe("When dealing hand", function () {
    const dummyCropDeck = Array.from(Array(CROP_HAND_SIZE + 1), function () {
      return new CornCard();
    });
    const [newHand, newDeck] = new CropDeckCreator().dealHand(dummyCropDeck);
    test("then new deck and hand should have proper size", function () {
      expect(newDeck).toHaveLength(dummyCropDeck.length - CROP_HAND_SIZE);
      expect(newHand).toHaveLength(CROP_HAND_SIZE);
    });
  });
});
