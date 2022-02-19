import { EMPTY_EDGE_SLOT } from "../../../../stubs/slots";
import { MagueyEdgeSlotInteractor } from "../../../../../src/classes/interactors/goods";
import { MagueyCard } from "../../../../../src/classes/cards/goods";

describe("Maguey Edge Slot Interactor", function () {
  describe("When empty slot is being checked for interaction", function () {
    const edgeSlotInteractor = new MagueyEdgeSlotInteractor();
    test("then it should return true", function () {
      expect(
        edgeSlotInteractor.canInteractWithSlot(EMPTY_EDGE_SLOT)
      ).toBeTruthy();
    });
  });
  describe("When maguey card is pushed to slot", function () {
    const edgeSlotInteractor = new MagueyEdgeSlotInteractor();
    test("then it should return slot with maguey card", function () {
      const newSlot = edgeSlotInteractor.pushToSlot(EMPTY_EDGE_SLOT);
      expect(JSON.stringify(newSlot.cards)).toBe(
        JSON.stringify([new MagueyCard()])
      );
    });
  });
});
