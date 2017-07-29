import { findIndex, insert, remove } from '167'

import { FakeEventTarget } from './FakeEventTarget'
import { FakeNamedNodeMap } from './FakeNamedNodeMap'
import { FakeNodeList } from './FakeNodeList'

export const enum NodeType {
  ELEMENT_NODE = 1,
  TEXT_NODE = 3,
  PROCESSING_INSTRUCTION_NODE = 7,  
  COMMENT_NODE = 8,
  DOCUMENT_NODE = 9,
  DOCUMENT_TYPE_NODE = 10,
  DOCUMENT_FRAGMENT_NODE = 11,
}

export class FakeNode extends FakeEventTarget implements Node {
  attributes: NamedNodeMap = new FakeNamedNodeMap()
  baseURI: string | null = null
  childNodes: NodeList = new FakeNodeList()
  firstChild: Node | null = null
  lastChild: Node | null = null
  localName: string | null = null
  namespaceURI: string | null = null
  nextSibling: Node | null = null
  nodeName: string = '#text'
  nodeType: number = NodeType.TEXT_NODE
  nodeValue: string | null = null
  ownerDocument: Document // TODO
  parentElement: HTMLElement | null = null
  parentNode: Node | null = null
  previousSibling: Node | null = null
  textContent: string | null = ''

  // deprecated and should not be used
  // these are not truly implemented
  ATTRIBUTE_NODE: number
  CDATA_SECTION_NODE: number
  COMMENT_NODE: number
  DOCUMENT_FRAGMENT_NODE: number
  DOCUMENT_NODE: number
  DOCUMENT_POSITION_CONTAINED_BY: number
  DOCUMENT_POSITION_CONTAINS: number
  DOCUMENT_POSITION_DISCONNECTED: number
  DOCUMENT_POSITION_FOLLOWING: number
  DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: number
  DOCUMENT_POSITION_PRECEDING: number
  DOCUMENT_TYPE_NODE: number
  ELEMENT_NODE: number
  ENTITY_NODE: number
  ENTITY_REFERENCE_NODE: number
  NOTATION_NODE: number
  PROCESSING_INSTRUCTION_NODE: number
  TEXT_NODE: number

  public appendChild<T extends Node>(newChild: T): T {
    const i = this.childNodes.length

    if (this.nodeType === NodeType.ELEMENT_NODE) {
      ;(newChild as any).parentElement = this as any
    }

    this.childNodes[i] = newChild

    return newChild
  }

  /** TODO: IMPLEMENT CLONING */
  public cloneNode(deep?: boolean): Node {
    Function.prototype(deep)

    return this
  }

  /** TODO */
  public compareDocumentPosition(other: Node): number {
    Function.prototype(other)
    return 0
  }

  public contains(child: Node): boolean {
    const index = findIndex(node => node === child, this.childNodes)

    return index > -1
  }

  public hasAttributes(): boolean {
    return !!this.attributes.length
  }

  public hasChildNodes(): boolean {
    return !!this.childNodes.length
  }

  public insertBefore<T extends Node>(newChild: T, refChild: Node | null): T {
    const { childNodes } = this

    if (refChild) {
      const index = findIndex(child => child === refChild, childNodes)

      if (index > -1) {
        ;(this as any).childNodes = insert(index, newChild, childNodes) as any
      }
    }

    return newChild
  }

  public isDefaultNamespace(namespaceURI: string | null): boolean {
    return !!namespaceURI
  }

  public isEqualNode(node: Node): boolean {
    const keys = Object.keys(this) as Array<keyof Node>

    for (const key of keys) {
      const value = this[key]
      const nodeValue = node[key]

      if (value !== nodeValue) return false
    }

    return true
  }

  public isSameNode(other: FakeNode): boolean {
    return other === (this as any)
  }

  /** TODO */
  public lookupNamespaceURI(prefix: string | null): string | null {
    Function.prototype(prefix)

    return null
  }

  /** TODO */
  public lookupPrefix(namespaceURI: string | null): string | null {
    Function.prototype(namespaceURI)

    return null
  }

  /** TODO */
  public normalize(): void {
    return void 0
  }

  public removeChild<T extends Node>(oldChild: T): T {
    const index = findIndex(node => node === oldChild, this.childNodes)

    if (index > -1) {
      ;(this as any).childNodes = remove(index, 1, this.childNodes)
    }

    return oldChild
  }

  public replaceChild<T extends Node>(newChild: Node, oldChild: T): T {
    const index = findIndex(node => node === oldChild, this.childNodes)

    if (index > -1) {
      this.childNodes[index] = newChild
    }

    return oldChild
  }
}