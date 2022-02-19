import Slot from "./Slot";
import { SlotType } from "../../common";

class EdgeSlot extends Slot {
  public readonly type: SlotType = SlotType.EDGE;
}

export default EdgeSlot;
