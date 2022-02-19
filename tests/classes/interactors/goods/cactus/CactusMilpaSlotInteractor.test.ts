import { EMPTY_MILPA_SLOT } from "../../../../stubs/slots";
import { CactusMilpaSlotInteractor } from "../../../../../src/classes/interactors/goods";
import { CactusCard } from "../../../../../src/classes/cards/goods";

describe("Cactus Milpa Slot Interactor", function () {
  describe("When empty slot is being checked for interaction", function () {
    const milpaSlotInteractor = new CactusMilpaSlotInteractor();
    test("then it should return true", function () {
      expect(
        milpaSlotInteractor.canInteractWithSlot(EMPTY_MILPA_SLOT)
      ).toBeTruthy();
    });
  });
  describe("When cactus card is pushed to slot", function () {
    const milpaSlotInteractor = new CactusMilpaSlotInteractor();
    test("then it should return slot with cactus card", function () {
      const newSlot = milpaSlotInteractor.pushToSlot(EMPTY_MILPA_SLOT);
      expect(JSON.stringify(newSlot.cards)).toBe(
        JSON.stringify([new CactusCard()])
      );
    });
  });
});
