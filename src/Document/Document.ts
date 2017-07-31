import { HTMLBodyElementImpl, createElement } from '../HTMLElement'
import { NODE_TYPE, NodeImpl } from '../Node'

import { AttrImpl } from '../Attr'
import { EventImpl } from '../Event'
import { HTMLCollectionImpl } from '../HTMLCollection'
import { NodeListImpl } from '../NodeList'
import { TextImpl } from '../Text'

const isElement = (node: Node): node is Element => node.hasOwnProperty('tagName')

export class DocumentImpl extends NodeImpl implements Document {
  body: HTMLBodyElementImpl

  get children(): HTMLCollectionImpl<Element> {
    const nodes = this.childNodes.filter(isElement) as NodeListImpl<Element>
    const collection = new HTMLCollectionImpl()

    for (let i = 0; i < nodes.length; ++i) collection[i] = nodes[i]

    return collection
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
    return null
  }

  get previousElementSibling(): Element | null {
    return null
  }

  // TODO
  activeElement: Element
  alinkColor: string
  all: HTMLAllCollection
  anchors: HTMLCollectionOf<HTMLAnchorElement>
  applets: HTMLCollectionOf<HTMLAppletElement>
  bgColor: string
  characterSet: string
  charset: string
  compatMode: string
  cookie: string
  currentScript: HTMLScriptElement | SVGScriptElement
  defaultView: Window
  designMode: string
  dir: string
  doctype: DocumentType
  documentElement: HTMLElement
  domain: string
  embeds: HTMLCollectionOf<HTMLEmbedElement>
  fgColor: string
  forms: HTMLCollectionOf<HTMLFormElement>
  fullscreenElement: Element | null
  fullscreenEnabled: boolean
  head: HTMLHeadElement
  hidden: boolean
  images: HTMLCollectionOf<HTMLImageElement>
  implementation: DOMImplementation
  inputEncoding: string | null
  lastModified: string
  linkColor: string
  links: HTMLCollectionOf<HTMLAnchorElement | HTMLAreaElement>
  location: Location
  msCapsLockWarningOff: boolean
  msCSSOMElementFloatMetrics: boolean
  onabort: (this: Document, ev: UIEvent) => any
  onactivate: (this: Document, ev: UIEvent) => any
  onbeforeactivate: (this: Document, ev: UIEvent) => any
  onbeforedeactivate: (this: Document, ev: UIEvent) => any
  onblur: (this: Document, ev: FocusEvent) => any
  oncanplay: (this: Document, ev: Event) => any
  oncanplaythrough: (this: Document, ev: Event) => any
  onchange: (this: Document, ev: Event) => any
  onclick: (this: Document, ev: MouseEvent) => any
  oncontextmenu: (this: Document, ev: PointerEvent) => any
  ondblclick: (this: Document, ev: MouseEvent) => any
  ondeactivate: (this: Document, ev: UIEvent) => any
  ondrag: (this: Document, ev: DragEvent) => any
  ondragend: (this: Document, ev: DragEvent) => any
  ondragenter: (this: Document, ev: DragEvent) => any
  ondragleave: (this: Document, ev: DragEvent) => any
  ondragover: (this: Document, ev: DragEvent) => any
  ondragstart: (this: Document, ev: DragEvent) => any
  ondrop: (this: Document, ev: DragEvent) => any
  ondurationchange: (this: Document, ev: Event) => any
  onemptied: (this: Document, ev: Event) => any
  onended: (this: Document, ev: MediaStreamErrorEvent) => any
  onerror: (this: Document, ev: ErrorEvent) => any
  onfocus: (this: Document, ev: FocusEvent) => any
  onfullscreenchange: (this: Document, ev: Event) => any
  onfullscreenerror: (this: Document, ev: Event) => any
  oninput: (this: Document, ev: Event) => any
  oninvalid: (this: Document, ev: Event) => any
  onkeydown: (this: Document, ev: KeyboardEvent) => any
  onkeypress: (this: Document, ev: KeyboardEvent) => any
  onkeyup: (this: Document, ev: KeyboardEvent) => any
  onload: (this: Document, ev: Event) => any
  onloadeddata: (this: Document, ev: Event) => any
  onloadedmetadata: (this: Document, ev: Event) => any
  onloadstart: (this: Document, ev: Event) => any
  onmousedown: (this: Document, ev: MouseEvent) => any
  onmousemove: (this: Document, ev: MouseEvent) => any
  onmouseout: (this: Document, ev: MouseEvent) => any
  onmouseover: (this: Document, ev: MouseEvent) => any
  onmouseup: (this: Document, ev: MouseEvent) => any
  onmousewheel: (this: Document, ev: WheelEvent) => any
  onmscontentzoom: (this: Document, ev: UIEvent) => any
  onmsgesturechange: (this: Document, ev: MSGestureEvent) => any
  onmsgesturedoubletap: (this: Document, ev: MSGestureEvent) => any
  onmsgestureend: (this: Document, ev: MSGestureEvent) => any
  onmsgesturehold: (this: Document, ev: MSGestureEvent) => any
  onmsgesturestart: (this: Document, ev: MSGestureEvent) => any
  onmsgesturetap: (this: Document, ev: MSGestureEvent) => any
  onmsinertiastart: (this: Document, ev: MSGestureEvent) => any
  onmsmanipulationstatechanged: (this: Document, ev: MSManipulationEvent) => any
  onmspointercancel: (this: Document, ev: MSPointerEvent) => any
  onmspointerdown: (this: Document, ev: MSPointerEvent) => any
  onmspointerenter: (this: Document, ev: MSPointerEvent) => any
  onmspointerleave: (this: Document, ev: MSPointerEvent) => any
  onmspointermove: (this: Document, ev: MSPointerEvent) => any
  onmspointerout: (this: Document, ev: MSPointerEvent) => any
  onmspointerover: (this: Document, ev: MSPointerEvent) => any
  onmspointerup: (this: Document, ev: MSPointerEvent) => any
  onmssitemodejumplistitemremoved: (this: Document, ev: MSSiteModeEvent) => any
  onmsthumbnailclick: (this: Document, ev: MSSiteModeEvent) => any
  onpause: (this: Document, ev: Event) => any
  onplay: (this: Document, ev: Event) => any
  onplaying: (this: Document, ev: Event) => any
  onpointerlockchange: (this: Document, ev: Event) => any
  onpointerlockerror: (this: Document, ev: Event) => any
  onprogress: (this: Document, ev: ProgressEvent) => any
  onratechange: (this: Document, ev: Event) => any
  onreadystatechange: (this: Document, ev: Event) => any
  onreset: (this: Document, ev: Event) => any
  onscroll: (this: Document, ev: UIEvent) => any
  onseeked: (this: Document, ev: Event) => any
  onseeking: (this: Document, ev: Event) => any
  onselect: (this: Document, ev: UIEvent) => any
  onselectionchange: (this: Document, ev: Event) => any
  onselectstart: (this: Document, ev: Event) => any
  onstalled: (this: Document, ev: Event) => any
  onstop: (this: Document, ev: Event) => any
  onsubmit: (this: Document, ev: Event) => any
  onsuspend: (this: Document, ev: Event) => any
  ontimeupdate: (this: Document, ev: Event) => any
  ontouchcancel: (ev: TouchEvent) => any
  ontouchend: (ev: TouchEvent) => any
  ontouchmove: (ev: TouchEvent) => any
  ontouchstart: (ev: TouchEvent) => any
  onvolumechange: (this: Document, ev: Event) => any
  onwaiting: (this: Document, ev: Event) => any
  onwebkitfullscreenchange: (this: Document, ev: Event) => any
  onwebkitfullscreenerror: (this: Document, ev: Event) => any
  onpointercancel: (this: GlobalEventHandlers, ev: PointerEvent) => any
  onpointerdown: (this: GlobalEventHandlers, ev: PointerEvent) => any
  onpointerenter: (this: GlobalEventHandlers, ev: PointerEvent) => any
  onpointerleave: (this: GlobalEventHandlers, ev: PointerEvent) => any
  onpointermove: (this: GlobalEventHandlers, ev: PointerEvent) => any
  onpointerout: (this: GlobalEventHandlers, ev: PointerEvent) => any
  onpointerover: (this: GlobalEventHandlers, ev: PointerEvent) => any
  onpointerup: (this: GlobalEventHandlers, ev: PointerEvent) => any
  onwheel: (this: GlobalEventHandlers, ev: WheelEvent) => any
  plugins: HTMLCollectionOf<HTMLEmbedElement>
  pointerLockElement: Element
  readyState: string
  referrer: string
  rootElement: SVGSVGElement
  scripts: HTMLCollectionOf<HTMLScriptElement>
  scrollingElement: Element | null
  styleSheets: StyleSheetList
  stylesheets: StyleSheetList
  title: string
  URL: string
  URLUnencoded: string
  visibilityState: VisibilityState
  vlinkColor: string
  webkitCurrentFullScreenElement: Element | null
  webkitFullscreenElement: Element | null
  webkitFullscreenEnabled: boolean
  webkitIsFullScreen: boolean
  xmlEncoding: string | null
  xmlStandalone: boolean
  xmlVersion: string | null

