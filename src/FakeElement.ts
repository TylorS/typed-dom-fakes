import { FakeDOMTokenList, createDOMTokenList } from './FakeDOMTokenList'
import { FakeHTMLCollection, createFakeHTMLCollection } from './FakeHTMLCollection'
import { FakeNode, NodeType } from './FakeNode'
import { FakeNodeList, createFakeNodeList } from './FakeNodeList'
import { both, copy, equals, find, findIndex, propEq } from '167'
import { isStandardAttribute, propToAttr } from './html-attributes'

import { FakeAttr } from './FakeAttr'
import { FakeClientRectList } from './FakeClientRectList'
import { FakeEvent } from './FakeEvent'
import { FakeNamedNodeMap } from './FakeNamedNodeMap'
import { parseSelector } from './parseSelector'

const VOID_ELEMENTS: any = {
  AREA: true,
  BASE: true,
  BR: true,
  COL: true,
  EMBED: true,
  HR: true,
  IMG: true,
  INPUT: true,
  KEYGEN: true,
  LINK: true,
  META: true,
  PARAM: true,
  SOURCE: true,
  TRACK: true,
  WBR: true,
}

export class FakeElement extends FakeNode implements Element {
  classList: FakeDOMTokenList = createDOMTokenList()
  clientHeight: number = 0
  clientLeft: number = 0
  clientTop: number = 0
  clientWidth: number = 0
  id: string = ''
  msContentZoomFactor: number = 0
  msRegionOverflow: string = ''
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
  prefix: string | null = null
  scrollHeight: number = 0
  scrollLeft: number = 0
  scrollTop: number = 0
  scrollWidth: number = 0
  tagName: string
  assignedSlot: HTMLSlotElement | null = null
  slot: string = ''
  shadowRoot: ShadowRoot | null = null

  get className(): string {
    return this.classList.join(' ')
  }

  set className(value: string) {
    if (!this.classList) this.classList = new FakeDOMTokenList()

    const { classList } = this

    classList.length = 0

    const classNames = value.split(' ')

    for (const className of classNames) classList.add(className)
  }

  protected _innerHTML: string | null = null

  get innerHTML(): string {
    if (this._innerHTML) return this._innerHTML

    const { childNodes } = this

    let html: string = childNodes.html || ''

    for (let i = 0; i < childNodes.length; ++i) {
      const childNode = childNodes[i]

      html += (childNode as Element).outerHTML || (childNode as Text).textContent
    }

    return html.trim()
  }

  set innerHTML(value: string | null) {
    this._innerHTML = value
  }

  protected _outerHTML: string | null = null

  get outerHTML(): string {
    const that = this
    const outerHTML: Array<string> = []

    const { attributes } = this

    function shouldOutputProp(key: keyof typeof that, attrName: string): boolean {
      if (that.getAttribute(attrName)) return false
      else if (key === 'className' || !that[key]) return false

      return isPrimitive(that[key])
    }

    function stringify(arr: Array<{ name: string; value: string }>) {
      const attr: Array<string> = []

      arr.forEach(function(a: { name: string; value: any }) {
        attr.push(a.name + '=' + '"' + escapeAttribute(String(a.value)) + '"')
      })

      return attr.length ? ' ' + attr.join(' ') : ''
    }

    function isPrimitive(x: any): x is string | number | boolean {
      return typeof x === 'string' || typeof x === 'number' || typeof x === 'boolean'
    }

    function properties() {
      const props: Array<{ name: string; value: string }> = []
      for (const key in that) {
        if (key === 'outerHTML' || !that.hasOwnProperty(key) || !isPrimitive(that[key])) continue

        const attrName = propToAttr(key)

        if (
          isPrimitive(that[key]) &&
          isStandardAttribute(attrName, that.nodeName) &&
          shouldOutputProp(key, attrName)
        ) {
          props.push({ name: attrName, value: that[key] })
        }
      }

      return props.length ? ' ' + stringify(props) : ''
    }

    outerHTML.push(`<${this.nodeName.toLowerCase()}${properties()}${stringify(attributes)}>`)

    if (!VOID_ELEMENTS[this.nodeName.toUpperCase()]) {
      outerHTML.push(this.innerHTML)
      outerHTML.push('</' + this.nodeName + '>')
    }

    return outerHTML.filter(Boolean).join('')
  }

