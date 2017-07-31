import { ArrayLikeImpl } from './helpers'
import { propEq } from '167'

export class HTMLCollectionImpl<El extends Element> extends ArrayLikeImpl<El>
  implements HTMLCollectionOf<El> {
  public namedItem(tagName: string): El {
    const index = this.findIndex(propEq('tagName', tagName.toUpperCase()))

    return this[index]
  }
}
