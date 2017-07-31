import { Test, describe, it } from '@typed/test'

import { EventTargetImpl } from './EventTarget'

export const test: Test = describe(`EventTarget`, [
  it(`implements EventTarget interface`, ({ equal }) => {
    const event: EventTarget = new EventTargetImpl()

    equal('function', typeof event.addEventListener)
    equal('function', typeof event.removeEventListener)
    equal('function', typeof event.dispatchEvent)
  }),

  describe(`addEventListener`, [
    it(`registers an event listener`, ({ equal }, done) => {
      const type = 'click'
      const event = { type, bubbles: true } as Event

      function listener(ev: Event) {
        equal(event, ev)
        done()
      }

      const target: EventTarget = new EventTargetImpl()

      target.addEventListener(type, listener)

      target.dispatchEvent(event)
    }),
  ]),

  describe(`dispatchEvent`, [
    it(`calls event listener`, ({ equal }, done) => {
      const type = 'click'
      const event = { type, bubbles: true } as Event

      function listener(ev: Event) {
        equal(event, ev)
        done()
      }

      const target: EventTarget = new EventTargetImpl()

      target.addEventListener(type, listener)

      target.dispatchEvent(event)
    }),
  ]),

  describe(`removeEventListener`, [
    it(`removes a previously added event listerner`, ({ ok }, done) => {
      const type = 'click'
      const event = { type, bubbles: false } as Event

      function listener() {
        done(new Error('Should not call listener'))
      }

      const target: EventTarget = new EventTargetImpl()

      target.addEventListener(type, listener)

      target.removeEventListener(type, listener)

      ok(true)

      target.dispatchEvent(event)

      setTimeout(done)
    }),
  ]),
])