  // FakeElement specific
  public bottom: number = 0
  public left: number = 0
  public right: number = 0
  public top: number = 0

  public get children(): FakeHTMLCollection {
    const nodeList = this.childNodes.filter(isElement)

    return createFakeHTMLCollection(...Array.from<any>(nodeList))
  }

  public get height(): number {
    return this.bottom - this.top
  }

  public get width(): number {
    return this.right - this.left
  }

  public get childElementCount(): number {
    return this.children.length
  }

  get firstElementChild(): Element | null {
    return this.children[0] || null
  }

  get lastElementChild(): Element | null {
    const elements = this.children

    return elements[elements.length] || null
  }

  /** TODO */
  public get nextElementSibling(): Element | null {
    const { parentElement } = this

    if (!parentElement) return null

    const children = parentElement.children

    const index = findIndex(equals(this as Element), children)

    return children[index + 1] || null
  }

  public get previousElementSibling(): Element | null {
    const { parentElement } = this

    if (!parentElement) return null

    const children = parentElement.children

    const index = findIndex(equals(this as Element), children)

    return children[index - 1] || null
  }

  constructor(tagName: string) {
    super()

    this.nodeType = NodeType.ELEMENT_NODE
    this.nodeName = tagName.toLowerCase()
    this.tagName = tagName.toUpperCase()

    this.classList = new FakeDOMTokenList()
  }

  public getAttribute(name: string): string | null {
    const attr = this.getAttributeNode(name)

    if (!attr) return null

    return attr.value
  }

  public getAttributeNode(name: string): Attr {
    const { attributes } = this

    return find(propEq('name', name), attributes) as Attr
  }

  public getAttributeNodeNS(namespaceURI: string, localName: string): Attr {
    return this.attributes.getNamedItemNS(namespaceURI, localName)
  }

  public getAttributeNS(namespaceURI: string, localName: string): string {
    return this.getAttributeNodeNS(namespaceURI, localName).value
  }

  public getBoundingClientRect(): ClientRect {
    return this
  }

  public getClientRects(): ClientRectList {
    return new FakeClientRectList()
  }

  public getElementsByTagName(name: string): NodeListOf<FakeElement> {
    const { childNodes } = this
    const nodeList = createFakeNodeList<FakeElement>()

    for (let i = 0; i < childNodes.length; ++i) {
      const childNode = childNodes[i]

      if (isElement(childNode)) {
        if (childNode.tagName === name) nodeList.push(childNode as FakeElement)

        nodeList.push(...copy((childNode as FakeElement).getElementsByTagName(name)))
      }
    }

    return nodeList
  }

  public getElementsByClassNameNS<El extends Element = FakeElement>(
    namespaceURI: string,
    localName: string
  ): HTMLCollectionOf<El> {
    const { childNodes } = this
    const htmlCollection = new FakeHTMLCollection<El>()

    for (let i = 0; i < childNodes.length; ++i) {
      const childNode = childNodes[i] as FakeElement

      if (isElement(childNode)) {
        if (matchesNamespace<El>(childNode, namespaceURI, localName)) {
          htmlCollection.push(childNode)
        }

        htmlCollection.push(
          ...copy<El>(
            childNode.getElementsByClassNameNS(namespaceURI, localName) as HTMLCollectionOf<El>
          )
        )
      }
    }

    return htmlCollection
  }

  public getElementsByTagNameNS<El extends HTMLElement>(tagName: string): FakeHTMLCollection<El> {
    return new FakeHTMLCollection<El>(
      ...Array.from<El>(this.getElementsByTagName(tagName as keyof ElementListTagNameMap) as any)
    )
  }