  constructor(options: Record<string, any> = {}) {
    super({} as Document, options)
    this.nodeType = NODE_TYPE.DOCUMENT_NODE
    this.nodeName = '#document'

    this.body = new HTMLBodyElementImpl(this)
  }

  createAttribute(name: string): AttrImpl {
    return new AttrImpl(this, name, '')
  }

  createAttributeNS(namespaceURI: string | null, qualifiedName: string): Attr {
    const attr = this.createAttribute(qualifiedName)
    attr.namespaceURI = namespaceURI

    return attr
  }

  createElement<K extends keyof HTMLElementTagNameMap>(tagName: K): HTMLElementTagNameMap[K]
  createElement(tagName: string): Element | HTMLElement {
    return createElement(this, tagName)
  }

  createElementNS(namespaceURI: 'http://www.w3.org/1999/xhtml', qualifiedName: string): HTMLElement
  createElementNS(namespaceURI: 'http://www.w3.org/2000/svg', qualifiedName: 'a'): SVGAElement
  createElementNS(
    namespaceURI: 'http://www.w3.org/2000/svg',
    qualifiedName: 'circle'
  ): SVGCircleElement
  createElementNS(
    namespaceURI: 'http://www.w3.org/2000/svg',
    qualifiedName: 'clipPath'
  ): SVGClipPathElement
  createElementNS(
    namespaceURI: 'http://www.w3.org/2000/svg',
    qualifiedName: 'componentTransferFunction'
  ): SVGComponentTransferFunctionElement
  createElementNS(namespaceURI: 'http://www.w3.org/2000/svg', qualifiedName: 'defs'): SVGDefsElement
  createElementNS(namespaceURI: 'http://www.w3.org/2000/svg', qualifiedName: 'desc'): SVGDescElement
  createElementNS(
    namespaceURI: 'http://www.w3.org/2000/svg',
    qualifiedName: 'ellipse'
  ): SVGEllipseElement
  createElementNS(
    namespaceURI: 'http://www.w3.org/2000/svg',
    qualifiedName: 'feBlend'
  ): SVGFEBlendElement
  createElementNS(
    namespaceURI: 'http://www.w3.org/2000/svg',
    qualifiedName: 'feColorMatrix'
  ): SVGFEColorMatrixElement
  createElementNS(
    namespaceURI: 'http://www.w3.org/2000/svg',
    qualifiedName: 'feComponentTransfer'
  ): SVGFEComponentTransferElement
  createElementNS(
    namespaceURI: 'http://www.w3.org/2000/svg',
    qualifiedName: 'feComposite'
  ): SVGFECompositeElement
  createElementNS(
    namespaceURI: 'http://www.w3.org/2000/svg',
    qualifiedName: 'feConvolveMatrix'
  ): SVGFEConvolveMatrixElement
  createElementNS(
    namespaceURI: 'http://www.w3.org/2000/svg',
    qualifiedName: 'feDiffuseLighting'
  ): SVGFEDiffuseLightingElement
  createElementNS(
    namespaceURI: 'http://www.w3.org/2000/svg',
    qualifiedName: 'feDisplacementMap'
  ): SVGFEDisplacementMapElement
  createElementNS(
    namespaceURI: 'http://www.w3.org/2000/svg',
    qualifiedName: 'feDistantLight'
  ): SVGFEDistantLightElement
  createElementNS(
    namespaceURI: 'http://www.w3.org/2000/svg',
    qualifiedName: 'feFlood'
  ): SVGFEFloodElement
  createElementNS(
    namespaceURI: 'http://www.w3.org/2000/svg',
    qualifiedName: 'feFuncA'
  ): SVGFEFuncAElement
  createElementNS(
    namespaceURI: 'http://www.w3.org/2000/svg',
    qualifiedName: 'feFuncB'
  ): SVGFEFuncBElement
  createElementNS(
    namespaceURI: 'http://www.w3.org/2000/svg',
    qualifiedName: 'feFuncG'
  ): SVGFEFuncGElement
  createElementNS(
    namespaceURI: 'http://www.w3.org/2000/svg',
    qualifiedName: 'feFuncR'
  ): SVGFEFuncRElement
  createElementNS(
    namespaceURI: 'http://www.w3.org/2000/svg',
    qualifiedName: 'feGaussianBlur'
  ): SVGFEGaussianBlurElement
  createElementNS(
    namespaceURI: 'http://www.w3.org/2000/svg',
    qualifiedName: 'feImage'
  ): SVGFEImageElement
  createElementNS(
    namespaceURI: 'http://www.w3.org/2000/svg',
    qualifiedName: 'feMerge'
  ): SVGFEMergeElement
  createElementNS(
    namespaceURI: 'http://www.w3.org/2000/svg',
    qualifiedName: 'feMergeNode'
  ): SVGFEMergeNodeElement
  createElementNS(
    namespaceURI: 'http://www.w3.org/2000/svg',
    qualifiedName: 'feMorphology'
  ): SVGFEMorphologyElement
  createElementNS(
    namespaceURI: 'http://www.w3.org/2000/svg',
    qualifiedName: 'feOffset'
  ): SVGFEOffsetElement
  createElementNS(
    namespaceURI: 'http://www.w3.org/2000/svg',
    qualifiedName: 'fePointLight'
  ): SVGFEPointLightElement
  createElementNS(
    namespaceURI: 'http://www.w3.org/2000/svg',
    qualifiedName: 'feSpecularLighting'
  ): SVGFESpecularLightingElement
  createElementNS(
    namespaceURI: 'http://www.w3.org/2000/svg',
    qualifiedName: 'feSpotLight'
  ): SVGFESpotLightElement
  createElementNS(
    namespaceURI: 'http://www.w3.org/2000/svg',
    qualifiedName: 'feTile'
  ): SVGFETileElement
  createElementNS(
    namespaceURI: 'http://www.w3.org/2000/svg',
    qualifiedName: 'feTurbulence'
  ): SVGFETurbulenceElement
  createElementNS(
    namespaceURI: 'http://www.w3.org/2000/svg',
    qualifiedName: 'filter'
  ): SVGFilterElement
  createElementNS(
    namespaceURI: 'http://www.w3.org/2000/svg',
    qualifiedName: 'foreignObject'
  ): SVGForeignObjectElement
  createElementNS(namespaceURI: 'http://www.w3.org/2000/svg', qualifiedName: 'g'): SVGGElement
  createElementNS(
    namespaceURI: 'http://www.w3.org/2000/svg',
    qualifiedName: 'image'
  ): SVGImageElement
  createElementNS(
    namespaceURI: 'http://www.w3.org/2000/svg',
    qualifiedName: 'gradient'
  ): SVGGradientElement
  createElementNS(namespaceURI: 'http://www.w3.org/2000/svg', qualifiedName: 'line'): SVGLineElement
  createElementNS(
    namespaceURI: 'http://www.w3.org/2000/svg',
    qualifiedName: 'linearGradient'
  ): SVGLinearGradientElement
  createElementNS(
    namespaceURI: 'http://www.w3.org/2000/svg',
    qualifiedName: 'marker'
  ): SVGMarkerElement
  createElementNS(namespaceURI: 'http://www.w3.org/2000/svg', qualifiedName: 'mask'): SVGMaskElement
  createElementNS(namespaceURI: 'http://www.w3.org/2000/svg', qualifiedName: 'path'): SVGPathElement
  createElementNS(
    namespaceURI: 'http://www.w3.org/2000/svg',
    qualifiedName: 'metadata'
  ): SVGMetadataElement
  createElementNS(
    namespaceURI: 'http://www.w3.org/2000/svg',
    qualifiedName: 'pattern'
  ): SVGPatternElement
  createElementNS(
    namespaceURI: 'http://www.w3.org/2000/svg',
    qualifiedName: 'polygon'
  ): SVGPolygonElement
  createElementNS(
    namespaceURI: 'http://www.w3.org/2000/svg',
    qualifiedName: 'polyline'
  ): SVGPolylineElement
  createElementNS(
    namespaceURI: 'http://www.w3.org/2000/svg',
    qualifiedName: 'radialGradient'
  ): SVGRadialGradientElement
  createElementNS(namespaceURI: 'http://www.w3.org/2000/svg', qualifiedName: 'rect'): SVGRectElement
  createElementNS(namespaceURI: 'http://www.w3.org/2000/svg', qualifiedName: 'svg'): SVGSVGElement
  createElementNS(
    namespaceURI: 'http://www.w3.org/2000/svg',
    qualifiedName: 'script'
  ): SVGScriptElement
  createElementNS(namespaceURI: 'http://www.w3.org/2000/svg', qualifiedName: 'stop'): SVGStopElement
  createElementNS(
    namespaceURI: 'http://www.w3.org/2000/svg',
    qualifiedName: 'style'
  ): SVGStyleElement
  createElementNS(
    namespaceURI: 'http://www.w3.org/2000/svg',
    qualifiedName: 'switch'
  ): SVGSwitchElement
  createElementNS(
    namespaceURI: 'http://www.w3.org/2000/svg',
    qualifiedName: 'symbol'
  ): SVGSymbolElement
  createElementNS(
    namespaceURI: 'http://www.w3.org/2000/svg',
    qualifiedName: 'tspan'
  ): SVGTSpanElement
  createElementNS(
    namespaceURI: 'http://www.w3.org/2000/svg',
    qualifiedName: 'textContent'
  ): SVGTextContentElement
  createElementNS(namespaceURI: 'http://www.w3.org/2000/svg', qualifiedName: 'text'): SVGTextElement
  createElementNS(
    namespaceURI: 'http://www.w3.org/2000/svg',
    qualifiedName: 'textPath'
  ): SVGTextPathElement
  createElementNS(
    namespaceURI: 'http://www.w3.org/2000/svg',
    qualifiedName: 'textPositioning'
  ): SVGTextPositioningElement
  createElementNS(
    namespaceURI: 'http://www.w3.org/2000/svg',
    qualifiedName: 'title'
  ): SVGTitleElement
  createElementNS(namespaceURI: 'http://www.w3.org/2000/svg', qualifiedName: 'use'): SVGUseElement
  createElementNS(namespaceURI: 'http://www.w3.org/2000/svg', qualifiedName: 'view'): SVGViewElement
  createElementNS(namespaceURI: 'http://www.w3.org/2000/svg', qualifiedName: string): SVGElement
  createElementNS(namespaceURI: string | null, qualifiedName: string): Element {
    const element = createElement(this, qualifiedName) as Element
    ;(element as any).namespaceURI = namespaceURI

    return element
  }

