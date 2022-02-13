import {Deck} from "../../src/classes/Deck";
import {CARD_TYPE, CROP_DECK_SIZE} from "../../src/common";

describe('Deck Class',function () {
    describe('On crop deck creation',function () {
        const deck = new Deck(CARD_TYPE.CROP)
        test(`then it should contain initial deck of size: ${CROP_DECK_SIZE}`,function () {
            expect(deck.cards.length).toBe(CROP_DECK_SIZE)
        })
    })
})