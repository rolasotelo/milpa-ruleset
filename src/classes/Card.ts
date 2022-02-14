import { CardType } from "../common";

export default abstract class Card {
  protected constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly description: string,
    public readonly short: string,
    public readonly rule: string,
    public readonly icon: string,
    public readonly type: CardType,
    public readonly pointsWhenPlayed: number
  ) {}

  abstract scoreWhenPlayed(): number;

  get representation() {
    return {
      name: this.name,
      description: this.description,
      short: this.short,
      rule: this.rule,
      icon: this.icon,
      type: this.type,
    } as const;
  }
}