  createTextNode(data: string): Text {
    return new TextImpl(this, { data })
  }

  public querySelector(cssSelector: string): Element | null {
    const { children } = this.body

    for (let i = 0; i < children.length; ++i) {
      const child = children[i]

      if (child.matches(cssSelector)) return child

      const childMatch = child.querySelector(cssSelector)

      if (childMatch) return childMatch
    }

    return null
  }

  public querySelectorAll(cssSelector: string): NodeListImpl<Element> {
    const { children } = this.body
    const nodeList = new NodeListImpl<Element>()

    for (let i = 0; i < children.length; ++i) {
      const child = children[i]

      if (child.matches(cssSelector)) nodeList.push(child)

      const childrenMatches = child.querySelectorAll(cssSelector) as NodeListImpl<Element>

      for (let j = 0; j < childrenMatches.length; ++j) nodeList.push(childrenMatches[j])
    }

    return nodeList
  }

  getElementById(elementId: string): HTMLElement | null {
    return (this.querySelector(`#${elementId}`) as HTMLElement) || null
  }

  getElementsByClassName(classNames: string): HTMLCollectionOf<Element> {
    const collection = new HTMLCollectionImpl()

    const cssSelector = `.` + classNames.trim().split(' ').join('.')

    collection.push(...Array.from(this.querySelectorAll(cssSelector)))

    return collection
  }
  /**
   * Retrieves a collection of objects based on the specified element name.
   * @param name Specifies the name of an element.
   */
  getElementsByTagName<K extends keyof ElementListTagNameMap>(tagname: K): ElementListTagNameMap[K]
  getElementsByTagName(tagname: string): NodeListOf<Element> {
    return this.querySelectorAll(tagname)
  }

