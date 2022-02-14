/* eslint-disable no-underscore-dangle */
import { CardType, Errors, Turn } from "../common";
import Deck from "./Deck";
import Hand from "./Hand";

export default class Match {
  private _turn: number = Turn.GAME_START;

  private _cropDeck: Deck = new Deck(CardType.CROP);

  private _cropHand: Hand = new Hand([]);

  get turn() {
    if (Turn.GAME_START <= this._turn && this._turn <= Turn.LAST_TURN)
      return this._turn;
    throw new Error("Invalid turn");
  }

  set turn(nextTurn) {
    if (Turn.FIRST_TURN <= nextTurn && nextTurn <= Turn.LAST_TURN)
      this._turn = nextTurn;
    else throw new Error(Errors.INVALID_START);
  }

  get cropDeck() {
    return this._cropDeck.cards;
  }

  get cropHand() {
    return this._cropHand.cards;
  }

  public startGame() {
    this.turn = Turn.FIRST_TURN;
    this._cropHand = this._cropDeck.drawHand();
  }

  public nextTurn() {
    if (this.turn === 0) throw new Error(Errors.INVALID_START);
    this.turn += 1;
    this._cropHand = this._cropDeck.drawHand();
  }
}
