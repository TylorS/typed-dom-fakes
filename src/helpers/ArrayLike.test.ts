import { Test, describe, it } from '@typed/test'

import { ArrayLike } from './ArrayLike'

export const test: Test = describe(`ArrayLike`, [
  it(`creates an array like object`, ({ same, equal }) => {
    const arrayLike = new ArrayLike()

    const testObject = {}

    equal(0, arrayLike.length)

    arrayLike[0] = testObject

    equal(1, arrayLike.length)
    same(testObject, arrayLike[0])
  }),

  describe(`length`, [
    describe(`setting`, [
      it(`removes items when being lowered`, ({ equal }) => {
        const arrayLike = new ArrayLike()

        arrayLike[0] = 0
        arrayLike[1] = 1

        equal(2, arrayLike.length)

        arrayLike.length = 0

        const isVoid = equal(void 0)
        
        isVoid(arrayLike[0])
        isVoid(arrayLike[1])
      }),

      it(`reports new size when being raised`, ({ equal }) => {
        const arrayLike = new ArrayLike()

        arrayLike[0] = 0
        arrayLike[1] = 1

        equal(2, arrayLike.length)

        arrayLike.length = 4

        equal(4, arrayLike.length)

        equal(0, arrayLike[0])
        equal(1, arrayLike[1])
        equal(void 0, arrayLike[2])
        equal(void 0, arrayLike[3])
      })
    ])
  ])
])