  createEvent(eventInterface: 'AnimationEvent'): AnimationEvent
  createEvent(eventInterface: 'AudioProcessingEvent'): AudioProcessingEvent
  createEvent(eventInterface: 'BeforeUnloadEvent'): BeforeUnloadEvent
  createEvent(eventInterface: 'ClipboardEvent'): ClipboardEvent
  createEvent(eventInterface: 'CloseEvent'): CloseEvent
  createEvent(eventInterface: 'CompositionEvent'): CompositionEvent
  createEvent(eventInterface: 'CustomEvent'): CustomEvent
  createEvent(eventInterface: 'DeviceLightEvent'): DeviceLightEvent
  createEvent(eventInterface: 'DeviceMotionEvent'): DeviceMotionEvent
  createEvent(eventInterface: 'DeviceOrientationEvent'): DeviceOrientationEvent
  createEvent(eventInterface: 'DragEvent'): DragEvent
  createEvent(eventInterface: 'ErrorEvent'): ErrorEvent
  createEvent(eventInterface: 'Event'): Event
  createEvent(eventInterface: 'Events'): Event
  createEvent(eventInterface: 'FocusEvent'): FocusEvent
  createEvent(eventInterface: 'FocusNavigationEvent'): FocusNavigationEvent
  createEvent(eventInterface: 'GamepadEvent'): GamepadEvent
  createEvent(eventInterface: 'HashChangeEvent'): HashChangeEvent
  createEvent(eventInterface: 'IDBVersionChangeEvent'): IDBVersionChangeEvent
  createEvent(eventInterface: 'KeyboardEvent'): KeyboardEvent
  createEvent(eventInterface: 'ListeningStateChangedEvent'): ListeningStateChangedEvent
  createEvent(eventInterface: 'LongRunningScriptDetectedEvent'): LongRunningScriptDetectedEvent
  createEvent(eventInterface: 'MSGestureEvent'): MSGestureEvent
  createEvent(eventInterface: 'MSManipulationEvent'): MSManipulationEvent
  createEvent(eventInterface: 'MSMediaKeyMessageEvent'): MSMediaKeyMessageEvent
  createEvent(eventInterface: 'MSMediaKeyNeededEvent'): MSMediaKeyNeededEvent
  createEvent(eventInterface: 'MSPointerEvent'): MSPointerEvent
  createEvent(eventInterface: 'MSSiteModeEvent'): MSSiteModeEvent
  createEvent(eventInterface: 'MediaEncryptedEvent'): MediaEncryptedEvent
  createEvent(eventInterface: 'MediaKeyMessageEvent'): MediaKeyMessageEvent
  createEvent(eventInterface: 'MediaStreamErrorEvent'): MediaStreamErrorEvent
  createEvent(eventInterface: 'MediaStreamEvent'): MediaStreamEvent
  createEvent(eventInterface: 'MediaStreamTrackEvent'): MediaStreamTrackEvent
  createEvent(eventInterface: 'MessageEvent'): MessageEvent
  createEvent(eventInterface: 'MouseEvent'): MouseEvent
  createEvent(eventInterface: 'MouseEvents'): MouseEvent
  createEvent(eventInterface: 'MutationEvent'): MutationEvent
  createEvent(eventInterface: 'MutationEvents'): MutationEvent
  createEvent(eventInterface: 'NavigationCompletedEvent'): NavigationCompletedEvent
  createEvent(eventInterface: 'NavigationEvent'): NavigationEvent
  createEvent(eventInterface: 'NavigationEventWithReferrer'): NavigationEventWithReferrer
  createEvent(eventInterface: 'OfflineAudioCompletionEvent'): OfflineAudioCompletionEvent
  createEvent(eventInterface: 'OverflowEvent'): OverflowEvent
  createEvent(eventInterface: 'PageTransitionEvent'): PageTransitionEvent
  createEvent(eventInterface: 'PaymentRequestUpdateEvent'): PaymentRequestUpdateEvent
  createEvent(eventInterface: 'PermissionRequestedEvent'): PermissionRequestedEvent
  createEvent(eventInterface: 'PointerEvent'): PointerEvent
  createEvent(eventInterface: 'PopStateEvent'): PopStateEvent
  createEvent(eventInterface: 'ProgressEvent'): ProgressEvent
  createEvent(eventInterface: 'RTCDTMFToneChangeEvent'): RTCDTMFToneChangeEvent
  createEvent(
    eventInterface: 'RTCDtlsTransportStateChangedEvent'
  ): RTCDtlsTransportStateChangedEvent
  createEvent(eventInterface: 'RTCIceCandidatePairChangedEvent'): RTCIceCandidatePairChangedEvent
  createEvent(eventInterface: 'RTCIceGathererEvent'): RTCIceGathererEvent
  createEvent(eventInterface: 'RTCIceTransportStateChangedEvent'): RTCIceTransportStateChangedEvent
  createEvent(eventInterface: 'RTCPeerConnectionIceEvent'): RTCPeerConnectionIceEvent
  createEvent(eventInterface: 'RTCSsrcConflictEvent'): RTCSsrcConflictEvent
  createEvent(eventInterface: 'SVGZoomEvent'): SVGZoomEvent
  createEvent(eventInterface: 'SVGZoomEvents'): SVGZoomEvent
  createEvent(eventInterface: 'ScriptNotifyEvent'): ScriptNotifyEvent
  createEvent(eventInterface: 'ServiceWorkerMessageEvent'): ServiceWorkerMessageEvent
  createEvent(eventInterface: 'SpeechSynthesisEvent'): SpeechSynthesisEvent
  createEvent(eventInterface: 'StorageEvent'): StorageEvent
  createEvent(eventInterface: 'TextEvent'): TextEvent
  createEvent(eventInterface: 'TouchEvent'): TouchEvent
  createEvent(eventInterface: 'TrackEvent'): TrackEvent
  createEvent(eventInterface: 'TransitionEvent'): TransitionEvent
  createEvent(eventInterface: 'UIEvent'): UIEvent
  createEvent(eventInterface: 'UIEvents'): UIEvent
  createEvent(eventInterface: 'UnviewableContentIdentifiedEvent'): UnviewableContentIdentifiedEvent
  createEvent(eventInterface: 'WebGLContextEvent'): WebGLContextEvent
  createEvent(eventInterface: 'WheelEvent'): WheelEvent
  createEvent(eventInterface: string): Event {
    switch (eventInterface) {
      default:
        return new EventImpl('')
    }
  }

