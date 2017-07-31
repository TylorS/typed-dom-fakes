import { ArrayLikeImpl } from './helpers'
import { propEq } from '167'

export class NamedNodeMapImpl extends ArrayLikeImpl<Attr> implements NamedNodeMap {
  public getNamedItem(name: string): Attr {
    const index = this.findIndex(propEq('name', name))

    return this[index]
  }

  public getNamedItemNS(namespaceURI: string | null, localName: string | null): Attr {
    // localName is deprecated in all modern browsers
    Function.prototype(localName)

    const index = this.findIndex(propEq('namespaceURI', namespaceURI))

    return this[index]
  }

  public item(index: number): Attr {
    return this[index]
  }

  public removeNamedItem(name: string): Attr {
    const index = this.findIndex(propEq('name', name))

    const attr = this[index]

    this.removeFromIndex(index)

    return attr
  }

  public removeNamedItemNS(namespaceURI: string | null, localName: string | null): Attr {
    Function.prototype(localName)

    const index = this.findIndex(propEq('namespaceURI', namespaceURI))

    const attr = this[index]

    this.removeFromIndex(index)

    return attr
  }

  public setNamedItem(arg: Attr): Attr {
    this.push(arg)

    return arg
  }

  public setNamedItemNS(arg: Attr): Attr {
    this.push(arg)

    return arg
  }
}
