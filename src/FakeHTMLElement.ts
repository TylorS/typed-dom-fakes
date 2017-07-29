import { FakeCSSStyleDeclaration } from './FakeCSSStyleDeclaration'
import { FakeElement } from './FakeElement'
import { FakeHTMLCollection } from './FakeHTMLCollection'

export class FakeHTMLElement extends FakeElement implements HTMLElement {
  accessKey: string = ''
  children: FakeHTMLCollection
  contentEditable: string = ''
  dataset: DOMStringMap = {}
  dir: string = ''
  draggable: boolean = false
  hidden: boolean = false
  hideFocus: boolean = false
  innerText: string = ''
  isContentEditable: boolean = true
  lang: string = 'en'
  offsetHeight: number = 0
  offsetLeft: number = 0
  offsetParent: Element
  offsetTop: number = 0
  offsetWidth: number = 0
  onabort: (this: HTMLElement, ev: UIEvent) => any
  onactivate: (this: HTMLElement, ev: UIEvent) => any
  onbeforeactivate: (this: HTMLElement, ev: UIEvent) => any
  onbeforecopy: (this: HTMLElement, ev: ClipboardEvent) => any
  onbeforecut: (this: HTMLElement, ev: ClipboardEvent) => any
  onbeforedeactivate: (this: HTMLElement, ev: UIEvent) => any
  onbeforepaste: (this: HTMLElement, ev: ClipboardEvent) => any
  onblur: (this: HTMLElement, ev: FocusEvent) => any
  oncanplay: (this: HTMLElement, ev: Event) => any
  oncanplaythrough: (this: HTMLElement, ev: Event) => any
  onchange: (this: HTMLElement, ev: Event) => any
  onclick: (this: HTMLElement, ev: MouseEvent) => any
  oncontextmenu: (this: HTMLElement, ev: PointerEvent) => any
  oncopy: (this: HTMLElement, ev: ClipboardEvent) => any
  oncuechange: (this: HTMLElement, ev: Event) => any
  oncut: (this: HTMLElement, ev: ClipboardEvent) => any
  ondblclick: (this: HTMLElement, ev: MouseEvent) => any
  ondeactivate: (this: HTMLElement, ev: UIEvent) => any
  ondrag: (this: HTMLElement, ev: DragEvent) => any
  ondragend: (this: HTMLElement, ev: DragEvent) => any
  ondragenter: (this: HTMLElement, ev: DragEvent) => any
  ondragleave: (this: HTMLElement, ev: DragEvent) => any
  ondragover: (this: HTMLElement, ev: DragEvent) => any
  ondragstart: (this: HTMLElement, ev: DragEvent) => any
  ondrop: (this: HTMLElement, ev: DragEvent) => any
  ondurationchange: (this: HTMLElement, ev: Event) => any
  onemptied: (this: HTMLElement, ev: Event) => any
  onended: (this: HTMLElement, ev: MediaStreamErrorEvent) => any
  onerror: (this: HTMLElement, ev: ErrorEvent) => any
  onfocus: (this: HTMLElement, ev: FocusEvent) => any
  oninput: (this: HTMLElement, ev: Event) => any
  oninvalid: (this: HTMLElement, ev: Event) => any
  onkeydown: (this: HTMLElement, ev: KeyboardEvent) => any
  onkeypress: (this: HTMLElement, ev: KeyboardEvent) => any
  onkeyup: (this: HTMLElement, ev: KeyboardEvent) => any
  onload: (this: HTMLElement, ev: Event) => any
  onloadeddata: (this: HTMLElement, ev: Event) => any
  onloadedmetadata: (this: HTMLElement, ev: Event) => any
  onloadstart: (this: HTMLElement, ev: Event) => any
  onmousedown: (this: HTMLElement, ev: MouseEvent) => any
  onmouseenter: (this: HTMLElement, ev: MouseEvent) => any
  onmouseleave: (this: HTMLElement, ev: MouseEvent) => any
  onmousemove: (this: HTMLElement, ev: MouseEvent) => any
  onmouseout: (this: HTMLElement, ev: MouseEvent) => any
  onmouseover: (this: HTMLElement, ev: MouseEvent) => any
  onmouseup: (this: HTMLElement, ev: MouseEvent) => any
  onmousewheel: (this: HTMLElement, ev: WheelEvent) => any
  onmscontentzoom: (this: HTMLElement, ev: UIEvent) => any
  onmsmanipulationstatechanged: (this: HTMLElement, ev: MSManipulationEvent) => any
  onpaste: (this: HTMLElement, ev: ClipboardEvent) => any
  onpause: (this: HTMLElement, ev: Event) => any
  onplay: (this: HTMLElement, ev: Event) => any
  onplaying: (this: HTMLElement, ev: Event) => any
  onprogress: (this: HTMLElement, ev: ProgressEvent) => any
  onratechange: (this: HTMLElement, ev: Event) => any
  onreset: (this: HTMLElement, ev: Event) => any
  onscroll: (this: HTMLElement, ev: UIEvent) => any
  onseeked: (this: HTMLElement, ev: Event) => any
  onseeking: (this: HTMLElement, ev: Event) => any
  onselect: (this: HTMLElement, ev: UIEvent) => any
  onselectstart: (this: HTMLElement, ev: Event) => any
  onstalled: (this: HTMLElement, ev: Event) => any
  onsubmit: (this: HTMLElement, ev: Event) => any
  onsuspend: (this: HTMLElement, ev: Event) => any
  ontimeupdate: (this: HTMLElement, ev: Event) => any
  onvolumechange: (this: HTMLElement, ev: Event) => any
  onwaiting: (this: HTMLElement, ev: Event) => any
  outerText: string = ''
  spellcheck: boolean = false
  style: CSSStyleDeclaration = new FakeCSSStyleDeclaration()
  tabIndex: number = 0
  title: string = ''

  public blur(): void {
    this.dispatchEvent(new Event('blur', { bubbles: false }))
  }

  public click(): void {
    this.dispatchEvent(new Event('click', { bubbles: true }))
  }

  /** TODO */
  public dragDrop(): boolean {
    return false
  }

  public focus(): void {
    this.dispatchEvent(new Event('focus', { bubbles: true }))
  }

  public msGetInputContext(): MSInputMethodContext {
    return {} as any
  }
}