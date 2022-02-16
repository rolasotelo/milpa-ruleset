import { Crop, Good } from "./enums";

export type DeckCardDistribution<Type> = {
  [index in keyof Type]: number;
};

export type AnyCard = Crop | Good;