  public hasAttribute(name: string): boolean {
    const { attributes } = this

    return !!find(propEq<Attr>('name', name), attributes)
  }

  public hasAttributeNS(namespaceURI: string, localName: string): boolean {
    const { attributes } = this

    return !!find(
      attr => attr.namespaceURI === namespaceURI && attr.localName === localName,
      attributes
    )
  }

  /** Not really implemented */
  public msGetRegionContent(): MSRangeCollection {
    return new MSRangeCollection()
  }

  public msGetUntransformedBounds(): ClientRect {
    return this.getBoundingClientRect()
  }

  public msMatchesSelector(selector: string): boolean {
    return this.matches(selector)
  }

  public msReleasePointerCapture(pointerId: number): void {
    Function.prototype(pointerId)
  }

  public msSetPointerCapture(pointerId: number): void {
    Function.prototype(pointerId)
  }

  public msZoomTo(args: MsZoomToOptions): void {
    Function.prototype(args)
  }

  public releasePointerCapture(pointerId: number): void {
    Function.prototype(pointerId)
  }

  public removeAttribute(qualifiedName: string): void {
    const attributes = this.attributes

    const index = findIndex(propEq<Attr>('name', qualifiedName), attributes)

    if (index > -1) this.attributes.splice(index, 1)
  }

  public removeAttributeNode(oldAttr: Attr): Attr {
    const attributes = this.attributes as FakeNamedNodeMap

    const index = findIndex(equals(oldAttr), attributes)

    return attributes.splice(index, 1)[0]
  }

  public removeAttributeNS(namespaceURI: string, localName: string): void {
    const attributes = this.attributes as FakeNamedNodeMap

    const index = findIndex(
      both<Attr>(propEq('namespaceURI', namespaceURI), propEq('localName', localName)),
      attributes
    )

    if (index > -1) attributes.splice(index, 1)
  }

  /** TODO */
  public requestFullscreen(): void {
    return void 0
  }

  public requestPointerLock(): void {
    return void 0
  }

  public setAttribute(name: string, value: string): void {
    const attr = new FakeAttr(name, value)

    attr.ownerElement = this

    this.removeAttribute(name)
    ;(this.attributes as FakeNamedNodeMap).push(attr)
  }

  public setAttributeNode(attr: FakeAttr): FakeAttr {
    this.removeAttribute(attr.name)
    ;(this.attributes as FakeNamedNodeMap).push(attr)

    return attr
  }

  public setAttributeNodeNS(newAttr: FakeAttr): FakeAttr {
    return this.setAttributeNode(newAttr)
  }

  public setAttributeNS(namespaceURI: string, name: string, value: string): void {
    const attr = new FakeAttr(name, value)

    attr.ownerElement = this
    attr.namespaceURI = namespaceURI

    this.setAttributeNode(attr)
  }

  /** TODO */
  public setPointerCapture(pointerId: number): void {
    Function.prototype(pointerId)
  }

  public webkitMatchesSelector(selectors: string): boolean {
    return this.matches(selectors)
  }

  public webkitRequestFullscreen(): void {
    return void 0
  }

  public webkitRequestFullScreen(): void {
    return void 0
  }

  public getElementsByClassName<El extends Element>(className: string): NodeListOf<El> {
    const childNodes = this.childNodes as FakeNodeList
    const nodeList = createFakeNodeList<El>()

    for (let i = 0; i < childNodes.length; ++i) {
      const childNode = childNodes[i]

      if (isElement(childNode)) {
        if (childNode.classList.contains(className))
          nodeList.push(...copy<El>(childNode.getElementsByClassName(className) as NodeListOf<El>))
      }
    }

    return nodeList
  }