  // TODO

  /**
   * Gets a collection of objects based on the value of the NAME or ID attribute.
   * @param elementName Gets a collection of objects based on the value of the NAME or ID attribute.
   */
  getElementsByName(elementName: string): NodeListOf<HTMLElement> {
    Function.prototype(elementName)

    return new NodeListImpl()
  }

  getElementsByTagNameNS(
    namespaceURI: 'http://www.w3.org/1999/xhtml',
    localName: string
  ): HTMLCollectionOf<HTMLElement>
  getElementsByTagNameNS(
    namespaceURI: 'http://www.w3.org/2000/svg',
    localName: string
  ): HTMLCollectionOf<SVGElement>
  getElementsByTagNameNS(namespaceURI: string, localName: string): HTMLCollectionOf<Element> {
    Function.prototype(namespaceURI, localName)

    return new HTMLCollectionImpl()
  }

  createExpression(expression: string, resolver: XPathNSResolver): XPathExpression {
    Function.prototype(expression, resolver)

    return {} as XPathExpression
  }

  createNodeIterator(
    root: Node,
    whatToShow?: number,
    filter?: NodeFilter,
    entityReferenceExpansion?: boolean
  ): NodeIterator {
    Function.prototype(root, whatToShow, filter, entityReferenceExpansion)

    return {} as NodeIterator
  }

