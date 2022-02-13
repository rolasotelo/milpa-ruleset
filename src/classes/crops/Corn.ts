import {Card} from "../Card";
import {CARD_TYPE, CROP} from "../../common/enums";

export class Corn extends Card {

    constructor() {
       super( CROP.CORN,
            'Corn',
            "The most important crop of latin america",
            "WIP",
            "WIP",
            "🌽",
            CARD_TYPE.CROP,
            5);
    }

    scoreWhenPlayed(): number {
        return this.pointsWhenPlayed
    }
}