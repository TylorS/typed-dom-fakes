import { FakeDocumentFragment, FakeElement } from './FakeElement'
import { FakeNode, NodeType } from './FakeNode'

import { FakeAttr } from './FakeAttr'
import { FakeEvent } from './FakeEvent'
import { FakeHTMLCollection } from './FakeHTMLCollection'
import { FakeHTMLElement } from './FakeHTMLElement'
import { FakeNodeList } from './FakeNodeList'
import { FakeText } from './FakeText'
import { FakeTouchList } from './FakeTouchList'
import { FakeWindow } from './FakeWindow'
import { copy } from '167'

export class FakeDocument extends FakeNode implements Document {
  activeElement: Element
  alinkColor: string = ''
  all: HTMLAllCollection
  anchors: HTMLCollectionOf<HTMLAnchorElement>
  applets: HTMLCollectionOf<HTMLAppletElement>
  bgColor: string = ''
  body: HTMLElement = new FakeHTMLElement('body')
  characterSet: string = ''
  charset: string = ''
  compatMode: string = ''
  cookie: string = ''
  currentScript: HTMLScriptElement | SVGScriptElement
  defaultView: Window = new FakeWindow()
  designMode: string = ''
  dir: string = ''
  doctype: DocumentType
  documentElement: HTMLElement = new FakeHTMLElement('document')
  domain: string = ''
  embeds: HTMLCollectionOf<HTMLEmbedElement>
  fgColor: string = ''
  forms: HTMLCollectionOf<HTMLFormElement>
  fullscreenElement: Element | null = null
  fullscreenEnabled: boolean = false
  head: HTMLHeadElement
  hidden: boolean = false
  images: HTMLCollectionOf<HTMLImageElement>
  implementation: DOMImplementation
  inputEncoding: string | null = null
  lastModified: string = ''
  linkColor: string = ''
  links: HTMLCollectionOf<HTMLAnchorElement | HTMLAreaElement>
  location: Location
  msCapsLockWarningOff: boolean = false
  msCSSOMElementFloatMetrics: boolean = false
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
  onpointercancel: (this: Document, ev: Event) => any
  onpointerdown: (this: Document, ev: Event) => any
  onpointerenter: (this: Document, ev: Event) => any
  onpointerleave: (this: Document, ev: Event) => any
  onpointermove: (this: Document, ev: Event) => any
  onpointerout: (this: Document, ev: Event) => any
  onpointerover: (this: Document, ev: Event) => any
  onpointerup: (this: Document, ev: Event) => any
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
  onwheel: (this: Document, ev: Event) => any
  plugins: HTMLCollectionOf<HTMLEmbedElement>
  pointerLockElement: Element
  readyState: string = ''
  referrer: string = ''
  rootElement: SVGSVGElement
  scripts: HTMLCollectionOf<HTMLScriptElement>
  scrollingElement: Element | null = null
  styleSheets: StyleSheetList
  stylesheets: StyleSheetList
  title: string = ''
  URL: string = ''
  URLUnencoded: string = ''
  visibilityState: VisibilityState
  vlinkColor: string = ''
  webkitCurrentFullScreenElement: Element | null = null
  webkitFullscreenElement: Element | null = null
  webkitFullscreenEnabled: boolean = false
  webkitIsFullScreen: boolean = false
  xmlEncoding: string | null = null
  xmlStandalone: boolean = false
  xmlVersion: string | null = null

  public get children(): FakeHTMLCollection {
    return new FakeHTMLCollection(...(this.childNodes as FakeNodeList).filter(isElement))
  }

  get firstElementChild(): Element | null {
    return this.children[0] || null
  }

  get lastElementChild(): Element | null {
    return this.children[this.children.length - 1] || null
  }

  get childElementCount(): number {
    return this.children.length
  }

