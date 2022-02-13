import {Card} from "../Card";
import {CARD_TYPE, CHILLI, CROP} from "../../common";

export class Chilli extends Card {

    constructor() {
        super(
            CROP.CHILLI,
            'Chilli',
            "The most spicy crop of latin america",
            "WIP",
            "WIP",
            "🌶",
            CARD_TYPE.CROP,
            CHILLI.pointsWhenPlayed);
    }

    scoreWhenPlayed(): number {
        return this.pointsWhenPlayed
    }
}