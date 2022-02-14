import { CROP_DECK_SIZE, CROP_HAND_SIZE, Turn } from "../../src/common";
import Match from "../../src/classes/Match";

describe("Match class", () => {
  describe("When match is created but before it starts", () => {
    const match = new Match();
    test("then initial values should be correct", () => {
      expect(match.turn).toBe(Turn.GAME_START);
      expect(match.cropDeck).toHaveLength(CROP_DECK_SIZE);
      expect(match.cropHand).toHaveLength(0);
    });
  });

  describe("When match is initialized", () => {
    const match = new Match();
    match.startGame();
    test("then values should be updated accordingly", () => {
      expect(match.turn).toBe(Turn.FIRST_TURN);
      expect(match.cropDeck).toHaveLength(CROP_DECK_SIZE - CROP_HAND_SIZE);
      expect(match.cropHand).toHaveLength(CROP_HAND_SIZE);
    });
  });

  describe("When a new turn starts", () => {
    const match = new Match();
    match.startGame();
    match.nextTurn();
    test("then values should be updated accordingly", () => {
      expect(match.turn).toBe(Turn.SECOND_TURN);
      expect(match.cropDeck).toHaveLength(CROP_DECK_SIZE - 2 * CROP_HAND_SIZE);
      expect(match.cropHand).toHaveLength(CROP_HAND_SIZE);
    });
  });
});
