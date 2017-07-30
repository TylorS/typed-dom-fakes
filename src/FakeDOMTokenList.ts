import { equals, findIndex } from '167'

export function createDOMTokenList(): FakeDOMTokenList {
  const list = new FakeDOMTokenList()

  return new Proxy(list, {
    get(target: FakeDOMTokenList, property: keyof FakeDOMTokenList) {
      const index = parseInt(property.toString(), 10)
    
      if (!Number.isNaN(index)) return target.array[index]

      return target[property]
    },

    set(target: FakeDOMTokenList, property: keyof FakeDOMTokenList, value: any) {
      const index = parseInt(property.toString(), 10)
      
      if (!Number.isNaN(index)) {
        target.array[index] = value
      } else {
        target[property] = value
      }

      return true
    }
  })
}

export class FakeDOMTokenList {
  [key: number]: string

  array: Array<string> = []

  get length(): number {
    return this.array.length
  }

  set length(value: number) {
    this.array.length = value
  }

  public add(...tokens: Array<string>): void {
    this.array.push(...tokens)
  }

  public contains(token: string): boolean {
    return this.array.indexOf(token) > -1
  }

  public item(index: number): string {
    return this.array[index]
  }

  public remove(...tokens: Array<string>): void {
    for (const token of tokens) this.removeItem(token)
  }

  public toggle(token: string, force?: boolean): boolean {
    Function.prototype(force)

    const index = findIndex(equals(token), this.array)

    if (index > -1) {
      this.removeItem(token)

      return false
    }

    this.add(token)

    return true
  }

  public toString() {
    return this.array.join(' ')
  }

  private removeItem(item: string) {
    const index = findIndex(equals(item), this.array)

    if (index > -1) this.array.splice(index, 1)
  }

  public join(separator: string) {
    return this.array.join(separator)
  }
}
