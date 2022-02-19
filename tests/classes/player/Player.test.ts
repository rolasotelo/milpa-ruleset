import Player from "../../../src/classes/player/Player";
import { CornCard } from "../../../src/classes/cards/crops";

describe("Player class", function () {
  describe("When creating new player", function () {
    const player = new Player("gabinka");
    test("then expect values to be correctly initialized", function () {
      expect(player.nickname).toEqual("gabinka");
      expect(player.points).toEqual(0);
    });
  });
  describe("When updating board and points", function () {
    const player = new Player("gabinka");
    test("then changes should happen properly", function () {
      player.addPoints(10);
      expect(player.points).toEqual(10);
      expect(player.board.milpa[0].cards).toHaveLength(0);
      player.board.milpa[0].cards = [new CornCard()];
      expect(player.board.milpa[0].cards).toHaveLength(1);
    });
  });
});
