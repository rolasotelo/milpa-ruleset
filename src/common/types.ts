import { Crop, Good } from "./enums";

export type DeckCardDistribution<Type> = {
  [index in keyof Type]: number;
};
export type AnyCard = Crop | Good;

export type ObjectWithInKeyofAndValueTypes<U, V> = {
  [index in keyof U]: V;
};

export interface ObjectWithValue<T> {
  [index: string]: T;
}

export interface MatchConstructor<U, V> {
  turn: number;
  currentAndNextPlayer: { current: string; next: string };
  matchId: string;
  cropHand: U[];
  cropDeck: U[];
  goodHand: U[];
  goodDeck: U[];
  gameOwner: string;
  players: V;
  nextPlayerIndex: number;
}

export interface PlayerInitializer<U> {
  id: string;
  nickname: string;
  _points: number;
  _board: U;
  _connected: boolean;
  isYourTurn: boolean;
}
