import { NODE_TYPE, NodeImpl } from '../Node'
import { equals, propEq, reverse } from '167'

import { AttrImpl } from '../Attr'
import { DOMTokenListImpl } from '../DOMTokenList'
import { EventImpl } from '../Event'
import { HTMLCollectionImpl } from '../HTMLCollection'
import { NodeListImpl } from '../NodeList'
import { VOID_ELEMENTS } from './constants'
import { hasCssSelector } from './hasCssSelector'

const CLASS_NAME_SEPARATOR: string = ` `

export class ElementImpl extends NodeImpl implements Element {
  classList: DOMTokenListImpl = new DOMTokenListImpl()
  tagName: string // assigned in constructor
  id: string

  // unimplemented due to lack of current need
  clientLeft: number = 0
  clientTop: number = 0
  clientWidth: number
  clientHeight: number = 0
  msContentZoomFactor: number = 0
  msRegionOverflow: string
  readonly prefix: string | null = null
  readonly scrollHeight: number = 0
  scrollLeft: number = 0
  scrollTop: number = 0
  readonly scrollWidth: number = 0
  readonly assignedSlot: HTMLSlotElement | null = null
  slot: string
  readonly shadowRoot: ShadowRoot | null = null

  // event handlers
  onariarequest: (this: Element, ev: Event) => any
  oncommand: (this: Element, ev: Event) => any
  ongotpointercapture: (this: Element, ev: PointerEvent) => any
  onlostpointercapture: (this: Element, ev: PointerEvent) => any
  onmsgesturechange: (this: Element, ev: MSGestureEvent) => any
  onmsgesturedoubletap: (this: Element, ev: MSGestureEvent) => any
  onmsgestureend: (this: Element, ev: MSGestureEvent) => any
  onmsgesturehold: (this: Element, ev: MSGestureEvent) => any
  onmsgesturestart: (this: Element, ev: MSGestureEvent) => any
  onmsgesturetap: (this: Element, ev: MSGestureEvent) => any
  onmsgotpointercapture: (this: Element, ev: MSPointerEvent) => any
  onmsinertiastart: (this: Element, ev: MSGestureEvent) => any
  onmslostpointercapture: (this: Element, ev: MSPointerEvent) => any
  onmspointercancel: (this: Element, ev: MSPointerEvent) => any
  onmspointerdown: (this: Element, ev: MSPointerEvent) => any
  onmspointerenter: (this: Element, ev: MSPointerEvent) => any
  onmspointerleave: (this: Element, ev: MSPointerEvent) => any
  onmspointermove: (this: Element, ev: MSPointerEvent) => any
  onmspointerout: (this: Element, ev: MSPointerEvent) => any
  onmspointerover: (this: Element, ev: MSPointerEvent) => any
  onmspointerup: (this: Element, ev: MSPointerEvent) => any
  ontouchcancel: (ev: TouchEvent) => any
  ontouchend: (ev: TouchEvent) => any
  ontouchmove: (ev: TouchEvent) => any
  ontouchstart: (ev: TouchEvent) => any
  onwebkitfullscreenchange: (this: Element, ev: Event) => any
  onwebkitfullscreenerror: (this: Element, ev: Event) => any
  onpointercancel: (this: GlobalEventHandlers, ev: PointerEvent) => any
  onpointerdown: (this: GlobalEventHandlers, ev: PointerEvent) => any
  onpointerenter: (this: GlobalEventHandlers, ev: PointerEvent) => any
  onpointerleave: (this: GlobalEventHandlers, ev: PointerEvent) => any
  onpointermove: (this: GlobalEventHandlers, ev: PointerEvent) => any
  onpointerout: (this: GlobalEventHandlers, ev: PointerEvent) => any
  onpointerover: (this: GlobalEventHandlers, ev: PointerEvent) => any
  onpointerup: (this: GlobalEventHandlers, ev: PointerEvent) => any
  onwheel: (this: GlobalEventHandlers, ev: WheelEvent) => any

  // ElementImpl specific
  protected _innerHTML: string
  protected _outerHTML: string

  constructor(document: Document, tagName: string, options: Record<string, any> = {}) {
    super(document, options)

    this.tagName = tagName.toUpperCase()
    this.nodeName = tagName.toLowerCase()
    this.nodeType = NODE_TYPE.ELEMENT_NODE
  }

  get children(): HTMLCollectionImpl<Element> {
    const nodes = this.childNodes.filter(isElement) as NodeListImpl<Element>
    const collection = new HTMLCollectionImpl()

    for (let i = 0; i < nodes.length; ++i) collection[i] = nodes[i]

    return collection
  }

