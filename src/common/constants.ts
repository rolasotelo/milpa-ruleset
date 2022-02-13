import {CROP, GOOD} from "./enums";
import {DeckCardDistribution} from "./types";

// Constants used by each crop card
export const CORN= {
    pointsWhenPlayed : 5,
    totalCards: 32
} as const

export const CHILLI= {
    pointsWhenPlayed : 3,
    totalCards: 32
} as const
// End

export const CROP_DECK_DISTRIBUTION : DeckCardDistribution<typeof CROP> = {
    CORN: CORN.totalCards,
    CHILLI: CHILLI.totalCards
} as const;

export const GOOD_DECK_DISTRIBUTION : DeckCardDistribution<typeof GOOD> = {
    CACTUS: 20,
    MAGUEY: 20
} as const;

export const CROP_DECK_SIZE = 64

export const GOOD_DECK_SIZE = 40