  createNSResolver(nodeResolver: Node): XPathNSResolver {
    Function.prototype(nodeResolver)

    return {} as XPathNSResolver
  }

  createProcessingInstruction(target: string, data: string): ProcessingInstruction {
    Function.prototype(target, data)

    return {} as ProcessingInstruction
  }

  createRange(): Range {
    return {} as Range
  }

  /**
   * Creates a text string from the specified value.
   * @param data String that specifies the nodeValue property of the text node.
   */

  createTouch(
    view: Window,
    target: EventTarget,
    identifier: number,
    pageX: number,
    pageY: number,
    screenX: number,
    screenY: number
  ): Touch {
    Function.prototype(view, target, identifier, pageX, pageY, screenX, screenY)

    return {} as Touch
  }

  createTouchList(...touches: Touch[]): TouchList {
    Function.prototype(touches)

    return {} as TouchList
  }

  createTreeWalker(
    root: Node,
    whatToShow?: number,
    filter?: NodeFilter,
    entityReferenceExpansion?: boolean
  ): TreeWalker {
    Function.prototype(root, whatToShow, filter, entityReferenceExpansion)

    return {} as TreeWalker
  }

  elementFromPoint(x: number, y: number): Element {
    Function.prototype(x, y)

    return {} as Element
  }

