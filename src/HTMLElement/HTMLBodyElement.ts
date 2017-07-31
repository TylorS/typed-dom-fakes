import { HTMLElementImpl } from './HTMLElement'

export class HTMLBodyElmentImpl extends HTMLElementImpl implements HTMLBodyElement {
  aLink: any
  background: string
  bgColor: any
  bgProperties: string
  link: any
  noWrap: boolean
  onafterprint: (this: HTMLBodyElement, ev: Event) => any
  onbeforeprint: (this: HTMLBodyElement, ev: Event) => any
  onbeforeunload: (this: HTMLBodyElement, ev: BeforeUnloadEvent) => any
  onblur: (this: HTMLBodyElement, ev: FocusEvent) => any
  onerror: (this: HTMLBodyElement, ev: ErrorEvent) => any
  onfocus: (this: HTMLBodyElement, ev: FocusEvent) => any
  onhashchange: (this: HTMLBodyElement, ev: HashChangeEvent) => any
  onload: (this: HTMLBodyElement, ev: Event) => any
  onmessage: (this: HTMLBodyElement, ev: MessageEvent) => any
  onoffline: (this: HTMLBodyElement, ev: Event) => any
  ononline: (this: HTMLBodyElement, ev: Event) => any
  onorientationchange: (this: HTMLBodyElement, ev: Event) => any
  onpagehide: (this: HTMLBodyElement, ev: PageTransitionEvent) => any
  onpageshow: (this: HTMLBodyElement, ev: PageTransitionEvent) => any
  onpopstate: (this: HTMLBodyElement, ev: PopStateEvent) => any
  onresize: (this: HTMLBodyElement, ev: UIEvent) => any
  onscroll: (this: HTMLBodyElement, ev: UIEvent) => any
  onstorage: (this: HTMLBodyElement, ev: StorageEvent) => any
  onunload: (this: HTMLBodyElement, ev: Event) => any
  text: any
  vLink: any

  constructor(document: Document, options: Record<string, any> = {}) {
    super(document, 'body', options)
  }
}
