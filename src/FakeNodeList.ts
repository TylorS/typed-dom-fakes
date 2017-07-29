export class FakeNodeList<N extends Node = Node> extends Array<N> implements NodeListOf<N> {
  constructor(...items: Array<N>) {
    super(...items)
  }

  public item(index: number): N {
    return this[index]
  }
}