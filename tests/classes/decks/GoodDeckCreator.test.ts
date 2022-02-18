import {
  CardType,
  Crop,
  Errors,
  Good,
  GOOD_DECK_SIZE,
  GOOD_HAND_SIZE,
} from "../../../src/common";
import GoodDeckCreator from "../../../src/classes/decks/GoodDeckCreator";
import CactusCard from "../../../src/classes/cards/goods/cactus/CactusCard";

describe("GoodDeckCreator", function () {
  describe("When creating card", function () {
    const goodDeckCreator = new GoodDeckCreator();
    test("then it should return correct card if given proper cardId", function () {
      expect(goodDeckCreator.createCard(Good.CACTUS)).toBeInstanceOf(
        CactusCard
      );
    });
    test("then it should throw error when given invalid cardId", function () {
      expect(function () {
        goodDeckCreator.createCard(Crop.CORN);
      }).toThrowError(Errors.INVALID_CARD);
    });
  });

  describe("When creating deck", function () {
    const deck = new GoodDeckCreator().createDeck();
    test("then it should have proper size and all cards should be of proper type", function () {
      expect(deck).toHaveLength(GOOD_DECK_SIZE);
      deck.forEach(function (card) {
        expect(card.type).toBe(CardType.GOOD);
      });
    });
  });

  describe("When dealing hand", function () {
    const dummyGoodDeck = Array.from(Array(GOOD_HAND_SIZE + 1), function () {
      return new CactusCard();
    });
    const [newHand, newDeck] = new GoodDeckCreator().dealHand(dummyGoodDeck);
    test("then new deck and hand should have proper size", function () {
      expect(newDeck).toHaveLength(dummyGoodDeck.length - GOOD_HAND_SIZE);
      expect(newHand).toHaveLength(GOOD_HAND_SIZE);
    });
  });
});
