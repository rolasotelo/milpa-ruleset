/* eslint-disable no-underscore-dangle */
import {
  AllCards,
  Errors,
  ObjectWithInKeyofAndValueTypes,
  ObjectWithValue,
  Turn,
} from "../common";
import Card from "./cards/Card";
import DeckCreator from "./decks/DeckCreator";
import { CactusScoreCalculator, MagueyScoreCalculator } from "./score/goods";
import { ChilliScoreCalculator, CornScoreCalculator } from "./score/crops";
import { CropDeckCreator, GoodDeckCreator } from "./decks";
import { ScoreCalculator } from "../interfaces";
import Player from "./player/Player";

export default class Match {
  private _turn: number = Turn.GAME_START;

  private _cropDeck: Card[] = [];

  private _cropHand: Card[] = [];

  private _goodDeck: Card[] = [];

  private _goodHand: Card[] = [];

  private scorers: ObjectWithInKeyofAndValueTypes<
    typeof AllCards,
    ScoreCalculator
  >;

  public cropDeckCreator: DeckCreator;

  public goodDeckCreator: DeckCreator;

  private players: ObjectWithValue<Player> = {};

  constructor(public readonly matchId: string) {
    this.cropDeckCreator = new CropDeckCreator();
    this.goodDeckCreator = new GoodDeckCreator();

    this.scorers = Match.generateScoreCalculators();
  }

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
    return this._cropDeck.slice();
  }

  get cropHand() {
    return this._cropHand.slice();
  }

  get goodDeck() {
    return this._goodDeck.slice();
  }

  get goodHand() {
    return this._goodHand.slice();
  }

  public startGame() {
    this.turn = Turn.FIRST_TURN;

    this._cropDeck = this.cropDeckCreator.createDeck();
    this._goodDeck = this.goodDeckCreator.createDeck();

    this.drawAllHands();
  }

  public nextTurn() {
    if (this.turn === 0) throw new Error(Errors.INVALID_START);
    this.turn += 1;
    this.drawAllHands();
  }

  private drawAllHands() {
    const [initialCropHand, initialCropDeck] = this.cropDeckCreator.dealHand(
      this.cropDeck
    );
    this._cropDeck = initialCropDeck;
    this._cropHand = initialCropHand;

    const [initialGoodHand, initialGoodDeck] = this.goodDeckCreator.dealHand(
      this.goodDeck
    );
    this._goodDeck = initialGoodDeck;
    this._goodHand = initialGoodHand;
  }

  public addPlayer(nickname: string) {
    this.players[nickname] = new Player(nickname);
  }

  public getPlayerFromNickname(nickname: string) {
    return this.players[nickname];
  }

  static generateScoreCalculators(): ObjectWithInKeyofAndValueTypes<
    typeof AllCards,
    ScoreCalculator
  > {
    const cactusScoreCalculator: ScoreCalculator = new CactusScoreCalculator();
    const magueyScoreCalculator: ScoreCalculator = new MagueyScoreCalculator();
    const cornScoreCalculator: ScoreCalculator = new CornScoreCalculator();
    const chilliScoreCalculator: ScoreCalculator = new ChilliScoreCalculator();

    return {
      CACTUS: cactusScoreCalculator,
      MAGUEY: magueyScoreCalculator,
      CORN: cornScoreCalculator,
      CHILLI: chilliScoreCalculator,
    };
  }
}
