import { EventImpl } from '../Event'
import { EventTargetImpl } from '../EventTarget'
import { mockStorage } from 'mock-storage'

export class WindowImpl extends EventTargetImpl implements Window {
  document: Document // assigned in constructor
  clearInterval = clearInterval
  clearTimeout = clearTimeout
  setInterval = setInterval
  setTimeout = setTimeout
  clearImmediate = clearTimeout
  setImmediate = setTimeout
  sessionStorage = mockStorage()
  localStorage = mockStorage()
  console = console

  // TODO implement
  applicationCache: ApplicationCache = {} as ApplicationCache
  caches: CacheStorage = {} as CacheStorage
  clientInformation: Navigator
  closed: boolean
  crypto: Crypto
  defaultStatus: string
  devicePixelRatio: number
  doNotTrack: string
  event: Event | undefined
  external: External
  frameElement: Element
  frames: Window
  history: History
  indexedDB: IDBFactory
  innerHeight: number
  innerWidth: number
  isSecureContext: boolean
  length: number
  location: Location
  locationbar: BarProp
  menubar: BarProp
  msContentScript: ExtensionScriptApis
  msCredentials: MSCredentials
  name: string
  navigator: Navigator
  offscreenBuffering: string | boolean
  onabort: (this: any, ev: UIEvent) => any
  onafterprint: (this: any, ev: Event) => any
  onbeforeprint: (this: any, ev: Event) => any
  onbeforeunload: (this: any, ev: BeforeUnloadEvent) => any
  onblur: (this: any, ev: FocusEvent) => any
  oncanplay: (this: any, ev: Event) => any
  oncanplaythrough: (this: any, ev: Event) => any
  onchange: (this: any, ev: Event) => any
  onclick: (this: any, ev: MouseEvent) => any
  oncompassneedscalibration: (this: any, ev: Event) => any
  oncontextmenu: (this: any, ev: PointerEvent) => any
  ondblclick: (this: any, ev: MouseEvent) => any
  ondevicelight: (this: any, ev: DeviceLightEvent) => any
  ondevicemotion: (this: any, ev: DeviceMotionEvent) => any
  ondeviceorientation: (this: any, ev: DeviceOrientationEvent) => any
  ondrag: (this: any, ev: DragEvent) => any
  ondragend: (this: any, ev: DragEvent) => any
  ondragenter: (this: any, ev: DragEvent) => any
  ondragleave: (this: any, ev: DragEvent) => any
  ondragover: (this: any, ev: DragEvent) => any
  ondragstart: (this: any, ev: DragEvent) => any
  ondrop: (this: any, ev: DragEvent) => any
  ondurationchange: (this: any, ev: Event) => any
  onemptied: (this: any, ev: Event) => any
  onended: (this: any, ev: MediaStreamErrorEvent) => any
  onerror: ErrorEventHandler
  onfocus: (this: any, ev: FocusEvent) => any
  onhashchange: (this: any, ev: HashChangeEvent) => any
  oninput: (this: any, ev: Event) => any
  oninvalid: (this: any, ev: Event) => any
  onkeydown: (this: any, ev: KeyboardEvent) => any
  onkeypress: (this: any, ev: KeyboardEvent) => any
  onkeyup: (this: any, ev: KeyboardEvent) => any
  onload: (this: any, ev: Event) => any
  onloadeddata: (this: any, ev: Event) => any
  onloadedmetadata: (this: any, ev: Event) => any
  onloadstart: (this: any, ev: Event) => any
  onmessage: (this: any, ev: MessageEvent) => any
  onmousedown: (this: any, ev: MouseEvent) => any
  onmouseenter: (this: any, ev: MouseEvent) => any
  onmouseleave: (this: any, ev: MouseEvent) => any
  onmousemove: (this: any, ev: MouseEvent) => any
  onmouseout: (this: any, ev: MouseEvent) => any
  onmouseover: (this: any, ev: MouseEvent) => any
  onmouseup: (this: any, ev: MouseEvent) => any
  onmousewheel: (this: any, ev: WheelEvent) => any
  onmsgesturechange: (this: any, ev: MSGestureEvent) => any
  onmsgesturedoubletap: (this: any, ev: MSGestureEvent) => any
  onmsgestureend: (this: any, ev: MSGestureEvent) => any
  onmsgesturehold: (this: any, ev: MSGestureEvent) => any
  onmsgesturestart: (this: any, ev: MSGestureEvent) => any
  onmsgesturetap: (this: any, ev: MSGestureEvent) => any
  onmsinertiastart: (this: any, ev: MSGestureEvent) => any
  onmspointercancel: (this: any, ev: MSPointerEvent) => any
  onmspointerdown: (this: any, ev: MSPointerEvent) => any
  onmspointerenter: (this: any, ev: MSPointerEvent) => any
  onmspointerleave: (this: any, ev: MSPointerEvent) => any
  onmspointermove: (this: any, ev: MSPointerEvent) => any
  onmspointerout: (this: any, ev: MSPointerEvent) => any
  onmspointerover: (this: any, ev: MSPointerEvent) => any
  onmspointerup: (this: any, ev: MSPointerEvent) => any
  onoffline: (this: any, ev: Event) => any
  ononline: (this: any, ev: Event) => any
  onorientationchange: (this: any, ev: Event) => any
  onpagehide: (this: any, ev: PageTransitionEvent) => any
  onpageshow: (this: any, ev: PageTransitionEvent) => any
  onpause: (this: any, ev: Event) => any
  onplay: (this: any, ev: Event) => any
  onplaying: (this: any, ev: Event) => any
  onpopstate: (this: any, ev: PopStateEvent) => any
  onprogress: (this: any, ev: ProgressEvent) => any
  onratechange: (this: any, ev: Event) => any
  onreadystatechange: (this: any, ev: ProgressEvent) => any
  onreset: (this: any, ev: Event) => any
  onresize: (this: any, ev: UIEvent) => any
  onscroll: (this: any, ev: UIEvent) => any
  onseeked: (this: any, ev: Event) => any
  onseeking: (this: any, ev: Event) => any
  onselect: (this: any, ev: UIEvent) => any
  onstalled: (this: any, ev: Event) => any
  onstorage: (this: any, ev: StorageEvent) => any
  onsubmit: (this: any, ev: Event) => any
  onsuspend: (this: any, ev: Event) => any
  ontimeupdate: (this: any, ev: Event) => any
  ontouchcancel: (ev: TouchEvent) => any
  ontouchend: (ev: TouchEvent) => any
  ontouchmove: (ev: TouchEvent) => any
  ontouchstart: (ev: TouchEvent) => any
  onunload: (this: any, ev: Event) => any
  onvolumechange: (this: any, ev: Event) => any
  onwaiting: (this: any, ev: Event) => any
  // global
  onpointercancel: (this: GlobalEventHandlers, ev: PointerEvent) => any
  onpointerdown: (this: GlobalEventHandlers, ev: PointerEvent) => any
  onpointerenter: (this: GlobalEventHandlers, ev: PointerEvent) => any
  onpointerleave: (this: GlobalEventHandlers, ev: PointerEvent) => any
  onpointermove: (this: GlobalEventHandlers, ev: PointerEvent) => any
  onpointerout: (this: GlobalEventHandlers, ev: PointerEvent) => any
  onpointerover: (this: GlobalEventHandlers, ev: PointerEvent) => any
  onpointerup: (this: GlobalEventHandlers, ev: PointerEvent) => any
  onwheel: (this: GlobalEventHandlers, ev: WheelEvent) => any
  opener: any
  orientation: string | number
  outerHeight: number
  outerWidth: number
  pageXOffset: number
  pageYOffset: number
  parent: Window
  performance: Performance
  personalbar: BarProp
  screen: Screen
  screenLeft: number
  screenTop: number
  screenX: number
  screenY: number
  scrollbars: BarProp
  scrollX: number
  scrollY: number
  self: Window
  speechSynthesis: SpeechSynthesis
  status: string
  statusbar: BarProp
  styleMedia: StyleMedia
  toolbar: BarProp
  top: Window
  window: Window
  URL: typeof URL
  URLSearchParams: typeof URLSearchParams
  Blob: typeof Blob
  customElements: CustomElementRegistry

