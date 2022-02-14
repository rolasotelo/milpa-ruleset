export enum Turn {
  GAME_START,
  FIRST_TURN,
  SECOND_TURN,
  PENULTIMATE_TURN = 15,
  LAST_TURN,
}

export enum CardType {
  CROP = "CROP",
  GOOD = "GOOD",
}

export enum Crop {
  CORN = "Corn",
  CHILLI = "Chilli",
}

export enum Good {
  MAGUEY = "Maguey",
  CACTUS = "Cactus",
}

export enum Errors {
  INVALID_DECK = "Invalid deck distribution",
  INVALID_CARD = "Invalid card.",
  INVALID_HAND = "Invalid hand size",
  INVALID_START = "Invalid start",
}