  evaluate(
    expression: string,
    contextNode: Node,
    resolver: XPathNSResolver | null,
    type: number,
    result: XPathResult | null
  ): XPathResult {
    Function.prototype(expression, contextNode, resolver, type, result)

    return {} as XPathResult
  }

  execCommand(commandId: string, showUI?: boolean, value?: any): boolean {
    Function.prototype(commandId, showUI, value)
    return false
  }

  execCommandShowHelp(commandId: string): boolean {
    Function.prototype(commandId)

    return false
  }

  exitFullscreen(): void {}
  exitPointerLock(): void {}
  focus(): void {}

  getSelection(): Selection {
    return {} as Selection
  }
  /**
   * Gets a value indicating whether the object currently has focus.
   */
  hasFocus(): boolean {
    return true
  }

  importNode<T extends Node>(importedNode: T, deep: boolean): T {
    return Function.prototype(deep), importedNode
  }

  msElementsFromPoint(x: number, y: number): NodeListOf<Element> {
    Function.prototype(x, y)

    return new NodeListImpl()
  }

  msElementsFromRect(
    left: number,
    top: number,
    width: number,
    height: number
  ): NodeListOf<Element> {
    Function.prototype(left, top, width, height)

    return new NodeListImpl()
  }

  open(url?: string, name?: string, features?: string, replace?: boolean): Document {
    Function.prototype(features, replace)

    return new DocumentImpl({ url, name })
  }

