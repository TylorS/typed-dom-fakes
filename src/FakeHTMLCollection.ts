import { findIndex, propEq } from '167'

export class FakeHTMLCollection<El extends Element = Element> extends Array<El>
  implements HTMLCollectionOf<El> {
  constructor(...items: Array<El>) {
    super(...items)
  }

  public item(index: number): El {
    return this[index]
  }

  public namedItem(name: string): El {
    return this.item(findIndex(propEq<El>('tagName', name), this))
  }
}
