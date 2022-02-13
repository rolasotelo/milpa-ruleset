import {CARD_TYPE, TURN} from "../common/enums";
import {Deck} from "./Deck";
import {Hand} from "./Hand";

export class Match {
    private _turn: number = TURN.GAME_START;
    private cropDeck : Deck = new Deck(CARD_TYPE.CROP)
    private cropHand : Hand = new Hand()

    get turn(){
        if(TURN.GAME_START <= this._turn && this._turn<= TURN.LAST_TURN) return this._turn
        else throw new Error('Invalid turn')
    }

    set turn(nextTurn){
        if(TURN.FIRST_TURN <= nextTurn && nextTurn<= TURN.LAST_TURN) this._turn= nextTurn
        else throw new Error('Invalid turn')
    }
}