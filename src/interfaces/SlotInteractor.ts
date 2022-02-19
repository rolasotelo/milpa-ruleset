import { Slot } from "../classes/slots";

interface SlotInteractor {
  canInteractWithSlot(slot: Slot): boolean;
  pushToSlot(slot: Slot): Slot;
}

export default SlotInteractor;