  /** TODO: Implement more complex selectors */
  public matches(selector: string): boolean {
    if (selector === '*') return true

    if (selector.indexOf(' ') > -1) {
      const cssSelectors: Array<string> = selector.split(' ').filter(Boolean).map(str => str.trim())

      let i = cssSelectors.length - 1

      if (!this.matches(cssSelectors[i])) return false

      while (--i >= 0) {
        const parentMatches = traverseParentElements(
          element => element.matches(cssSelectors[i]),
          this
        )

        if (!parentMatches) return false
      }

      return true
    }

    if (selector.startsWith(`[`) && selector.endsWith(']')) {
      selector = selector.slice(1, selector.length - 1)

      const [name, value] = selector.split('=')

      const attr = this.getAttribute(name)

      return attr && attr.valueOf() === value.slice(1, value.length - 1)
    }

    return matchBasicCssSelector(selector, this)
  }

  /** TODO */
  public closest(selector: string): Element | null {
    Function.prototype(selector)

    return null
  }

  /** TODO */
  public scrollIntoView(arg?: boolean | ScrollIntoViewOptions): void {
    Function.prototype(arg)
  }

  /** TODO */
  public scroll(x?: number | ScrollToOptions, y?: number): void {
    Function.prototype(x, y)
  }

  /** TODO */
  public scrollTo(x?: number | ScrollToOptions, y?: number): void {
    Function.prototype(x, y)
  }

  /** TODO */
  public scrollBy(x?: number | ScrollToOptions, y?: number): void {
    Function.prototype(x, y)
  }

  /** TODO */
  public insertAdjacentElement(position: InsertPosition, insertedElement: Element): Element | null {
    Function.prototype(position, insertedElement)

    return null
  }

  /** TODO */
  public insertAdjacentHTML(where: InsertPosition, html: string): void {
    Function.prototype(where, html)
  }

  /** TODO */
  public insertAdjacentText(where: InsertPosition, text: string): void {
    Function.prototype(where, text)
  }

  public attachShadow(shadowRootInitDict: ShadowRootInit): ShadowRoot {
    Function.prototype(shadowRootInitDict)

    return new FakeShadowRoot(this)
  }

  /** TODO */
  public remove(): void {
    return void 0
  }

  public querySelector<El extends Element>(selector: string): El | null {
    const children = this.children

    for (let i = 0; i < children.length; ++i) {
      const child = children[i]

      if (child && child.matches(selector)) return child as El

      const match = child.querySelector(selector)

      if (match) return match as El
    }

    return null
  }

  public querySelectorAll<El extends Element>(selector: string): FakeNodeList<El> {
    const children = this.children
    const matchedElements = createFakeNodeList<El>()

    for (let i = 0; i < children.length; ++i) {
      const child = children[i]

      if (!child) continue

      if (child.matches(selector)) matchedElements.push(child as El)

      matchedElements.push(...Array.from<El>(child.querySelectorAll(selector) as NodeListOf<El>))
    }

    return matchedElements
  }

  public dispatchEvent(event: FakeEvent): boolean {
    if (!event.target)
      event.target = this
    
    const methodName = `on${event.type}` as keyof this

    if (this[methodName] === 'function') {
      ;(this[methodName] as Function).call(this, event)
    }

    const parentElements: Array<Element> = []

    traverseParentElements(element => {
      parentElements.push(element)
      return false
    }, this)

    let success: boolean = false

    for (let i = parentElements.length - 1; i >= 0; --i)
      success = success || (parentElements[i] as FakeElement).callCaptureEventListeners(event)

    success = success || super.dispatchEvent(event)

    for (let i = 0; i < parentElements.length; ++i)
      success = success || (parentElements[i] as FakeElement).callBubbleEventListeners(event)

    return success
  }

  public toString() {
    return `FakeElement { tagName: ${this.tagName}, textContent: ${String(this.textContent)} }`
  }
}

function isElement(x: Node): x is Element {
  return !!x && x.nodeName && !!(x as Element).tagName
}

