import { findIndex, propEq } from '167'

export function createFakeHTMLCollection<El extends Element = Element>(...items: Array<El>): FakeHTMLCollection<El> {
const list = new FakeHTMLCollection<El>(...items)

  return new Proxy(list, {
    get(target: FakeHTMLCollection<El>, property: keyof FakeHTMLCollection<El>) {
      const index = parseInt(property.toString(), 10)
    
      if (!Number.isNaN(index)) return target.array[index]

      return target[property]
    },

    set(target: FakeHTMLCollection<El>, property: keyof FakeHTMLCollection<El>, value: any) {
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

export class FakeHTMLCollection<El extends Element = Element> implements HTMLCollectionOf<El> {
  array: Array<El>
  [index: number]: El

  get length(): number {
    return this.array.length
  }

  set length(value: number) {
    this.array.length = value
  }

  constructor(...items: Array<El>) {
    this.array = items
  }

  public item(index: number): El {
    return this.array[index]
  }

  public namedItem(name: string): El {
    return this.item(findIndex(propEq<El>('tagName', name.toUpperCase()), this.array))
  }

  public push(...items: Array<El>) {
    this.array.push(...items)
  }
}
