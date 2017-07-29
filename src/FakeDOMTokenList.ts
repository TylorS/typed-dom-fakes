import { equals, findIndex } from '167'

export class FakeDOMTokenList extends Array<string> implements DOMTokenList {
  public add(...tokens: Array<string>): void {
    this.push(...tokens)
  }

  public contains(token: string): boolean {
    return this.indexOf(token) > -1
  }

  public item(index: number): string {
    return this[index]
  }

  public remove(...tokens: Array<string>): void {
    for (const token of tokens)
      this.removeItem(token)
  }

  public toggle(token: string, force?: boolean): boolean {
    Function.prototype(force)
  
    const index = findIndex(equals(token), this)

    if (index > -1) {
      this.removeItem(token)

      return false
    }

    this.add(token)

    return true
  }

  public toString() {
    return this.join(' ')
  }

  private removeItem(item: string) {
    const index = findIndex(equals(item), this)

    if (index > -1)
      this.splice(index, 1)
  }
}