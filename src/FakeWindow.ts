import { FakeCSSRuleList } from './FakeCSSRuleList'
import { FakeCSSStyleDeclaration } from './FakeCSSStyleDeclaration'
import { FakeEventTarget } from './FakeEventTarget'
import { id } from '167'
import { mockStorage } from 'mock-storage'

export class FakeWindow extends FakeEventTarget implements Window {
  clearInterval = clearInterval
  clearTimeout = clearTimeout
  clearImmediate = clearImmediate || clearTimeout

  setInterval = setInterval
  setTimeout = setTimeout
  setImmediate = setImmediate || setTimeout

  sessionStorage = mockStorage()
  localStorage = mockStorage()
  console = console

  indexedDB = indexedDB || ({} as IDBFactory)
  atob = atob || id
  btoa = btoa || id

  fetch = fetch

  applicationCache: ApplicationCache
  caches: CacheStorage
  clientInformation: Navigator
  closed: boolean = false
  crypto: Crypto
  defaultStatus: string = ''
  devicePixelRatio: number = 0
  document: Document = document
  doNotTrack: string = ''
  event: Event | undefined = void 0
  external: External
  frameElement: Element
  frames: Window
  history: History
  innerHeight: number = 0
  innerWidth: number = 0
  isSecureContext: boolean = false
  length: number = 0
  location: Location
  locationbar: BarProp
  menubar: BarProp
  msContentScript: ExtensionScriptApis
  msCredentials: MSCredentials
  name: string = ''
  navigator: Navigator
  offscreenBuffering: string | boolean = false
  onpointercancel: (this: GlobalEventHandlers, ev: PointerEvent) => any
  onpointerdown: (this: GlobalEventHandlers, ev: PointerEvent) => any
  onpointerenter: (this: GlobalEventHandlers, ev: PointerEvent) => any
  onpointerleave: (this: GlobalEventHandlers, ev: PointerEvent) => any
  onpointermove: (this: GlobalEventHandlers, ev: PointerEvent) => any
  onpointerout: (this: GlobalEventHandlers, ev: PointerEvent) => any
  onpointerover: (this: GlobalEventHandlers, ev: PointerEvent) => any
  onpointerup: (this: GlobalEventHandlers, ev: PointerEvent) => any
  onwheel: (this: GlobalEventHandlers, ev: WheelEvent) => any
  onabort: (this: Window, ev: UIEvent) => any
  onafterprint: (this: Window, ev: Event) => any
  onbeforeprint: (this: Window, ev: Event) => any
  onbeforeunload: (this: Window, ev: BeforeUnloadEvent) => any
  onblur: (this: Window, ev: FocusEvent) => any
  oncanplay: (this: Window, ev: Event) => any
  oncanplaythrough: (this: Window, ev: Event) => any
  onchange: (this: Window, ev: Event) => any
  onclick: (this: Window, ev: MouseEvent) => any
  oncompassneedscalibration: (this: Window, ev: Event) => any
  oncontextmenu: (this: Window, ev: PointerEvent) => any
  ondblclick: (this: Window, ev: MouseEvent) => any
  ondevicelight: (this: Window, ev: DeviceLightEvent) => any
  ondevicemotion: (this: Window, ev: DeviceMotionEvent) => any
  ondeviceorientation: (this: Window, ev: DeviceOrientationEvent) => any
  ondrag: (this: Window, ev: DragEvent) => any
  ondragend: (this: Window, ev: DragEvent) => any
  ondragenter: (this: Window, ev: DragEvent) => any
  ondragleave: (this: Window, ev: DragEvent) => any
  ondragover: (this: Window, ev: DragEvent) => any
  ondragstart: (this: Window, ev: DragEvent) => any
  ondrop: (this: Window, ev: DragEvent) => any
  ondurationchange: (this: Window, ev: Event) => any
  onemptied: (this: Window, ev: Event) => any
  onended: (this: Window, ev: MediaStreamErrorEvent) => any
  onerror: ErrorEventHandler
  onfocus: (this: Window, ev: FocusEvent) => any
  onhashchange: (this: Window, ev: HashChangeEvent) => any
  oninput: (this: Window, ev: Event) => any
  oninvalid: (this: Window, ev: Event) => any
  onkeydown: (this: Window, ev: KeyboardEvent) => any
  onkeypress: (this: Window, ev: KeyboardEvent) => any
  onkeyup: (this: Window, ev: KeyboardEvent) => any
  onload: (this: Window, ev: Event) => any
  onloadeddata: (this: Window, ev: Event) => any
  onloadedmetadata: (this: Window, ev: Event) => any
  onloadstart: (this: Window, ev: Event) => any
  onmessage: (this: Window, ev: MessageEvent) => any
  onmousedown: (this: Window, ev: MouseEvent) => any
  onmouseenter: (this: Window, ev: MouseEvent) => any
  onmouseleave: (this: Window, ev: MouseEvent) => any
  onmousemove: (this: Window, ev: MouseEvent) => any
  onmouseout: (this: Window, ev: MouseEvent) => any
  onmouseover: (this: Window, ev: MouseEvent) => any
  onmouseup: (this: Window, ev: MouseEvent) => any
  onmousewheel: (this: Window, ev: WheelEvent) => any
  onmsgesturechange: (this: Window, ev: MSGestureEvent) => any
  onmsgesturedoubletap: (this: Window, ev: MSGestureEvent) => any
  onmsgestureend: (this: Window, ev: MSGestureEvent) => any
  onmsgesturehold: (this: Window, ev: MSGestureEvent) => any
  onmsgesturestart: (this: Window, ev: MSGestureEvent) => any
  onmsgesturetap: (this: Window, ev: MSGestureEvent) => any
  onmsinertiastart: (this: Window, ev: MSGestureEvent) => any
  onmspointercancel: (this: Window, ev: MSPointerEvent) => any
  onmspointerdown: (this: Window, ev: MSPointerEvent) => any
  onmspointerenter: (this: Window, ev: MSPointerEvent) => any
  onmspointerleave: (this: Window, ev: MSPointerEvent) => any
  onmspointermove: (this: Window, ev: MSPointerEvent) => any
  onmspointerout: (this: Window, ev: MSPointerEvent) => any
  onmspointerover: (this: Window, ev: MSPointerEvent) => any
  onmspointerup: (this: Window, ev: MSPointerEvent) => any
  onoffline: (this: Window, ev: Event) => any
  ononline: (this: Window, ev: Event) => any
  onorientationchange: (this: Window, ev: Event) => any
  onpagehide: (this: Window, ev: PageTransitionEvent) => any
  onpageshow: (this: Window, ev: PageTransitionEvent) => any
  onpause: (this: Window, ev: Event) => any
  onplay: (this: Window, ev: Event) => any
  onplaying: (this: Window, ev: Event) => any
  onpopstate: (this: Window, ev: PopStateEvent) => any
  onprogress: (this: Window, ev: ProgressEvent) => any
  onratechange: (this: Window, ev: Event) => any
  onreadystatechange: (this: Window, ev: ProgressEvent) => any
  onreset: (this: Window, ev: Event) => any
  onresize: (this: Window, ev: UIEvent) => any
  onscroll: (this: Window, ev: UIEvent) => any
  onseeked: (this: Window, ev: Event) => any
  onseeking: (this: Window, ev: Event) => any
  onselect: (this: Window, ev: UIEvent) => any
  onstalled: (this: Window, ev: Event) => any
  onstorage: (this: Window, ev: StorageEvent) => any
  onsubmit: (this: Window, ev: Event) => any
  onsuspend: (this: Window, ev: Event) => any
  ontimeupdate: (this: Window, ev: Event) => any
  ontouchcancel: (ev: TouchEvent) => any
  ontouchend: (ev: TouchEvent) => any
  ontouchmove: (ev: TouchEvent) => any
  ontouchstart: (ev: TouchEvent) => any
  onunload: (this: Window, ev: Event) => any
  onvolumechange: (this: Window, ev: Event) => any
  onwaiting: (this: Window, ev: Event) => any
  opener: any
  orientation: string | number = 0
  outerHeight: number = 0
  outerWidth: number = 0
  pageXOffset: number = 0
  pageYOffset: number = 0
  parent: Window
  performance: Performance
  personalbar: BarProp
  screen: Screen
  screenLeft: number = 0
  screenTop: number = 0
  screenX: number = 0
  screenY: number = 0
  scrollbars: BarProp
  scrollX: number = 0
  scrollY: number = 0
  self: Window
  speechSynthesis: SpeechSynthesis
  status: string = ''
  statusbar: BarProp
  styleMedia: StyleMedia
  toolbar: BarProp
  top: Window
  window: Window
  URL: typeof URL
  URLSearchParams: typeof URLSearchParams
  Blob: typeof Blob
  customElements: CustomElementRegistry

