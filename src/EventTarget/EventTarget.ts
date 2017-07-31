import { EventImpl } from '../Event'

export class EventTargetImpl implements EventTarget {
  protected bubble: Map<string, Set<EventListenerOrEventListenerObject>> = new Map()
  protected capture: Map<string, Set<EventListenerOrEventListenerObject>> = new Map()

  public addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    useCapture: boolean = false
  ): void {
    const { bubble, capture } = this

    const eventMap = useCapture ? capture : bubble

    const eventListeners: Set<EventListenerOrEventListenerObject> =
      eventMap.get(type) || new Set<EventListenerOrEventListenerObject>()

    eventListeners.add(listener)

    if (!eventMap.has(type)) eventMap.set(type, eventListeners)
  }

  public removeEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    useCapture: boolean = false
  ): void {
    const { bubble, capture } = this

    const eventMap = useCapture ? capture : bubble

    const eventListeners = eventMap.get(type)

    if (!eventListeners) return void 0

    eventListeners.delete(listener)
  }

  public dispatchEvent(event: EventImpl): boolean {
    return this.dispatchToCaptureListeners(event) || this.dispatchToBubbleListeners(event)
  }

  protected dispatchToCaptureListeners(event: EventImpl): boolean {
    const listeners = this.capture.get(event.type)

    if (!listeners) return false

    deferListenersCallback(listeners, callEventListeners(event))

    return true
  }

  protected dispatchToBubbleListeners(event: EventImpl): boolean {
    if (!event.bubbles) return false

    const listeners = this.bubble.get(event.type)

    if (!listeners) return false

    deferListenersCallback(listeners, callEventListeners(event))

    return true
  }
}

function deferListenersCallback(
  listeners: Set<EventListenerOrEventListenerObject>,
  f: (listener: EventListenerOrEventListenerObject) => any
) {
  Promise.resolve().then(() => listeners.forEach(f))
}

function callEventListeners(event: EventImpl) {
  return function callEventListener(listener: EventListenerOrEventListenerObject): void {
    if (event.propagationStopped) return void 0

    if (typeof listener === 'object') listener.handleEvent(event)
    else listener(event)
  }
}
