import { Test, describe, given, it } from '@typed/test'

import { ElementImpl } from './Element'

const document = {} as Document

export const test: Test = describe(`Element`, [
  describe(`className`, [
    describe(`setting`, [
      it(`syncs with classList`, ({ equal }) => {
        const element = new ElementImpl(document, 'div')

        element.className = 'foo bar'

        equal('foo', element.classList[0])
        equal('bar', element.classList[1])
      }),
    ]),

    describe(`getting`, [
      it(`stays in sync with classList`, ({ equal }) => {
        const element = new ElementImpl(document, 'div')

        element.classList.add('foo')
        element.classList.add('bar')

        equal('foo bar', element.className)
      }),
    ]),
  ]),

  describe(`getElementsByTagName`, [
    given(`a tagName`, [
      it(`returns a NodeList of Element`, ({ same }) => {
        const element = new ElementImpl(document, 'div')
        const expectedTagName = 'p'

        const firstChild = new ElementImpl(document, 'div')
        const secondChild = new ElementImpl(document, expectedTagName)
        const thirdChild = new ElementImpl(document, 'div')

        element.appendChild(firstChild)
        element.appendChild(secondChild)
        element.appendChild(thirdChild)

        const matches = element.getElementsByTagName(expectedTagName)

        same(secondChild as Element, matches[0])
      }),
    ]),
  ]),

  describe(`matches`, [
    given(`a cssSelector`, [
      it(`returns true for a mathchin tagName`, ({ ok }) => {
        const tagName = 'div'
        const element = new ElementImpl(document, tagName)

        ok(element.matches(tagName))
      }),

      it(`returns false if the tagName does not match`, ({ notOk }) => {
        const element = new ElementImpl(document, 'div')

        notOk(element.matches('p'))
      }),

      it(`returns true for a matching className`, ({ ok }) => {
        const className = 'foo bar'
        const element = new ElementImpl(document, 'div')
        element.className = className

        ok(element.matches('.foo'))
        ok(element.matches('.bar'))
        ok(element.matches('.foo.bar'))
      }),

      it(`returns false for wrong classname`, ({ notOk }) => {
        const element = new ElementImpl(document, 'div')

        notOk(element.matches('.foo'))
        notOk(element.matches('.bar'))
        notOk(element.matches('.foo.bar'))
      }),

      it(`returns true for a matching id`, ({ ok }) => {
        const id = 'foo'
        const element = new ElementImpl(document, 'div')

        element.id = id

        ok(element.matches(`#${id}`))
      }),

      it(`returns false for wrong id`, ({ notOk }) => {
        const id = 'foo'

        const element = new ElementImpl(document, 'div')

        notOk(element.matches(`#${id}`))
      }),

      it(`returns true for pseudo-selector`, ({ ok }) => {
        const parentElement = new ElementImpl(document, 'div')
        const element = new ElementImpl(document, 'div')

        parentElement.appendChild(element)

        ok(element.matches(':first-child'))
      }),

      it(`returns true for attribute matching`, ({ ok }) => {
        const element = new ElementImpl(document, 'div')
        element.setAttribute('test', 'test')

        ok(element.matches(`[test]`))
        ok(element.matches(`[test='test']`))
      }),

      describe(`complex selectors`, [
        it('return true given `div > .parent > .foo ~ .bar', ({ ok }) => {
          const child = new ElementImpl(document, 'div')
          child.classList.add('bar')

          const sibling = new ElementImpl(document, 'div')

          sibling.classList.add('foo')

          const parent = new ElementImpl(document, 'div')
          parent.classList.add('parent')

          const grandparent = new ElementImpl(document, 'div')

          parent.appendChild(sibling)
          parent.appendChild(child)

          grandparent.appendChild(parent)

          ok(child.matches(`div > .parent > .foo ~ .bar`))
        }),
      ]),
    ]),
  ]),
])