  constructor(document: Document, options: Record<string, any> = {}) {
    super()
    this.document = document
    this.window = this

    for (const key in options) this[key as keyof this] = options[key]
  }

  blur() {
    this.dispatchEvent(new EventImpl('blur', false))
  }

  focus(): void {
    this.dispatchEvent(new EventImpl('focus', false))
  }

  // TODO implement methods
  atob(encodedString: string): string {
    return encodedString
  }

  btoa(rawString: string): string {
    return rawString
  }

  fetch(input: RequestInfo, init?: RequestInit): Promise<Response> {
    Function.prototype(input, init)

    return Promise.reject('unimplemented')
  }

  alert(message?: any): void {
    Function.prototype(message)
  }

  cancelAnimationFrame = clearTimeout

  captureEvents(): void {}
  close(): void {}

  confirm(message?: string): boolean {
    return Function.prototype(message), false
  }

  departFocus(navigationReason: NavigationReason, origin: FocusNavigationOrigin): void {
    Function.prototype(navigationReason, origin)
  }

  getComputedStyle(elt: Element, pseudoElt?: string): CSSStyleDeclaration {
    Function.prototype(elt, pseudoElt)

    return {} as CSSStyleDeclaration
  }

  getMatchedCSSRules(elt: Element, pseudoElt?: string): CSSRuleList {
    Function.prototype(elt, pseudoElt)

    return {} as CSSRuleList
  }

