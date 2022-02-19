/* eslint-disable no-underscore-dangle */
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

import {
  CactusEdgeSlotInteractor,
  CactusMilpaSlotInteractor,
  MagueyEdgeSlotInteractor,
  MagueyMilpaSlotInteractor,
} from "../interactors/goods";
import {
  ChilliEdgeSlotInteractor,
  ChilliMilpaSlotInteractor,
  CornEdgeSlotInteractor,
  CornMilpaSlotInteractor,
} from "../interactors/crops";
import { SlotInteractor } from "../../interfaces";
import { EdgeSlot, MilpaSlot, Slot } from "../slots";
// TODO implement interactions between different player's cards
class Board {
  private _milpa: Slot[] = [];

  private _edge: Slot[] = [];

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

    this._edge = Array.from(Array(16), () => new EdgeSlot([]));
  }

  get milpa() {
    return this._milpa.slice();
  }

  set milpa(slots: Slot[]) {
    this._milpa = slots;
  }

  get edge() {
    return this._edge.slice();
  }

  set edge(slots: Slot[]) {
    this._edge = slots;
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
