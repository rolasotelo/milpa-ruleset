import Slot from "./Slot";
import { SlotType } from "../../common";

class MilpaSlot extends Slot {
  public readonly type: SlotType = SlotType.MILPA;
}

export default MilpaSlot;
