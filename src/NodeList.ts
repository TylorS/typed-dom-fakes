import { ArrayLike } from './helpers'

export class NodeListImpl<A extends Node> extends ArrayLike<A> implements NodeListOf<A> {
  public item(index: number) {
    return this[index]
  }
}
