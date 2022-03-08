/* eslint-disable no-underscore-dangle */
import {
  AllCards,
  Errors,
  MatchConstructor,
  ObjectWithInKeyofAndValueTypes,
  ObjectWithValue,
  PlayerInitializer,
  Turn,
} from "../common";
import Card from "./cards/Card";
import DeckCreator from "./decks/DeckCreator";
import { CactusScoreCalculator, MagueyScoreCalculator } from "./score/goods";
import { ChilliScoreCalculator, CornScoreCalculator } from "./score/crops";
import { CropDeckCreator, GoodDeckCreator } from "./decks";
import { ScoreCalculator } from "../interfaces";
import Player from "./player/Player";
import Board from "./board/Board";

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

  private readonly players: ObjectWithValue<Player> = {};

  private readonly playerCount = 2;

  private _nextPlayerIndex = -1;

  private _currentPlayerId = "";

  private _nextPlayerId = "";

  private _localPlayerId: undefined | string = undefined;

  private _ownerPlayerId: undefined | string = undefined;

  constructor(
    public readonly matchId: string,
    initializer?: MatchConstructor<Card, ObjectWithValue<Player>>
  ) {
    if (initializer) {
      this.turn = initializer.turn;
      this._currentPlayerId = initializer.currentAndNextPlayer.current;
      this._nextPlayerId = initializer.currentAndNextPlayer.next;
      this._nextPlayerIndex = initializer.nextPlayerIndex;
      this._cropHand = initializer.cropHand;
      this._cropDeck = initializer.cropDeck;
      this._goodHand = initializer.goodHand;
      this._goodDeck = initializer.goodDeck;
      this.ownerPlayerId = initializer.gameOwner;
      this.players = Match.initializePlayers(initializer.players);
    }
    this.cropDeckCreator = new CropDeckCreator();
    this.goodDeckCreator = new GoodDeckCreator();

    this.scorers = Match.generateScoreCalculators();
  }

  private static initializePlayers(players: ObjectWithValue<Player>) {
    const initializedPlayers: ObjectWithValue<Player> = {};
    Object.keys(players).forEach((value: string) => {
      initializedPlayers[value] = new Player(
        "",
        "",
        players[value] as unknown as PlayerInitializer<Board>
      );
    });
    return initializedPlayers;
  }

  get turn() {
    if (Turn.GAME_START <= this._turn && this._turn <= Turn.LAST_TURN)
      return this._turn;
    throw new Error(Errors.INVALID_TURN);
  }

  set turn(nextTurn) {
    if (Turn.FIRST_TURN <= nextTurn && nextTurn <= Turn.LAST_TURN)
      this._turn = nextTurn;
    else throw new Error(Errors.INVALID_TURN);
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

  get isGameOwner() {
    return (
      this._localPlayerId === this._ownerPlayerId &&
      this._ownerPlayerId !== undefined
    );
  }

  set localPlayerId(id: string) {
    if (this._localPlayerId !== undefined)
      throw new Error(Errors.INVALID_PLAYER);
    this._localPlayerId = id;
  }

  get ownerPlayerId() {
    if (this._ownerPlayerId === undefined)
      throw new Error(Errors.NOT_OWNER_SET);
    return this._ownerPlayerId;
  }

  set ownerPlayerId(id: string) {
    this._ownerPlayerId = id;
  }

  get isGameOngoing() {
    return (
      !this.isAcceptingPlayer &&
      this.areAllPlayersConnected &&
      this.turn > Turn.GAME_START
    );
  }

  get isGameReadyToStart() {
    return (
      !this.isAcceptingPlayer &&
      this.areAllPlayersConnected &&
      this.turn === Turn.GAME_START &&
      this.isGameOwner
    );
  }

  private get currentPlayerCount() {
    return Object.keys(this.players).length;
  }

  public get isAcceptingPlayer() {
    return this.currentPlayerCount < this.playerCount;
  }

  public get areAllPlayersConnected() {
    return Object.keys(this.players).reduce(
      (previousPlayersConnected, id) =>
        this.players[id].connected && previousPlayersConnected,
      true
    );
  }

  public startGame() {
    if (!this.isGameReadyToStart) throw new Error(Errors.INVALID_START);
    this.chooseFirstPlayer();
    this._cropDeck = this.cropDeckCreator.createDeck();
    this._goodDeck = this.goodDeckCreator.createDeck();
    this.drawAllHands();
    this.turn = Turn.FIRST_TURN;
  }

  public nextTurn() {
    if (this.turn === 0 || !this.isGameOngoing)
      throw new Error(Errors.INVALID_TURN);
    if (!this.isYourTurn()) throw new Error(Errors.NOT_YOUR_TURN);
    this.turn += 1;
    this.drawAllHands();
    this.updatePlayersIsYourTurn();
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

  public addPlayer(
    id: string,
    nickname: string,
    isLocal = false,
    isOwner = false
  ) {
    if (isLocal) this.localPlayerId = id;
    if (isOwner) this.ownerPlayerId = id;
    this.players[id] = new Player(id, nickname);
  }

  public getPlayerFromId(id: string) {
    return this.players[id];
  }

  private chooseFirstPlayer() {
    const firstPlayerIndex = Math.floor(this.playerCount * Math.random());
    this._nextPlayerIndex =
      firstPlayerIndex < this.playerCount - 1 ? firstPlayerIndex + 1 : 0;
    Object.keys(this.players).forEach((id, index) => {
      if (index === firstPlayerIndex) this._currentPlayerId = id;
      if (index === this._nextPlayerIndex) this._nextPlayerId = id;
      this.players[id].isYourTurn = index === firstPlayerIndex;
    });
  }

  private updatePlayersIsYourTurn() {
    const newPlayerIndex = this._nextPlayerIndex;
    this._nextPlayerIndex =
      newPlayerIndex < this.playerCount - 1 ? newPlayerIndex + 1 : 0;
    Object.keys(this.players).forEach((id, index) => {
      if (index === newPlayerIndex) this._currentPlayerId = id;
      if (index === this._nextPlayerIndex) this._nextPlayerId = id;
      this.players[id].isYourTurn = index === newPlayerIndex;
    });
  }

  public getInfoNecessaryToCloneGame(): MatchConstructor<
    Card,
    ObjectWithValue<Player>
  > {
    return {
      turn: this.turn,
      currentAndNextPlayer: { ...this.idForCurrentAndNextPlayersTurn() },
      matchId: this.matchId,
      cropHand: [...this.cropHand],
      cropDeck: [...this.cropDeck],
      goodHand: [...this.goodHand],
      goodDeck: [...this.goodDeck],
      gameOwner: this.ownerPlayerId,
      players: { ...this.players },
      nextPlayerIndex: this._nextPlayerIndex,
    };
  }

  public getInfo() {
    const playersInfo: ObjectWithValue<{
      nickname: string;
      points: number;
      connected: boolean;
    }> = {};
    Object.keys(this.players).forEach((value: string) => {
      playersInfo[value] = {
        nickname: this.players[value].nickname,
        points: this.players[value].points,
        connected: this.players[value].connected,
      };
    });

    return {
      turn: this.turn,
      matchId: this.matchId,
      players: playersInfo,
      currentAndNextPlayer: this.idForCurrentAndNextPlayersTurn(),
    };
  }

  public idForCurrentAndNextPlayersTurn() {
    return {
      current: this._currentPlayerId,
      next: this._nextPlayerId,
    };
  }

  public isYourTurn() {
    return (
      this._localPlayerId === this.idForCurrentAndNextPlayersTurn().current
    );
  }

  private static generateScoreCalculators(): ObjectWithInKeyofAndValueTypes<
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
