export class EventImpl implements Event {
  bubbles: boolean // assigned in constructor
  cancelable: boolean // assigned in constructor
  currentTarget: EventTarget // set during event dispatch
  defaultPrevented: boolean = false // set by using preventDefault()
  target: EventTarget // set during event dispatch
  type: string // asigned in constructor

  // Implementation specific
  propagationStopped: boolean = false // set using stopPropagation()

  // currently un-implemented due to need
  eventPhase: number
  scoped: boolean
  timeStamp: number
  isTrusted: boolean
  returnValue: boolean
  cancelBubble: boolean

  // DEPRECATED or non-standard
  srcElement: Element | null
  readonly AT_TARGET: number
  readonly BUBBLING_PHASE: number
  readonly CAPTURING_PHASE: number

  constructor(type: string, bubbles: boolean = true, cancelable: boolean = true) {
    this.type = type
    this.bubbles = bubbles
    this.cancelable = cancelable
  }

  initEvent(type: string, bubbles: boolean = true, cancelable: boolean = true): void {
    this.type = type
    this.bubbles = bubbles
    this.cancelable = cancelable
  }

  preventDefault() {
    this.defaultPrevented = true
  }

  stopImmediatePropagation() {
    if (this.cancelable) this.propagationStopped = true
  }

  stopPropagation() {
    this.stopImmediatePropagation()
  }

  deepPath(): EventTarget[] {
    return []
  }
}
