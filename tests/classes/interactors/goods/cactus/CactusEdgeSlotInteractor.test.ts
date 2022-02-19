import { EMPTY_EDGE_SLOT } from "../../../../stubs/slots";
import { CactusEdgeSlotInteractor } from "../../../../../src/classes/interactors/goods";
import { CactusCard } from "../../../../../src/classes/cards/goods";

describe("Cactus Edge Slot Interactor", function () {
  describe("When empty slot is being checked for interaction", function () {
    const edgeSlotInteractor = new CactusEdgeSlotInteractor();
    test("then it should return true", function () {
      expect(
        edgeSlotInteractor.canInteractWithSlot(EMPTY_EDGE_SLOT)
      ).toBeTruthy();
    });
  });
  describe("When cactus card is pushed to slot", function () {
    const edgeSlotInteractor = new CactusEdgeSlotInteractor();
    test("then it should return slot with cactus card", function () {
      const newSlot = edgeSlotInteractor.pushToSlot(EMPTY_EDGE_SLOT);
      expect(JSON.stringify(newSlot.cards)).toBe(
        JSON.stringify([new CactusCard()])
      );
    });
  });
});
