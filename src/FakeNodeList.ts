export class FakeNodeList<N extends Node = Node> extends Array<N> implements NodeListOf<N> {
  constructor(...items: Array<N>) {
    super(...items)
  }

  public item(index: number): N {
    return this[index]
  }

  protected _html: string | null = null

  get html(): string | null {
    return this._html
  }

  set html(value: string) {
    this.length = 0
    this._html = value
  }
}
