import Board from "../../../src/classes/board/Board";
import { CardType, Crop, Good } from "../../../src/common";
import { EdgeSlot, MilpaSlot } from "../../../src/classes/slots";

describe("Board class", function () {
  describe("When new Board is created", function () {
    const board = new Board();
    test("then both milpa and edge slots should be empty", function () {
      expect(board.milpa).toHaveLength(16);
      expect(board.edges).toHaveLength(16);
      board.milpa.forEach((slot) => expect(slot.cards).toEqual([]));
      board.edges.forEach((slot) => expect(slot.cards).toEqual([]));
    });
  });
  describe("When verifying interaction of card and slot", function () {
    const board = new Board();
    test("then it should return proper value", function () {
      expect(
        board.canCardInteractWithSlot(
          Crop.CORN,
          CardType.CROP,
          new MilpaSlot([])
        )
      ).toBeTruthy();
    });
    test("then it should return proper value", function () {
      expect(
        board.canCardInteractWithSlot(
          Good.CACTUS,
          CardType.GOOD,
          new EdgeSlot([])
        )
      ).toBeTruthy();
    });
  });
});
