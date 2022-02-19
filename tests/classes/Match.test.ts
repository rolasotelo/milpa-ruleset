import { CROP_DECK_SIZE, CROP_HAND_SIZE, Turn } from "../../src/common";
import Match from "../../src/classes/Match";
import Player from "../../src/classes/player/Player";

describe("Match class", () => {
  describe("When match is created but before it starts", () => {
    const match = new Match("abc123");
    test("then decks and hands should be empty", () => {
      expect(match.turn).toBe(Turn.GAME_START);
      expect(match.cropDeck).toHaveLength(0);
      expect(match.cropHand).toHaveLength(0);
    });
  });

  describe("When match is initialized", () => {
    const match = new Match("abc123");
    match.startGame();
    test("then values should be updated accordingly", () => {
      expect(match.turn).toBe(Turn.FIRST_TURN);
      expect(match.cropDeck).toHaveLength(CROP_DECK_SIZE - CROP_HAND_SIZE);
      expect(match.cropHand).toHaveLength(CROP_HAND_SIZE);
    });
  });

  describe("When a new turn starts", () => {
    const match = new Match("abc123");
    match.startGame();
    match.nextTurn();
    test("then values should be updated accordingly", () => {
      expect(match.turn).toBe(Turn.SECOND_TURN);
      expect(match.cropDeck).toHaveLength(CROP_DECK_SIZE - 2 * CROP_HAND_SIZE);
      expect(match.cropHand).toHaveLength(CROP_HAND_SIZE);
    });
  });

  describe("When adding new player", function () {
    const match = new Match("abc123");
    match.addPlayer("gabinka");
    expect(match.getPlayerFromNickname("NonExistentPlayer")).toBeUndefined();
    expect(match.getPlayerFromNickname("gabinka")).toBeInstanceOf(Player);
    expect(match.getPlayerFromNickname("gabinka").nickname).toEqual("gabinka");
    expect(match.getPlayerFromNickname("gabinka").points).toEqual(0);
  });
});
