import {CARD_TYPE} from "../common/enums";

export abstract class Card {
    constructor(
        public readonly name: string,
        public readonly description: string,
        public readonly pointsWhenPlayed: number,
        public readonly type: CARD_TYPE
    ) {
    }

    abstract scoreWhenPlayed(): number;
}