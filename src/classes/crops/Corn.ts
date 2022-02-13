import {Card} from "../Card";
import {CARD_TYPE, CORN, CROP} from "../../common";

export class Corn extends Card {

    constructor() {
       super( CROP.CORN,
            'Corn',
            "The most important crop of latin america",
            "WIP",
            "WIP",
            "🌽",
            CARD_TYPE.CROP,
            CORN.pointsWhenPlayed);
    }

    scoreWhenPlayed(): number {
        return this.pointsWhenPlayed
    }
}