import { ArrayLikeImpl } from './helpers'

export class NodeListImpl<A extends Node> extends ArrayLikeImpl<A> implements NodeListOf<A> {
  public item(index: number) {
    return this[index]
  }
}
