import { Test, describe, given, it } from '@typed/test'

import { FakeText } from './FakeText'

export const test: Test = describe(`FakeText`, [
  given(`textContent`, [
    it(`sets textContent correctly`, ({ equal }) => {
      const content = 'foo'

      const text = new FakeText(content)

      equal(content, text.textContent)
    })
  ])
])