  get className(): string {
    if (!this.classList) this.classList = new DOMTokenListImpl()

    let str = ''

    for (let i = 0; i < this.classList.length; ++i) {
      str += this.classList[i]

      if (i > 0 || i < this.classList.length - 1) str += CLASS_NAME_SEPARATOR
    }

    return str.trim()
  }

  set className(className: string) {
    if (!this.classList) this.classList = new DOMTokenListImpl()

    this.classList.length = 0

    const classListTokens = className
      .trim()
      .split(CLASS_NAME_SEPARATOR)
      .filter(Boolean)
      .map(str => str.trim())

    this.classList.length = classListTokens.length

    for (let i = 0; i < classListTokens.length; ++i) this.classList[i] = classListTokens[i]
  }

  // TODO: replace children with elements from parse HTML? -- is this needed behavior?
  get innerHTML(): string {
    if (this._innerHTML) return this._innerHTML

    const childNodes = Array.from(this.childNodes)

    if (childNodes.length > 0)
      return childNodes.map(node => (node as Element).outerHTML || node.textContent).join('')

    return this.textContent
  }

  set innerHTML(value: string) {
    this._innerHTML = value
  }

  // TODO: support attributes -- if needed
  get outerHTML(): string {
    if (this._outerHTML) return this._outerHTML

    const { nodeName } = this

    let str = '<' + nodeName + this.propertiesToString()

    if (VOID_ELEMENTS[nodeName]) return str + ` />`

    str += `>` + (this.textContent || '')

    return str + '</' + nodeName + '>'
  }

  protected propertiesToString(): string {
    let str = ''

    for (const key in this) {
      if (this.hasOwnProperty(key)) {
        const value = this[key]

        const typeOfValue = typeof value

        if (typeOfValue === 'string' || typeOfValue === 'number' || typeOfValue === 'boolean')
          str + ` ${String(key)}='${String(value)}'`
      }
    }

    return str
  }

  set outerHTML(value: string) {
    this._outerHTML = value
  }

  get childElementCount(): number {
    return this.children.length
  }

  get firstElementChild(): Element | null {
    return this.children[0] || null
  }

  get lastElementChild(): Element | null {
    return this.children[this.children.length - 1] || null
  }

  get nextElementSibling(): Element | null {
    const { parentElement } = this

    if (!parentElement) return null

    const children = parentElement.children as HTMLCollectionImpl<Element>

    const index = children.findIndex(equals(this))

    if (index === -1) return null

    return children[index + 1] || null
  }

  get previousElementSibling(): Element | null {
    const { parentElement } = this

    if (!parentElement) return null

    const children = parentElement.children as HTMLCollectionImpl<Element>

    const index = children.findIndex(equals(this))

    if (index === -1) return null

    return children[index - 1] || null
  }

  public getAttribute(name: string): string {
    return this.getAttributeNode(name).nodeValue
  }

  public getAttributeNode(name: string): Attr {
    const index = this.attributes.findIndex(propEq('name', name))

    return this.attributes[index]
  }

  public getAttributeNodeNS(namespaceURI: string): Attr {
    const index = this.attributes.findIndex(propEq('namespaceURI', namespaceURI))

    return this.attributes[index]
  }

  public getAttributeNS(namespaceURI: string) {
    return this.getAttributeNodeNS(namespaceURI).nodeValue
  }

  public getElementsByTagName(tagName: string): NodeListImpl<Element> {
    const { children } = this
    const nodeList = new NodeListImpl<Element>()

    for (let i = 0; i < children.length; ++i) {
      const child = children[i]

      if (child.matches(tagName)) nodeList.push(child)

      const childrenMatches = child.getElementsByTagName(tagName) as NodeListImpl<Element>

      childrenMatches.forEach(node => nodeList.push(node))
    }

    return nodeList
  }

  public hasAttribute(name: string): boolean {
    return this.attributes.findIndex(propEq('nodeName', name)) > -1
  }

  public removeAttribute(name: string) {
    const { attributes } = this

    const index = attributes.findIndex(propEq('nodeName', name))

    if (index > -1) this.attributes.removeFromIndex(index, 1)
  }

  public setAttribute(name: string, value: string) {
    const attr = new AttrImpl(this.ownerDocument, name, value)

    this.setAttributeNode(attr)
  }

  public setAttributeNode(attr: AttrImpl) {
    attr.parentNode = this

    if (typeof ((this as any) as HTMLElement).click === 'function')
      attr.parentElement = (this as any) as HTMLElement

    this.attributes.push(attr)

    return attr
  }

