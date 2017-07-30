import { FakeNodeList, createFakeNodeList } from './FakeNodeList'
import { equals, findIndex } from '167'

import { FakeEventTarget } from './FakeEventTarget'
import { FakeNamedNodeMap } from './FakeNamedNodeMap'

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
  attributes: FakeNamedNodeMap = new FakeNamedNodeMap()
  baseURI: string | null = null
  childNodes: FakeNodeList = createFakeNodeList()

  localName: string | null = null
  namespaceURI: string | null = null
  nodeName: string = '#text'
  nodeType: number = NodeType.TEXT_NODE
  nodeValue: string | null = null
  ownerDocument: Document // TODO
  parentElement: HTMLElement | null = null
  parentNode: Node | null = null
  previousSibling: Node | null = null

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

  protected _textContent: string

  public set textContent(textContent: string) {
    this._textContent = textContent
  }

  public get textContent(): string | null {
    if (this._textContent) return this._textContent

    if (this.nodeType === NodeType.TEXT_NODE) return ((this as any) as Text).data

    return this.childNodes.map(node => node.textContent).join('') || null
  }

  public get firstChild(): Node | null {
    return this.childNodes[0] || null
  }

  public get lastChild(): Node | null {
    return this.childNodes[this.childNodes.length - 1] || null
  }

  public get nextSibling(): Node | null {
    const { childNodes } = this.parentNode

    const index = findIndex(equals(this as Node), childNodes)

    if (index > -1) return childNodes[index + 1] || null

    return null
  }

  public appendChild<T extends Node>(newChild: T): T {
    if (this.nodeType === NodeType.ELEMENT_NODE) {
      ;(newChild as any).parentElement = this as any
    }

    ;(newChild as any).parentNode = this

    this.childNodes.push(newChild)

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
    const index = findIndex(equals(child), this.childNodes)

    for (let i = 0; i < this.childNodes.length; ++i) 
      if (this.childNodes[i].contains(child)) return true

    return index > -1
  }

  public hasAttributes(): boolean {
    return !!this.attributes.length
  }

  public hasChildNodes(): boolean {
    return !!this.childNodes.length
  }

  public insertBefore<T extends Node>(newChild: T, refChild: Node | null): T {
    if (equals(refChild, newChild)) return newChild

    const { childNodes } = this

    const nodeIndex = findIndex(equals(newChild), childNodes)
    const alreadyContainsNode = nodeIndex > -1

    if (this.nodeType === NodeType.ELEMENT_NODE) {
      ;(newChild as any).parentElement = this as any
    }

    ;(newChild as any).parentNode = this

    if (alreadyContainsNode) this.removeChild(newChild)

    if (refChild) {
      const index = findIndex(equals(refChild), childNodes)

      if (index > -1) {
        childNodes.splice(index, 0, newChild)
      } else {
        childNodes.push(newChild)
      }
    } else {
      childNodes.push(newChild)
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
    const index = findIndex(equals(oldChild), this.childNodes)

    if (index > -1) this.childNodes.splice(index, 1)

    return oldChild
  }

  public replaceChild<T extends Node>(newChild: Node, oldChild: T): T {
    const index = findIndex(equals(oldChild), this.childNodes)

    if (index > -1) {
      this.childNodes[index] = newChild
    }

    return oldChild
  }
}
