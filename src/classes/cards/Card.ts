import { CardType } from "../../common";

abstract class Card {
  protected constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly description: string,
    public readonly short: string,
    public readonly rule: string,
    public readonly icon: string,
    public readonly type: CardType
  ) {}

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

export default Card;
