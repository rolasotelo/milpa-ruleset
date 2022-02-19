import { ChilliEdgeSlotInteractor } from "../../../../../src/classes/interactors/crops";
import { EMPTY_EDGE_SLOT } from "../../../../stubs/slots";
import { ChilliCard } from "../../../../../src/classes/cards/crops";

describe("Chilli Edge Slot Interactor", function () {
  describe("When empty slot is being checked for interaction", function () {
    const edgeSlotInteractor = new ChilliEdgeSlotInteractor();
    test("then it should return true", function () {
      expect(
        edgeSlotInteractor.canInteractWithSlot(EMPTY_EDGE_SLOT)
      ).toBeTruthy();
    });
  });
  describe("When chilli card is pushed to slot", function () {
    const edgeSlotInteractor = new ChilliEdgeSlotInteractor();
    test("then it should return slot with chilli card", function () {
      const newSlot = edgeSlotInteractor.pushToSlot(EMPTY_EDGE_SLOT);
      expect(JSON.stringify(newSlot.cards)).toBe(
        JSON.stringify([new ChilliCard()])
      );
    });
  });
});
