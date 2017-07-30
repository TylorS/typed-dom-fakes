export function createFakeNodeList<N extends Node = Node>(): FakeNodeList<N> {
  const list = new FakeNodeList<N>()
  
  return new Proxy(list, {
    get(target: FakeNodeList<N>, property: keyof FakeNodeList<N>) {
      const index = parseInt(property.toString(), 10)
    
      if (!Number.isNaN(index)) return target.array[index]

      return target[property]
    },

    set(target: FakeNodeList<N>, property: keyof FakeNodeList<N>, value: any) {
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

export class FakeNodeList<N extends Node = Node> implements NodeListOf<N> {
  array: Array<N>
  [index: number]: N

  get length(): number {
    return this.array.length
  }

  set length(value: number) {
    this.array.length = value
  }

  constructor(...items: Array<N>) {
    this.array = items
  }

  public item(index: number): N {
    return this.array[index]
  }

  protected _html: string | null = null

  get html(): string | null {
    return this._html
  }

  set html(value: string) {
    this.length = 0
    this._html = value
  }

  public map<B>(f: (node: N) => B): Array<B> {
    return this.array.map(f)
  }

  public push(...items: Array<N>) {
    this.array.push(...items)
  }

  public splice(start: number, count: number, item?: N): Array<N> {
    return this.array.splice(start, count, item)
  }

  public filter(predicate: (node: Node) => boolean): FakeNodeList {
    const array = this.array.filter(predicate)

    this.array.length = array.length

    array.forEach((value, index) => {
      this.array[index] = value
    })
    
    return this
  }
}
