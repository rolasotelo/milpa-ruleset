import {CROP, GOOD} from "./enums";
import {DeckCardDistribution} from "./types";


export const CROP_DECK_DISTRIBUTION : DeckCardDistribution<typeof CROP> = {
    CORN: 32,
    CHILLI: 32
} as const;

export const GOOD_DECK_DISTRIBUTION : DeckCardDistribution<typeof GOOD> = {
    CACTUS: 20,
    MAGUEY: 20
} as const;

export const CROP_DECK_SIZE = 64

export const GOOD_DECK_SIZE = 40


