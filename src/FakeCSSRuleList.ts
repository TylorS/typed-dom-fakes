export class FakeCSSRuleList extends Array<CSSRule> implements CSSRuleList {
  constructor(...items: Array<CSSRule>) {
    super(...items)
  }

  public item(index: number): CSSRule {
    return this[index]
  }
}