  alert(message?: any): void {
    Function.prototype(message)
  }

  blur(): void {
    return void 0
  }

  cancelAnimationFrame(handle: number): void {
    clearTimeout(handle)
  }

  captureEvents(): void {
    return void 0
  }

  close(): void {
    return void 0
  }

  confirm(message?: string): boolean {
    return !!message
  }

  departFocus(navigationReason: NavigationReason, origin: FocusNavigationOrigin): void {
    Function.prototype(navigationReason, origin)
  }

  focus(): void {
    return void 0
  }

  getComputedStyle(elt: Element, pseudoElt?: string): CSSStyleDeclaration {
    Function.prototype(elt, pseudoElt)

    return new FakeCSSStyleDeclaration()
  }

  getMatchedCSSRules(elt: Element, pseudoElt?: string): FakeCSSRuleList {
    Function.prototype(elt, pseudoElt)

    return new FakeCSSRuleList()
  }

  getSelection(): Selection {
    return {} as Selection
  }

  matchMedia(mediaQuery: string): MediaQueryList {
    return Function.prototype(mediaQuery), {} as MediaQueryList
  }

  moveBy(x?: number, y?: number): void {
    return Function.prototype(x, y)
  }

  moveTo(x?: number, y?: number): void {
    return Function.prototype(x, y)
  }