  constructor() {
    super()

    this.nodeType = NodeType.DOCUMENT_NODE
    this.nodeName = 'document'
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
  createEvent(type: string) {
    return new FakeEvent(type.toLowerCase()) as any
  }

  public getElementsByTagName(name: string): NodeListOf<FakeElement> {
    const { childNodes } = this
    const nodeList = new FakeNodeList<FakeElement>()

    for (let i = 0; i < childNodes.length; ++i) {
      const childNode = childNodes[i]

      if (isElement(childNode)) {
        if (childNode.tagName === name) nodeList.push(childNode as FakeElement)

        nodeList.push(...copy((childNode as FakeElement).getElementsByTagName(name)))
      }
    }

    return nodeList
  }

  public getElementsByClassName<El extends Element = FakeElement>(
    className: string
  ): HTMLCollectionOf<El> {
    const { childNodes } = this
    const htmlCollection = new FakeHTMLCollection<El>()

    for (let i = 0; i < childNodes.length; ++i) {
      const childNode = childNodes[i] as FakeElement

      if (isElement(childNode)) {
        if (childNode.matches(`.${className}`)) {
          htmlCollection.push(childNode as any)
        }

        htmlCollection.push(
          ...copy<El>(childNode.getElementsByClassName(className) as HTMLCollectionOf<El>)
        )
      }
    }

    return htmlCollection
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
    const elements = new FakeNodeList<El>()

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

  adoptNode<T extends Node>(source: T): T {
    return source
  }

  captureEvents(): void {
    return void 0
  }

  caretRangeFromPoint(x: number, y: number): Range {
    Function.prototype(x, y)

    return {} as Range
  }

  clear(): void {}

  close(): void {}

  createAttribute(name: string): Attr {
    return new FakeAttr(name, '')
  }

  createAttributeNS(namespaceURI: string | null, qualifiedName: string): Attr {
    const attr = new FakeAttr(qualifiedName, '')

    attr.namespaceURI = namespaceURI

    return attr
  }

  createCDATASection(data: string): CDATASection {
    const node = new FakeNode()

    node.nodeName = '#cdata'
    node.nodeType = NodeType.TEXT_NODE
    node.nodeValue = data

    return node as any
  }

  createComment(data: string): Comment {
    Function.prototype(data)

    return {} as Comment
  }

  createDocumentFragment(): DocumentFragment {
    return new FakeDocumentFragment()
  }

  createElement(tagName: string): HTMLElement {
    return new FakeHTMLElement(tagName)
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
    const element = new FakeElement(qualifiedName)

    element.namespaceURI = namespaceURI

    return element
  }

  createExpression(expression: string, resolver: XPathNSResolver): XPathExpression {
    Function.prototype(expression, resolver)

    return {} as XPathExpression
  }
  /**
     * Creates a NodeIterator object that you can use to traverse filtered lists of nodes or elements in a document.
     * @param root The root element or node to start traversing on.
     * @param whatToShow The type of nodes or elements to appear in the node list
     * @param filter A custom NodeFilter function to use. For more information, see filter. Use null for no filter.
     * @param entityReferenceExpansion A flag that specifies whether entity reference nodes are expanded.
     */
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
  /**
     *  Returns an empty range object that has both of its boundary points positioned at the beginning of the document.
     */
  createRange(): Range {
    return {} as Range
  }
  /**
     * Creates a text string from the specified value.
     * @param data String that specifies the nodeValue property of the text node.
     */
  createTextNode(data: string): Text {
    return new FakeText(data)
  }

  createTouch(
    view: Window,
    target: EventTarget,
    identifier: number,
    pageX: number,
    pageY: number,
    screenX: number,
    screenY: number
  ): Touch {
    Function.prototype(view)

    const touch: Touch = {
      target,
      screenX,
      screenY,
      pageX,
      pageY,
      clientX: pageX,
      clientY: pageY,
      identifier,
    }

    return touch
  }
  createTouchList(...touches: Touch[]): TouchList {
    return new FakeTouchList(...touches)
  }
  /**
     * Creates a TreeWalker object that you can use to traverse filtered lists of nodes or elements in a document.
     * @param root The root element or node to start traversing on.
     * @param whatToShow The type of nodes or elements to appear in the node list. For more information, see whatToShow.
     * @param filter A custom NodeFilter function to use.
     * @param entityReferenceExpansion A flag that specifies whether entity reference nodes are expanded.
     */
  createTreeWalker(
    root: Node,
    whatToShow?: number,
    filter?: NodeFilter,
    entityReferenceExpansion?: boolean
  ): TreeWalker {
    Function.prototype(root, whatToShow, filter, entityReferenceExpansion)

    return {} as TreeWalker
  }
  /**
     * Returns the element for the specified x coordinate and the specified y coordinate.
     * @param x The x-offset
     * @param y The y-offset
     */
  elementFromPoint(x: number, y: number): Element {
    const element = new FakeElement('div')

    element.clientLeft = x
    element.clientTop = y

    return element
  }

  elementsFromPoint(x: number, y: number): FakeElement[] {
    Function.prototype(x, y)

    return []
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
  /**
     * Executes a command on the current document, current selection, or the given range.
     * @param commandId String that specifies the command to execute. This command can be any of the command identifiers that can be executed in script.
     * @param showUI Display the user interface, defaults to false.
     * @param value Value to assign.
     */
  execCommand(commandId: string, showUI?: boolean, value?: any): boolean {
    Function.prototype(commandId, showUI, value)

    return false
  }
  /**
     * Displays help information for the given command identifier.
     * @param commandId Displays help information for the given command identifier.
     */
  execCommandShowHelp(commandId: string): boolean {
    Function.prototype(commandId)

    return false
  }
  exitFullscreen(): void {}
  exitPointerLock(): void {}
  /**
     * Causes the element to receive the focus and executes the code specified by the onfocus event.
     */
  focus(): void {}
  /**
     * Returns a reference to the first object with the specified value of the ID or NAME attribute.
     * @param elementId String that specifies the ID value. Case-insensitive.
     */
  getElementById(elementId: string): HTMLElement | null {
    const nodes: Array<HTMLElement> = [...(Array.from(this.children) as Array<HTMLElement>)]

    while (nodes.length > 0) {
      const node = nodes.shift() as HTMLElement

      if (node.id === elementId) return node

      nodes.push(...(Array.from(node.children) as Array<HTMLElement>))
    }

    return null
  }

  /**
     * Gets a collection of objects based on the value of the NAME or ID attribute.
     * @param elementName Gets a collection of objects based on the value of the NAME or ID attribute.
     */
  getElementsByName(elementName: string): NodeListOf<HTMLElement> {
    Function.prototype(elementName)

    return new FakeNodeList<HTMLElement>()
  }

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
    Function.prototype(deep)

    return importedNode
  }
  msElementsFromPoint(x: number, y: number): NodeListOf<Element> {
    Function.prototype(x, y)

    return new FakeNodeList<Element>()
  }

  msElementsFromRect(
    left: number,
    top: number,
    width: number,
    height: number
  ): NodeListOf<Element> {
    Function.prototype(left, top, width, height)

    return new FakeNodeList()
  }

  /**
     * Opens a new window and loads a document specified by a given URL. Also, opens a new window that uses the url parameter and the name parameter to collect the output of the write method and the writeln method.
     * @param url Specifies a MIME type for the document.
     * @param name Specifies the name of the window. This name is used as the value for the TARGET attribute on a form or an anchor element.
     * @param features Contains a list of items separated by commas. Each item consists of an option and a value, separated by an equals sign (for example, "fullscreen=yes, toolbar=yes"). The following values are supported.
     * @param replace Specifies whether the existing entry for the document is replaced in the history list.
     */
  open(url?: string, name?: string, features?: string, replace?: boolean): Document {
    Function.prototype(features, replace)

    const document = new FakeDocument()

    document.URL = url
    document.title = name

    return document
  }
  /**
     * Returns a Boolean value that indicates whether a specified command can be successfully executed using execCommand, given the current state of the document.
     * @param commandId Specifies a command identifier.
     */
  queryCommandEnabled(commandId: string): boolean {
    Function.prototype(commandId)

    return false
  }

  /**
     * Returns a Boolean value that indicates whether the specified command is in the indeterminate state.
     * @param commandId String that specifies a command identifier.
     */
  queryCommandIndeterm(commandId: string): boolean {
    Function.prototype(commandId)

    return false
  }
  /**
     * Returns a Boolean value that indicates the current state of the command.
     * @param commandId String that specifies a command identifier.
     */
  queryCommandState(commandId: string): boolean {
    Function.prototype(commandId)

    return false
  }

  /**
     * Returns a Boolean value that indicates whether the current command is supported on the current range.
     * @param commandId Specifies a command identifier.
     */
  queryCommandSupported(commandId: string): boolean {
    Function.prototype(commandId)

    return false
  }
  /**
     * Retrieves the string associated with a command.
     * @param commandId String that contains the identifier of a command. This can be any command identifier given in the list of Command Identifiers.
     */
  queryCommandText(commandId: string): string {
    return commandId
  }

  /**
     * Returns the current value of the document, range, or current selection for the given command.
     * @param commandId String that specifies a command identifier.
     */
  queryCommandValue(commandId: string): string {
    return commandId
  }

  releaseEvents(): void {}
  /**
     * Allows updating the print settings for the page.
     */
  updateSettings(): void {}
  webkitCancelFullScreen(): void {}
  webkitExitFullscreen(): void {}
  /**
     * Writes one or more HTML expressions to a document in the specified window.
     * @param content Specifies the text and HTML tags to write.
     */
  write(...content: string[]): void {
    Function.prototype(content)
  }

  /**
     * Writes one or more HTML expressions, followed by a carriage return, to a document in the specified window.
     * @param content The text and HTML tags to write.
     */
  writeln(...content: string[]): void {
    Function.prototype(content)
  }
}

function isElement(x: Node): x is Element {
  return x && typeof (x as Element).tagName === 'string'
}

function matchesNamespace<El extends Element>(
  element: Element,
  namespaceURI: string,
  localName: string
): element is El {
  return element.namespaceURI === namespaceURI && element.localName === localName
}