function matchesNamespace<El extends Element>(
  element: Element,
  namespaceURI: string,
  localName: string
): element is El {
  return element.namespaceURI === namespaceURI && element.localName === localName
}

export class FakeDocumentFragment extends FakeNode implements DocumentFragment {
  children: FakeHTMLCollection = new FakeHTMLCollection()

  get firstElementChild(): Element | null {
    return this.children[0] || null
  }

  get lastElementChild(): Element | null {
    return this.children[this.children.length - 1] || null
  }

  get childElementCount(): number {
    return this.children.length
  }

  public getElementById(elementId: string): HTMLElement | null {
    const { childNodes } = this
    let element: HTMLElement | null = null

    const nodes: Array<HTMLElement> = Array.from(childNodes as any)

    while (nodes.length > 0) {
      const node = nodes.shift() as HTMLElement

      if (node.id === elementId) {
        element = node
        break
      }

      nodes.push(...Array.from<HTMLElement>(node.children as HTMLCollectionOf<HTMLElement>))
    }

    return element
  }

  public querySelector(selector: string): Element | null {
    const { childNodes } = this
    let element: Element | null = null

    const nodes: Array<Element> = Array.from(childNodes as any)

    if (selector.startsWith('#')) return this.getElementById(selector.slice(1))

    while (nodes.length > 0) {
      const node = nodes.shift() as Element

      if (selector.startsWith('.') && node.classList.contains(selector.slice(1))) {
        element = node
        break
      }

      if (node.tagName === selector) {
        element = node
        break
      }

      nodes.push(...Array.from(node.children))
    }

    return element
  }

  public querySelectorAll<El extends FakeElement>(selector: string): FakeNodeList<El> {
    const { childNodes } = this
    const elements = createFakeNodeList<El>()

    const nodes: Array<Element> = Array.from(childNodes as any)

    if (selector.startsWith('#')) {
      const element = (this.getElementById(selector.slice(1)) as any) as El

      if (element) {
        elements.push(element)
        return elements
      }
    }

    while (nodes.length > 0) {
      const node = nodes.shift() as FakeElement

      if (selector.startsWith('.') && node.classList.contains(selector.slice(1))) {
        elements.push(node as El)
      }

      if (node.tagName === selector) {
        elements.push(node as El)
      }

      nodes.push(...Array.from(node.children))
    }

    return elements
  }
}

export class FakeShadowRoot extends FakeDocumentFragment implements ShadowRoot {
  activeElement: Element | null
  stylesheets: StyleSheetList
  host: Element
  innerHTML: string = ''

  constructor(host: FakeElement) {
    super()
    this.host = host
  }

  getSelection(): Selection | null {
    return null
  }

  elementFromPoint(x: number, y: number): FakeElement | null {
    Function.prototype(x, y)

    return null
  }

  elementsFromPoint(x: number, y: number): FakeElement[] {
    Function.prototype(x, y)

    return []
  }
}

function escapeHTML(s: string) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

function escapeAttribute(s: string) {
  return escapeHTML(s).replace(/"/g, '&quot;')
}

function traverseParentElements(cb: (element: Element) => boolean, element: Element): boolean {
  let parentElement = element.parentElement

  if (!parentElement) return false

  if (cb(parentElement)) return true

  return traverseParentElements(cb, parentElement)
}

function matchBasicCssSelector(cssSelector: string, element: Element) {
  const hasTagName = cssSelector[0] !== '#' && cssSelector[0] !== '.'

  const { tagName, className, id } =
    hasTagName ?
      parseSelector(cssSelector) :
      parseSelector(element.tagName + cssSelector)

  if (tagName !== element.tagName)
    return false

  const parsedClassNames = className && className.split(' ') || []

  for (let i = 0; i < parsedClassNames.length; ++i) {
    const parsedClassName = parsedClassNames[i]

    if (!element.classList.contains(parsedClassName))
      return false
  }

  return element.id ? id === element.id : true
}