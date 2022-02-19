import { ChilliMilpaSlotInteractor } from "../../../../../src/classes/interactors/crops";
import { EMPTY_MILPA_SLOT } from "../../../../stubs/slots";
import { ChilliCard } from "../../../../../src/classes/cards/crops";

describe("Chilli Milpa Slot Interactor", function () {
  describe("When empty slot is being checked for interaction", function () {
    const milpaSlotInteractor = new ChilliMilpaSlotInteractor();
    test("then it should return true", function () {
      expect(
        milpaSlotInteractor.canInteractWithSlot(EMPTY_MILPA_SLOT)
      ).toBeTruthy();
    });
  });
  describe("When chilli card is pushed to slot", function () {
    const milpaSlotInteractor = new ChilliMilpaSlotInteractor();
    test("then it should return slot with chilli card", function () {
      const newSlot = milpaSlotInteractor.pushToSlot(EMPTY_MILPA_SLOT);
      expect(JSON.stringify(newSlot.cards)).toBe(
        JSON.stringify([new ChilliCard()])
      );
    });
  });
});
