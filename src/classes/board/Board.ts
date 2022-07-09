/* eslint-disable no-underscore-dangle */
import {
  AllCards,
  AnyCard,
  CardType,
  Crop,
  CropReverse,
  Good,
  GoodReverse,
  ObjectWithInKeyofAndValueTypes,
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

  private _edges: Slot[] = [];

  public milpaSlotInteractors: ObjectWithInKeyofAndValueTypes<
    typeof AllCards,
    SlotInteractor
  >;

  public edgeSlotInteractors: ObjectWithInKeyofAndValueTypes<
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

  getMilpaNthRow(n: number): Slot[] {
    return this._milpa.slice(n * 4, n * 4 + 4);
  }

  getMilpaFirstRow(): Slot[] {
    return this.getMilpaNthRow(0);
  }

  getMilpaSecondRow(): Slot[] {
    return this.getMilpaNthRow(1);
  }

  getMilpaThirdRow(): Slot[] {
    return this.getMilpaNthRow(2);
  }

  getMilpaFourthRow(): Slot[] {
    return this.getMilpaNthRow(3);
  }

  getMilpaNthColumn(n: number): Slot[] {
    return this._milpa
      .slice(n, 1 + n)
      .concat(this._milpa.slice(4 + n, 5 + n))
      .concat(this._milpa.slice(8 + n, 9 + n))
      .concat(this._milpa.slice(12 + n, 13 + n));
  }

  getMilpaFirstColumn(): Slot[] {
    return this.getMilpaNthColumn(0);
  }

  getMilpaSecondColumn(): Slot[] {
    return this.getMilpaNthColumn(1);
  }

  getMilpaThirdColumn(): Slot[] {
    return this.getMilpaNthColumn(2);
  }

  getMilpaFourthColumn(): Slot[] {
    return this.getMilpaNthColumn(3);
  }

  get edges() {
    return this._edges.slice();
  }

  set edges(slots: Slot[]) {
    this._edges = slots;
  }

  getEdgeTopRow(): Slot[] {
    return this._edges.slice(0, 4);
  }

  getEdgeRightColumn(): Slot[] {
    return this._edges.slice(4, 8);
  }

  getEdgeBottomRow(): Slot[] {
    return this._edges.slice(8, 12);
  }

  getEdgeLeftColumn(): Slot[] {
    return this._edges.slice(12, 16);
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

  static generateMilpaSlotInteractors(): ObjectWithInKeyofAndValueTypes<
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

  static generateEdgeSlotInteractors(): ObjectWithInKeyofAndValueTypes<
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
