import { CROP_DECK_SIZE, CROP_HAND_SIZE, Turn } from "../../src/common";
import Match from "../../src/classes/Match";
import CropDeckCreator from "../../src/classes/decks/CropDeckCreator";
import GoodDeckCreator from "../../src/classes/decks/GoodDeckCreator";

describe("Match class", () => {
  describe("When match is created but before it starts", () => {
    const match = new Match(new CropDeckCreator(), new GoodDeckCreator());
    test("then decks and hands should be empty", () => {
      expect(match.turn).toBe(Turn.GAME_START);
      expect(match.cropDeck).toHaveLength(0);
      expect(match.cropHand).toHaveLength(0);
    });
  });

  describe("When match is initialized", () => {
    const match = new Match(new CropDeckCreator(), new GoodDeckCreator());
    match.startGame();
    test("then values should be updated accordingly", () => {
      expect(match.turn).toBe(Turn.FIRST_TURN);
      expect(match.cropDeck).toHaveLength(CROP_DECK_SIZE - CROP_HAND_SIZE);
      expect(match.cropHand).toHaveLength(CROP_HAND_SIZE);
    });
  });

  describe("When a new turn starts", () => {
    const match = new Match(new CropDeckCreator(), new GoodDeckCreator());
    match.startGame();
    match.nextTurn();
    test("then values should be updated accordingly", () => {
      expect(match.turn).toBe(Turn.SECOND_TURN);
      expect(match.cropDeck).toHaveLength(CROP_DECK_SIZE - 2 * CROP_HAND_SIZE);
      expect(match.cropHand).toHaveLength(CROP_HAND_SIZE);
    });
  });
});