  getSelection(): Selection {
    return {} as Selection
  }

  matchMedia(mediaQuery: string): MediaQueryList {
    Function.prototype(mediaQuery)

    return {} as MediaQueryList
  }

  moveBy(x?: number, y?: number): void {
    Function.prototype(x, y)
  }

  moveTo(x?: number, y?: number): void {
    Function.prototype(x, y)
  }

  msWriteProfilerMark(profilerMarkName: string): void {
    Function.prototype(profilerMarkName)
  }

  open(url?: string, target?: string, features?: string, replace?: boolean): Window {
    Function.prototype(url, target, features, replace)

    return {} as Window
  }

  postMessage(message: any, targetOrigin: string, transfer?: any[]): void {
    Function.prototype(message, targetOrigin, transfer)
  }

  print(): void {}

  prompt(message?: string, _default?: string): string | null {
    Function.prototype(message)

    if (_default) return _default

    return null
  }

  releaseEvents(): void {}

  requestAnimationFrame = setTimeout

  resizeBy(x?: number, y?: number): void {
    Function.prototype(x, y)
  }

  resizeTo(x?: number, y?: number): void {
    Function.prototype(x, y)
  }

  scroll(x?: number | ScrollToOptions, y?: number): void {
    Function.prototype(x, y)
  }

  scrollBy(x?: number | ScrollToOptions, y?: number): void {
    Function.prototype(x, y)
  }

  scrollTo(x?: number | ScrollToOptions, y?: number): void {
    Function.prototype(x, y)
  }

  stop(): void {}

  webkitCancelAnimationFrame = clearTimeout

  webkitConvertPointFromNodeToPage(node: Node, pt: WebKitPoint): WebKitPoint {
    Function.prototype(node)
    return pt
  }

  webkitConvertPointFromPageToNode(node: Node, pt: WebKitPoint): WebKitPoint {
    Function.prototype(node)
    return pt
  }

  webkitRequestAnimationFrame = setTimeout

  createImageBitmap(): Promise<ImageBitmap> {
    return Promise.reject('unimplemented')
  }
}
