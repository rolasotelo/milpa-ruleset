import Slot from "./Slot";

interface SlotInteractor {
  canInteractWithSlot(slot: Slot): boolean;
  pushToSlot(slot: Slot): Slot;
}

export default SlotInteractor;
