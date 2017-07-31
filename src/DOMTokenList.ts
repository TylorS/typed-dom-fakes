import { contains, indexOf } from '167'

import { ArrayLikeImpl } from './helpers'

export class DOMTokenListImpl extends ArrayLikeImpl<string> implements DOMTokenList {
  public add(selector: string): void {
    for (let i = 0; i < this.length; ++i) if (selector === this[i]) return void 0

    this.push(selector)
  }

  public contains(selector: string): boolean {
    return contains(selector, this)
  }

  public item(index: number): string {
    return this[index]
  }

  public remove(...selectors: Array<string>): void {
    for (const selector of selectors) {
      const index = indexOf(selector, this) as number

      if (index > -1) super.removeFromIndex(index)
    }
  }

  public toggle(selector: string, force?: boolean): boolean {
    Function.prototype(force) // force behavior is not currently needed

    const index = indexOf(selector, this) as number

    if (index > -1) return this.removeFromIndex(index, 1), false

    this.add(selector)

    return true
  }
}
