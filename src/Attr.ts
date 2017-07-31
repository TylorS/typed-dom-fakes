import { NodeImpl } from './Node'

export class AttrImpl extends NodeImpl implements Attr {
  name: string // assigned in constructor
  ownerElement: Element

  // unimplemented
  readonly prefix: string | null
  readonly specified: boolean

  constructor(document: Document, name: string, value: string) {
    super(document)

    this.name = name
    this.nodeValue = value
    this.nodeName = '#Attr'
  }

  get value(): string {
    return this.nodeValue
  }

  set value(value: string) {
    this.nodeValue = value
  }
}
