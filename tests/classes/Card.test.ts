import {Card} from "../../src/classes/Card";
import {CARD_TYPE, CROP} from "../../src/common";

describe('Card Class',function () {
    describe('When a card extending Card is created',function () {
        class ExampleCard extends Card {
            constructor() {
                super(CROP.CHILLI,
                    'Chilli',
                    "The most spicy crop of latin america",
                    "WIP",
                    "WIP",
                    "🌶",
                    CARD_TYPE.CROP,
                    3);
            }
            scoreWhenPlayed(): number {
                return 0;
            }
        }

        const card = new ExampleCard()

        test("then it should return proper representation",function () {
            expect(card).toBeInstanceOf(Card);
            expect(card.representation).toHaveProperty('name','Chilli')
        })

    })

})