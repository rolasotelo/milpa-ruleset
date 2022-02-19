import { EMPTY_MILPA_SLOT } from "../../../../stubs/slots";
import { MagueyMilpaSlotInteractor } from "../../../../../src/classes/interactors/goods";
import { MagueyCard } from "../../../../../src/classes/cards/goods";

describe("Maguey Milpa Slot Interactor", function () {
  describe("When empty slot is being checked for interaction", function () {
    const milpaSlotInteractor = new MagueyMilpaSlotInteractor();
    test("then it should return true", function () {
      expect(
        milpaSlotInteractor.canInteractWithSlot(EMPTY_MILPA_SLOT)
      ).toBeTruthy();
    });
  });
  describe("When maguey card is pushed to slot", function () {
    const milpaSlotInteractor = new MagueyMilpaSlotInteractor();
    test("then it should return slot with maguey card", function () {
      const newSlot = milpaSlotInteractor.pushToSlot(EMPTY_MILPA_SLOT);
      expect(JSON.stringify(newSlot.cards)).toBe(
        JSON.stringify([new MagueyCard()])
      );
    });
  });
});