  queryCommandEnabled(commandId: string): boolean {
    return Function.prototype(commandId), true
  }

  queryCommandIndeterm(commandId: string): boolean {
    return Function.prototype(commandId), true
  }

  queryCommandState(commandId: string): boolean {
    return Function.prototype(commandId), true
  }

  queryCommandSupported(commandId: string): boolean {
    return Function.prototype(commandId), true
  }

  queryCommandText(commandId: string): string {
    return commandId
  }

  queryCommandValue(commandId: string): string {
    return commandId
  }

  releaseEvents(): void {}
  updateSettings(): void {}
  webkitCancelFullScreen(): void {}
  webkitExitFullscreen(): void {}

  write(...content: string[]): void {
    this.textContent = content.join('\n')
  }

  writeln(...content: string[]): void {
    this.textContent = content.join(' ')
  }

  adoptNode<T extends Node>(source: T): T {
    return source
  }
  captureEvents(): void {}
  caretRangeFromPoint(x: number, y: number): Range {
    Function.prototype(x, y)

    return {} as Range
  }
  clear(): void {}
  close(): void {}
  createCDATASection(data: string): CDATASection {
    Function.prototype(data)
    return {} as CDATASection
  }
  createComment(data: string): Comment {
    Function.prototype(data)
    return {} as Comment
  }
  createDocumentFragment(): DocumentFragment {
    return {} as DocumentFragment
  }

  elementsFromPoint(x: number, y: number): Element[] {
    return Function.prototype(x, y), []
  }
}
