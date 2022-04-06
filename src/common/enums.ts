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

export enum SlotType {
  MILPA = "MILPA",
  EDGE = "EDGE",
}

export enum Crop {
  CORN = "Corn",
  CHILLI = "Chilli",
}

export enum CropReverse {
  Corn = "CORN",
  Chilli = "CHILLI",
}

export enum Good {
  MAGUEY = "Maguey",
  CACTUS = "Cactus",
}

export enum GoodReverse {
  Maguey = "MAGUEY",
  Cactus = "CACTUS",
}

export enum AllCards {
  CORN = "Corn",
  CHILLI = "Chilli",
  MAGUEY = "Maguey",
  CACTUS = "Cactus",
}

export enum Errors {
  INVALID_DECK = "Invalid deck distribution",
  INVALID_CARD = "Invalid card.",
  INVALID_HAND = "Invalid hand size",
  INVALID_START = "Invalid start",
  INVALID_TURN = "Invalid turn transition",
  INVALID_PLAYER = "Invalid player",
  NOT_YOUR_TURN = "Not your turn",
  NOT_OWNER_SET = "Not game owner set yet.",
}
