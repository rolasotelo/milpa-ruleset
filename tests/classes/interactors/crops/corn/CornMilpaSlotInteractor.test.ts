import { EMPTY_MILPA_SLOT } from "../../../../stubs/slots";
import { CornMilpaSlotInteractor } from "../../../../../src/classes/interactors/crops";
import { CornCard } from "../../../../../src/classes/cards/crops";

describe("Corn Milpa Slot Interactor", function () {
  describe("When empty slot is being checked for interaction", function () {
    const milpaSlotInteractor = new CornMilpaSlotInteractor();
    test("then it should return true", function () {
      expect(
        milpaSlotInteractor.canInteractWithSlot(EMPTY_MILPA_SLOT)
      ).toBeTruthy();
    });
  });
  describe("When corn card is pushed to slot", function () {
    const milpaSlotInteractor = new CornMilpaSlotInteractor();
    test("then it should return slot with corn card", function () {
      const newSlot = milpaSlotInteractor.pushToSlot(EMPTY_MILPA_SLOT);
      expect(JSON.stringify(newSlot.cards)).toBe(
        JSON.stringify([new CornCard()])
      );
    });
  });
});
