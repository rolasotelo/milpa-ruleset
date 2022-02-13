import {Deck} from "../../src/classes/Deck";
import {CARD_TYPE, CROP, CROP_DECK_DISTRIBUTION, CROP_DECK_SIZE} from "../../src/common";

describe('Deck Class',function () {
    describe('On crop deck creation',function () {
        const deck = new Deck(CARD_TYPE.CROP)
        test(`then it should contain initial deck of size: ${CROP_DECK_SIZE}`,function () {
            expect(deck.cards.length).toBe(CROP_DECK_SIZE)
        })
        test('then cards should be shuffled',function () {

            let i = 0
            let consecutiveCorn = 0
            while( i< CROP_DECK_DISTRIBUTION.CORN){

                if(deck.cards[i].id === CROP.CORN) consecutiveCorn++
                i++
            }
            expect(consecutiveCorn).not.toBe(CROP_DECK_DISTRIBUTION.CORN)
        })
    })

})