  msWriteProfilerMark(profilerMarkName: string): void {
    Function.prototype(profilerMarkName)
  }

  open(url?: string, target?: string, features?: string, replace?: boolean): Window {
    Function.prototype(url, target, features, replace)

    return this
  }

  postMessage(message: any, targetOrigin: string, transfer?: any[]): void {
    Function.prototype(message, targetOrigin, transfer)
  }

  print(): void {
    return void 0
  }

  prompt(message?: string, _default?: string): string | null {
    Function.prototype(message, _default)

    return null
  }

  releaseEvents(): void {
    return void 0
  }

  requestAnimationFrame(callback: FrameRequestCallback): number {
    return setTimeout(callback, 0) as any
  }

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

  stop(): void {
    return void 0
  }

  webkitCancelAnimationFrame(handle: number): void {
    clearTimeout(handle)
  }

  webkitConvertPointFromNodeToPage(node: Node, pt: WebKitPoint): WebKitPoint {
    Function.prototype(node, pt)

    return {} as WebKitPoint
  }

  webkitConvertPointFromPageToNode(node: Node, pt: WebKitPoint): WebKitPoint {
    Function.prototype(node, pt)

    return {} as WebKitPoint
  }

  webkitRequestAnimationFrame(callback: FrameRequestCallback): number {
    return setTimeout(callback, 0) as any
  }

  createImageBitmap(): Promise<ImageBitmap> {
    return Promise.resolve({} as ImageBitmap)
  }
}

export function fetch(url: RequestInfo | string, options?: RequestInit): Promise<Response> {
  options = options || {}
  return new Promise<Response>((resolve, reject) => {
    let request = new XMLHttpRequest()

    request.open(options.method || 'get', url as string)

    for (let i in options.headers) {
      request.setRequestHeader(i, options.headers[i])
    }

    request.withCredentials = options.credentials == 'include'

    request.onload = () => {
      resolve(response())
    }

    request.onerror = reject

    request.send(options.body)

    function response(): Response {
      let keys: Array<string> = [],
        all: Array<[string, string]> = [],
        headers: Record<string, string> = {},
        header: string

      request
        .getAllResponseHeaders()
        .replace(/^(.*?):\s*([\s\S]*?)$/gm, (_: any, ...args: Array<any>) => {
          let [key, value] = args
          keys.push((key = key.toLowerCase()))
          all.push([key, value])
          header = headers[key]
          headers[key] = header ? `${header},${value}` : value

          return ''
        })

      return {
        ok: ((request.status / 200) | 0) == 1, // 200-299
        status: request.status,
        statusText: request.statusText,
        url: request.responseURL,
        clone: response,
        text: () => Promise.resolve(request.responseText),
        json: () => Promise.resolve(request.responseText).then(JSON.parse),
        blob: () => Promise.resolve(new Blob([request.response])),
        headers: {
          keys: () => keys,
          entries: () => all,
          get: (n: string) => headers[n.toLowerCase()],
          has: (n: string) => n.toLowerCase() in headers,
        },
      } as any as Response
    }
  })
}
