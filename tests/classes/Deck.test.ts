import Deck from "../../src/classes/Deck";
import {
  CardType,
  Crop,
  CROP_DECK_DISTRIBUTION,
  CROP_DECK_SIZE,
  CROP_HAND_SIZE,
} from "../../src/common";

describe("Deck Class", () => {
  describe("On crop deck creation", () => {
    const deck = new Deck(CardType.CROP);
    test(`then it should contain initial deck of size: ${CROP_DECK_SIZE}`, () => {
      expect(deck.cards.length).toBe(CROP_DECK_SIZE);
    });
    test("then cards should be shuffled", () => {
      let i = 0;
      let consecutiveCorn = 0;
      while (i < CROP_DECK_DISTRIBUTION.CORN) {
        if (deck.cards[i].id === Crop.CORN) consecutiveCorn++;
        i++;
      }
      expect(consecutiveCorn).not.toBe(CROP_DECK_DISTRIBUTION.CORN);
    });
    test("then dealing a new hand should return hand and deck should be updated", () => {
      const initialDeckLength = deck.cards.length;
      const hand = deck.drawHand();
      const newDeckLength = deck.cards.length;
      expect(initialDeckLength - newDeckLength).toEqual(CROP_HAND_SIZE);
      expect(hand.cards.length).toEqual(CROP_HAND_SIZE);
    });
  });
});
