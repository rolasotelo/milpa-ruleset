export type DeckCardDistribution<Type> = {
    [index in keyof Type]: number;
};