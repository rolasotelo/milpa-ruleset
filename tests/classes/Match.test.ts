import {Match} from "../../src/classes";
import {CROP_DECK_SIZE, CROP_HAND_SIZE, TURN} from "../../src/common";

describe("Match class", function () {

    describe("When match is created but before it starts", function () {
        const match = new Match()
        test("then initial values should be correct", function () {
            expect(match.turn).toBe(TURN.GAME_START)
            expect(match.cropDeck).toHaveLength(CROP_DECK_SIZE)
            expect(match.cropHand).toHaveLength(0)
        })
    })

    describe("When match is initialized", function () {
        const match = new Match()
        match.startGame()
        test("then values should be updated accordingly", function () {

            expect(match.turn).toBe(TURN.FIRST_TURN)
            expect(match.cropDeck).toHaveLength(CROP_DECK_SIZE - CROP_HAND_SIZE)
            expect(match.cropHand).toHaveLength(CROP_HAND_SIZE)
        })
    })

    describe("When a new turn starts", function () {
        const match = new Match()
        match.startGame()
        match.nextTurn()
        test("then values should be updated accordingly", function () {
            expect(match.turn).toBe(TURN.SECOND_TURN)
            expect(match.cropDeck).toHaveLength(CROP_DECK_SIZE - 2 * CROP_HAND_SIZE)
            expect(match.cropHand).toHaveLength(CROP_HAND_SIZE)
        })
    })
})