  public getElementsByClassName(className: string): NodeListImpl<Element> {
    const { children } = this
    const nodeList = new NodeListImpl<Element>()

    for (let i = 0; i < children.length; ++i) {
      const child = children[i]

      if (child.matches(`.${className}`)) nodeList.push(child)

      const childrenMatches = child.getElementsByClassName(className)

      for (let j = 0; j < childrenMatches.length; ++j) nodeList.push(childrenMatches[i])
    }

    return nodeList
  }

  public matches(cssSelector: string): boolean {
    return hasCssSelector(cssSelector, this)
  }

  public querySelector(cssSelector: string): Element | null {
    const { children } = this

    for (let i = 0; i < children.length; ++i) {
      const child = children[i]

      if (child.matches(cssSelector)) return child

      const childMatch = child.querySelector(cssSelector)

      if (childMatch) return childMatch
    }

    return null
  }

  public querySelectorAll(cssSelector: string): NodeListImpl<Element> {
    const { children } = this
    const nodeList = new NodeListImpl<Element>()

    for (let i = 0; i < children.length; ++i) {
      const child = children[i]

      if (child.matches(cssSelector)) nodeList.push(child)

      const childrenMatches = child.querySelectorAll(cssSelector) as NodeListImpl<Element>

      for (let j = 0; j < childrenMatches.length; ++j) nodeList.push(childrenMatches[j])
    }

    return nodeList
  }

  public dispatchEvent(event: EventImpl): boolean {
    const parentElements = findParentElements(this)

    let success: boolean

    const trueOr = (bool: boolean) => (success ? success : bool)

    for (const element of reverse(parentElements))
      success = trueOr(element.dispatchToCaptureListeners(event))

    success = trueOr(super.dispatchEvent(event))

    if (this[`on${event.type}` as keyof this]) (this[`on${event.type}` as keyof this] as any)(event)

    for (const element of parentElements) success = trueOr(element.dispatchToBubbleListeners(event))

    return success
  }

  public remove() {
    const { parentElement } = this

    if (parentElement) parentElement.removeChild(this)
  }

  // intentionally unimplemented due to current lack of need or due to deprecation
  // only here for TypeScript implementation requirements
  public getBoundingClientRect(): ClientRect {
    return {} as ClientRect
  }

  public getClientRects(): ClientRectList {
    return {} as ClientRectList
  }

  public getElementsByTagNameNS(
    namespaceURI: 'http://www.w3.org/1999/xhtml',
    localName: string
  ): HTMLCollectionOf<HTMLElement>
  public getElementsByTagNameNS(
    namespaceURI: 'http://www.w3.org/2000/svg',
    localName: string
  ): HTMLCollectionOf<SVGElement>
  public getElementsByTagNameNS<El extends HTMLElement>(): HTMLCollectionOf<El> {
    return new HTMLCollectionImpl<El>()
  }

  public hasAttributeNS(): boolean {
    return false
  }

  public msGetRegionContent(): MSRangeCollection {
    return {} as MSRangeCollection
  }

  public msGetUntransformedBounds(): ClientRect {
    return {} as ClientRect
  }

  public msMatchesSelector(): boolean {
    return false
  }

  public msReleasePointerCapture() {}
  public msSetPointerCapture() {}
  public msZoomTo() {}

  public releasePointerCapture() {}

  public removeAttributeNode(attr: Attr) {
    return attr
  }
  public removeAttributeNS() {}

  public requestFullscreen() {}
  public requestPointerLock() {}

  public setAttributeNodeNS(): any {}
  public setAttributeNS(): any {}
  public setPointerCapture() {}

  public webkitMatchesSelector(): boolean {
    return false
  }

  public webkitRequestFullScreen() {}
  public webkitRequestFullscreen() {}

  closest(): Element | null {
    return null
  }

  scrollIntoView(): void {}
  scroll(): void {}
  scrollTo(): void {}
  scrollBy(): void {}

  insertAdjacentElement(): Element | null {
    return null
  }
  insertAdjacentHTML(): void {}
  insertAdjacentText(): void {}
  attachShadow(): ShadowRoot {
    return {} as ShadowRoot
  }
}

function isElement(x: Node): x is Element {
  return (x as Element).hasOwnProperty('tagName')
}

function findParentElements(element: ElementImpl): Array<ElementImpl> {
  const elements: Array<ElementImpl> = []

  let currentParent = element.parentElement

  while (currentParent) {
    elements.push((currentParent as any) as ElementImpl)

    currentParent = currentParent.parentElement
  }

  return elements
}
