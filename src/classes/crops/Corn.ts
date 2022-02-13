import {Card} from "../Card";
import {CARD_TYPE, CROP} from "../../common/enums";

export class Corn extends Card {

    constructor() {
        super(
            CROP.CORN,
            'Corn',
            "The most important crop of latin america",
            5,
            CARD_TYPE.CROP);
    }

    scoreWhenPlayed(): number {
        return this.pointsWhenPlayed
    }
}