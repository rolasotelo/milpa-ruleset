import {Hand} from "../../src/classes/Hand";
import {Chilli, Corn} from "../../src/classes/crops";

describe('Hand Class',function () {
    describe('When creating a new hand',function () {
        const cornCards = [new Corn(),new Chilli()]
        const hand = new Hand(cornCards)
        test('then initial cards should be consistent',function () {
            expect(JSON.stringify(hand.cards)).toEqual(JSON.stringify(cornCards))
        })
    })

})