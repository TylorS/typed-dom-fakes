export class FakeEvent implements Event {
  bubbles: boolean = true;
  cancelable: boolean = true;
  cancelBubble: boolean = true;
  currentTarget: EventTarget;
  defaultPrevented: boolean = false;
  eventPhase: number = 0;
  isTrusted: boolean = false;
  returnValue: boolean = false;
  srcElement: Element | null = null;
  target: EventTarget;
  timeStamp: number = 0;
  type: string;
  scoped: boolean = false;

  // FakeEvent specific
  propagationStopped: boolean = false

  constructor(type: string) {
    this.type = type
  }

  initEvent(type: string, bubbles: boolean, cancelable: boolean): void {
    this.type = type
    this.bubbles = bubbles
    this.cancelable = cancelable
  }

  preventDefault(): void {
    this.defaultPrevented = true
  }

  stopImmediatePropagation(): void {
    this.propagationStopped = true
  }

  stopPropagation(): void {
    this.stopImmediatePropagation()
  }

  // TODO
  deepPath(): EventTarget[] {
    return []
  }

  // DEPRECATED
  readonly AT_TARGET: number;
  readonly BUBBLING_PHASE: number;
  readonly CAPTURING_PHASE: number;
}