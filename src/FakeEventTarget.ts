export type EventType = string

export class FakeEventTarget implements EventTarget {
  protected bubble: Map<EventType, Set<EventListenerOrEventListenerObject>> = new Map()
  protected useCapture: Map<EventType, Set<EventListenerOrEventListenerObject>> = new Map()

  public addEventListener(
    eventType: string,
    listener?: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void {
    if (!listener) return void 0

    const useCapture = shouldUseCapture(options)

    const eventMap = useCapture ? this.useCapture : this.bubble
    const eventListeners: Set<EventListenerOrEventListenerObject> = eventMap.get(eventType) || new Set()

    eventListeners.add(listener)

    if (!eventMap.has(eventType))
      eventMap.set(eventType, eventListeners)
  }

  /*
   * Calls event listeners in the order they were added.
   */
  public dispatchEvent(event: Event): boolean {
    const calledCaptureListeners = this.callCaptureEventListeners(event)
    const calledBubbleListeners =this.callBubbleEventListeners(event)

    return calledCaptureListeners || calledBubbleListeners
  }

  public removeEventListener(
    type: string,
    listener?: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void {
    const useCapture = shouldUseCapture(options)

    const eventMap = useCapture ? this.useCapture : this.bubble

    const eventListeners = eventMap.get(type)

    if (!eventListeners) return void 0

    eventListeners.delete(listener)
  }

  protected callBubbleEventListeners(event: Event): boolean {
    const { bubble } = this
    const bubbleEventListeners = bubble.get(event.type)

    if (!bubbleEventListeners) return false

    callEventListeners(Array.from(bubbleEventListeners), event)

    return true
  }

  protected callCaptureEventListeners(event: Event): boolean {
    const { useCapture } = this
    const captureEventListeners = useCapture.get(event.type)

    if (!captureEventListeners) return false

    callEventListeners(Array.from(captureEventListeners), event)

    return true
  }
}

function shouldUseCapture(options?: boolean | AddEventListenerOptions): boolean {
  return typeof options === 'boolean'
    ? options
    : options.hasOwnProperty('capture') ? options.capture : false
}

function callEventListeners(listeners: Array<EventListenerOrEventListenerObject>, event: Event): void {
  for (const listener of listeners) {
    if (isEventListenerObject(listener))
      listener.handleEvent(event)
    else 
      listener(event)
  }
}

function isEventListenerObject(listener: EventListenerOrEventListenerObject): listener is EventListenerObject {
  return typeof listener === 'object'
}
