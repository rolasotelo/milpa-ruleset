import {
  CROP_DECK_SIZE,
  CROP_HAND_SIZE,
  Errors,
  ObjectWithValue,
  TOTAL_TURNS,
  Turn,
} from "../../src/common";
import Match from "../../src/classes/Match";
import Player from "../../src/classes/player/Player";

describe("Match class", () => {
  describe("When match is created but before it is properly initialized", () => {
    const match = new Match("abc123");
    test("then decks and hands should be empty", () => {
      expect(match.turn).toBe(Turn.GAME_START);
      expect(match.cropDeck).toHaveLength(0);
      expect(match.cropHand).toHaveLength(0);
      expect(match.goodDeck).toHaveLength(0);
      expect(match.goodHand).toHaveLength(0);
    });
    test("then starting game should throw error", () => {
      expect(() => {
        match.startGame();
      }).toThrowError(Errors.INVALID_START);
    });
  });

  describe("When adding new player", function () {
    const match = new Match("abc123");
    match.addPlayer("abc", "gabinka");
    expect(match.getPlayerFromId("NonExistentPlayer")).toBeUndefined();
    expect(match.getPlayerFromId("abc")).toBeInstanceOf(Player);
    expect(match.getPlayerFromId("abc").nickname).toEqual("gabinka");
    expect(match.getPlayerFromId("abc").points).toEqual(0);
  });

  describe("When match is properly initialized", () => {
    const match = new Match("abc123");
    test("then values should be updated accordingly", () => {
      expect(match.isGameReadyToStart).toBeFalsy();
      match.addPlayer("abc", "player1", true, true);
      match.addPlayer("def", "player2");
      expect(match.isGameReadyToStart).toBeTruthy();
      match.startGame();
      expect(match.turn).toBe(Turn.FIRST_TURN);
      expect(match.isGameOngoing).toBeTruthy();
      expect(match.cropDeck).toHaveLength(CROP_DECK_SIZE - CROP_HAND_SIZE);
      expect(match.cropHand).toHaveLength(CROP_HAND_SIZE);
    });
  });

  describe("When trying to set invalid turn number", function () {
    test("Then it should throw error", function () {
      const match = new Match("abc123");
      expect(() => {
        match.turn = TOTAL_TURNS + 1;
      }).toThrowError(Errors.INVALID_TURN);
    });
  });

  describe("When no game owner set", function () {
    test("Then it should throw error", function () {
      const match = new Match("abc123");
      expect(() => {
        match.ownerPlayerId;
      }).toThrowError(Errors.NOT_OWNER_SET);
    });
  });

  describe("When match is properly initialized", () => {
    const matchId = "onlineMatch";
    const onlineMatch: ObjectWithValue<Match> = {
      owner: new Match(matchId),
    };
    test("then basic game flow should work", () => {
      onlineMatch["owner"].addPlayer("owner", "player1", true, true);
      onlineMatch["owner"].addPlayer("second", "player2");
      onlineMatch["owner"].startGame();
      const matchConstructor =
        onlineMatch["owner"].getInfoNecessaryToCloneGame();
      onlineMatch["second"] = new Match(matchId, matchConstructor);
      expect(
        onlineMatch["owner"].isGameOngoing &&
          onlineMatch["second"].isGameOngoing
      ).toBeTruthy();
      onlineMatch["second"].localPlayerId = "second";
      expect(
        onlineMatch["second"].isYourTurn() !== onlineMatch["owner"].isYourTurn()
      ).toBeTruthy();
      if (onlineMatch["owner"].isYourTurn()) {
        onlineMatch["owner"].nextTurn();
        expect(onlineMatch["owner"].turn).toBe(Turn.SECOND_TURN);
      } else {
        onlineMatch["second"].nextTurn();
        expect(onlineMatch["second"].turn).toBe(Turn.SECOND_TURN);
      }
    });
  });
});
