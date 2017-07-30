import { EventTargetImpl } from '../EventTarget'
import { NamedNodeMapImpl } from '../NamedNodeMap'
import { NodeListImpl } from '../NodeList'
import { equals } from '167'

export const enum NODE_TYPE {
  ELEMENT_NODE = 1,
  TEXT_NODE = 3,
  PROCESSING_INSTRUCTION_NODE = 7,
  COMMENT_NODE = 8,
  DOCUMENT_NODE = 9,
  DOCUMENT_TYPE_NODE = 10,
  DOCUMENT_FRAGMENT_NODE = 11,
}

export class NodeImpl extends EventTargetImpl implements Node {
  attributes: NamedNodeMapImpl = new NamedNodeMapImpl()
  ownerDocument: Document // Needs to be assigned upon creation
  childNodes: NodeListImpl<Node> = new NodeListImpl()
  parentNode: NodeImpl // assigned with Node.appendChild or Node.insertBefore
  nodeName: string = '#text' // defaults to text node
  nodeType: NODE_TYPE = NODE_TYPE.TEXT_NODE
  nodeValue: string = ''
  parentElement: HTMLElement | null = null // Needs to be assigned upon creation
  accessKey: string | null = null

  // deprecated or obsoleted before DOM4 API
  readonly localName: string | null = null
  readonly namespaceURI: string | null // assigned upon creation
  readonly ATTRIBUTE_NODE: number
  readonly CDATA_SECTION_NODE: number
  readonly COMMENT_NODE: number
  readonly DOCUMENT_FRAGMENT_NODE: number
  readonly DOCUMENT_NODE: number
  readonly DOCUMENT_POSITION_CONTAINED_BY: number
  readonly DOCUMENT_POSITION_CONTAINS: number
  readonly DOCUMENT_POSITION_DISCONNECTED: number
  readonly DOCUMENT_POSITION_FOLLOWING: number
  readonly DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: number
  readonly DOCUMENT_POSITION_PRECEDING: number
  readonly DOCUMENT_TYPE_NODE: number
  readonly ELEMENT_NODE: number
  readonly ENTITY_NODE: number
  readonly ENTITY_REFERENCE_NODE: number
  readonly NOTATION_NODE: number
  readonly PROCESSING_INSTRUCTION_NODE: number
  readonly TEXT_NODE: number

  constructor(document: Document, other: Record<string, any> = {}) {
    super()
    this.ownerDocument = document

    for (const key in other) this[key as keyof this] = other[key]
  }

  get baseURI(): string {
    return this.ownerDocument.location.origin
  }

  get firstChild(): Node {
    return this.childNodes[0]
  }

  get lastChild(): Node {
    return this.childNodes[this.childNodes.length - 1]
  }

  get nextSibling(): Node | null {
    const { parentNode: { childNodes } } = this

    const index = childNodes.findIndex(equals(this))

    return childNodes[index + 1] || null
  }

  get previousSibling(): Node | null {
    const { parentNode: { childNodes } } = this

    const index = childNodes.findIndex(equals(this))

    return childNodes[index - 1] || null
  }

  get textContent(): string | null {
    if (this.nodeType === NODE_TYPE.TEXT_NODE) return ((this as any) as Text).data

    return null
  }

  public appendChild<T extends Node>(node: T): T {
    this.childNodes.push(node)

    return node
  }

  public cloneNode(): Node {
    return new NodeImpl(this.ownerDocument, this)
  }

  public contains(node: Node): boolean {
    const { childNodes } = this

    for (let i = 0; i < childNodes.length; ++i) {
      const childNode = childNodes[i]

      if (childNode === node || childNode.contains(node)) return true
    }

    return false
  }

  public hasAttributes(): boolean {
    return this.attributes.length > 0
  }

  public hasChildNodes(): boolean {
    return this.childNodes.length > 0
  }

  public insertBefore<N extends Node>(newNode: N, referenceNode: NodeImpl | null): N {
    this.childNodes.insertBefore(newNode, referenceNode as Node | null)

    return newNode
  }

  public isEqualNode(otherNode: Node): boolean {
    return equals(otherNode, this)
  }

  public isSameNode(otherNode: Node): boolean {
    return otherNode === this
  }

  public lookupNamespaceURI(): string | null {
    return this.namespaceURI
  }

  public removeChild<N extends Node>(child: N): N {
    const { childNodes } = this

    const index = childNodes.findIndex(equals(child))

    if (index > -1) this.childNodes.remove(index, 1)

    return child
  }

  public replaceChild<N extends Node>(newChild: Node, oldChild: N): N {
    const { childNodes } = this

    const index = childNodes.findIndex(equals(oldChild))

    if (index > -1) {
      childNodes.remove(index, 1)
      childNodes.insertBefore(newChild as Node, childNodes[index] || null)
    }

    return oldChild
  }

  // UNIMPLEMENTED DUE TO LACK OF CURRENT NEED //
  //-------------------------------------------//

  public compareDocumentPosition(otherNode: Node) {
    Function.prototype(otherNode)

    return 0
  }

  public isDefaultNamespace(): boolean {
    return false
  }

  public lookupPrefix(): string | null {
    return null
  }

  public normalize(): void {}
}
