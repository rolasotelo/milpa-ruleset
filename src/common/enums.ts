export enum TURN {
    GAME_START,
    FIRST_TURN,
    SECOND_TURN,
    PENULTIMATE_TURN = 15,
    LAST_TURN
}

export enum CARD_TYPE {
    CROP = 'CROP',
    GOOD = 'GOOD'
}

export enum CROP {
    CORN = 'Corn',
    CHILLI= 'Chilli'
}

export enum GOOD {
    MAGUEY = 'Maguey',
    CACTUS= 'Cactus'
}

export enum ERROR{
    INVALID_DECK = 'Invalid deck distribution',
    INVALID_CARD = 'Invalid card.',
    INVALID_HAND = 'Invalid hand size',
    INVALID_START = 'Invalid start'
}