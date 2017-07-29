import { FakeAttr } from './FakeAttr'
import { findIndex } from '167'

export class FakeNamedNodeMap extends Array<FakeAttr> implements NamedNodeMap {
  public getNamedItem(name: string): FakeAttr {
    const index = findIndex(attr => attr.name === name, this)

    return this[index]
  }

  /** TODO */
  public getNamedItemNS(namespaceURI: string | null, localName: string | null): FakeAttr {
    Function.prototype(namespaceURI, localName)

    return this[0]
  }

  public item(index: number): FakeAttr {
    return this[index]
  }

  public removeNamedItem(name: string): FakeAttr {
    const index = findIndex(attr => attr.name === name, this)

    return this.splice(index, 1)[0]
  }

  /** TODO */
  public removeNamedItemNS(namespaceURI: string | null, localName: string | null): FakeAttr {
    Function.prototype(namespaceURI, localName)

    return this[0]
  }

  public setNamedItem(arg: FakeAttr): FakeAttr {
    this.push(arg)

    return arg
  }

  public setNamedItemNS(arg: FakeAttr): FakeAttr {
    this.push(arg)

    return arg
  }
}
