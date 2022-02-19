import { EMPTY_EDGE_SLOT } from "../../../../stubs/slots";
import { CornCard } from "../../../../../src/classes/cards/crops";
import { CornEdgeSlotInteractor } from "../../../../../src/classes/interactors/crops";

describe("Corn Edge Slot Interactor", function () {
  describe("When empty slot is being checked for interaction", function () {
    const edgeSlotInteractor = new CornEdgeSlotInteractor();
    test("then it should return true", function () {
      expect(
        edgeSlotInteractor.canInteractWithSlot(EMPTY_EDGE_SLOT)
      ).toBeTruthy();
    });
  });
  describe("When corn card is pushed to slot", function () {
    const edgeSlotInteractor = new CornEdgeSlotInteractor();
    test("then it should return slot with corn card", function () {
      const newSlot = edgeSlotInteractor.pushToSlot(EMPTY_EDGE_SLOT);
      expect(JSON.stringify(newSlot.cards)).toBe(
        JSON.stringify([new CornCard()])
      );
    });
  });
});
