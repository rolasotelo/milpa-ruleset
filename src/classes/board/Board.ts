/* eslint-disable no-underscore-dangle */
import Slot from "../slots/Slot";
import MilpaSlot from "../slots/MilpaSlot";
import EdgeSlot from "../slots/EdgeSlot";
import {
  AllCards,
  AnyCard,
  CardType,
  Crop,
  CropReverse,
  Good,
  GoodReverse,
  ObjectWithKeyValueTypes,
  SlotType,
} from "../../common";
import SlotInteractor from "../slots/SlotInteractor";
import CactusMilpaSlotInteractor from "../cards/goods/cactus/CactusMilpaSlotInteractor";
import MagueyMilpaSlotInteractor from "../cards/goods/maguey/MagueyMilpaSlotInteractor";
import CornMilpaSlotInteractor from "../cards/crops/corn/CornMilpaSlotInteractor";
import ChilliMilpaSlotInteractor from "../cards/crops/chilli/ChilliMilpaSlotInteractor";
import CactusEdgeSlotInteractor from "../cards/goods/cactus/CactusEdgeSlotInteractor";
import MagueyEdgeSlotInteractor from "../cards/goods/maguey/MagueyEdgeSlotInteractor";
import CornEdgeSlotInteractor from "../cards/crops/corn/CornEdgeSlotInteractor";
import ChilliEdgeSlotInteractor from "../cards/crops/chilli/ChilliEdgeSlotInteractor";

class Board {
  private _milpa: Slot[] = [];

  private _edges: Slot[] = [];

  public milpaSlotInteractors: ObjectWithKeyValueTypes<
    typeof AllCards,
    SlotInteractor
  >;

  public edgeSlotInteractors: ObjectWithKeyValueTypes<
    typeof AllCards,
    SlotInteractor
  >;

  constructor() {
    this.milpaSlotInteractors = Board.generateMilpaSlotInteractors();
    this.edgeSlotInteractors = Board.generateEdgeSlotInteractors();

    this._milpa = Array.from(Array(16), () => new MilpaSlot([]));

    this._edges = Array.from(Array(16), () => new EdgeSlot([]));
  }

  get milpa() {
    return this._milpa.slice();
  }

  set milpa(slots: Slot[]) {
    this._milpa = slots;
  }

  get edges() {
    return this._edges.slice();
  }

  set edges(slots: Slot[]) {
    this._edges = slots;
  }

  canCardInteractWithSlot(
    cardId: AnyCard,
    cardType: CardType,
    slot: Slot
  ): boolean {
    let cropEnumIndex;
    if (cardType === CardType.CROP) {
      cropEnumIndex = CropReverse[cardId as unknown as Crop];
    } else {
      cropEnumIndex = GoodReverse[cardId as unknown as Good];
    }
    if (slot.type === SlotType.MILPA) {
      return this.milpaSlotInteractors[cropEnumIndex].canInteractWithSlot(slot);
    }
    if (slot.type === SlotType.EDGE) {
      return this.edgeSlotInteractors[cropEnumIndex].canInteractWithSlot(slot);
    }
    return false;
  }

  static generateMilpaSlotInteractors(): ObjectWithKeyValueTypes<
    typeof AllCards,
    SlotInteractor
  > {
    const cactusSlotInteractor: SlotInteractor =
      new CactusMilpaSlotInteractor();
    const magueySlotInteractor: SlotInteractor =
      new MagueyMilpaSlotInteractor();
    const cornSlotInteractor: SlotInteractor = new CornMilpaSlotInteractor();
    const chilliSlotInteractor: SlotInteractor =
      new ChilliMilpaSlotInteractor();
    return {
      CORN: cornSlotInteractor,
      CHILLI: chilliSlotInteractor,
      CACTUS: cactusSlotInteractor,
      MAGUEY: magueySlotInteractor,
    };
  }

  static generateEdgeSlotInteractors(): ObjectWithKeyValueTypes<
    typeof AllCards,
    SlotInteractor
  > {
    const cactusSlotInteractor: SlotInteractor = new CactusEdgeSlotInteractor();
    const magueySlotInteractor: SlotInteractor = new MagueyEdgeSlotInteractor();
    const cornSlotInteractor: SlotInteractor = new CornEdgeSlotInteractor();
    const chilliSlotInteractor: SlotInteractor = new ChilliEdgeSlotInteractor();
    return {
      CACTUS: cactusSlotInteractor,
      MAGUEY: magueySlotInteractor,
      CORN: cornSlotInteractor,
      CHILLI: chilliSlotInteractor,
    };
  }
}

export default Board;
