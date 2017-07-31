import { Test, describe, given, it } from '@typed/test'

import { ArrayLikeImpl } from './ArrayLike'

export const test: Test = describe(`ArrayLike`, [
  it(`creates an array like object`, ({ same, equal }) => {
    const arrayLike = new ArrayLikeImpl()

    const testObject = {}

    equal(0, arrayLike.length)

    arrayLike[0] = testObject

    equal(1, arrayLike.length)
    same(testObject, arrayLike[0])
  }),

  describe(`length`, [
    describe(`setting`, [
      it(`removes items when being lowered`, ({ equal }) => {
        const arrayLike = new ArrayLikeImpl()

        arrayLike[0] = 0
        arrayLike[1] = 1

        equal(2, arrayLike.length)

        arrayLike.length = 0

        const isVoid = equal(void 0)

        isVoid(arrayLike[0])
        isVoid(arrayLike[1])
      }),

      it(`reports new size when being raised`, ({ equal }) => {
        const arrayLike = new ArrayLikeImpl()

        arrayLike[0] = 0
        arrayLike[1] = 1

        equal(2, arrayLike.length)

        arrayLike.length = 4

        equal(4, arrayLike.length)

        equal(0, arrayLike[0])
        equal(1, arrayLike[1])
        equal(void 0, arrayLike[2])
        equal(void 0, arrayLike[3])
      }),
    ]),
  ]),

  describe(`push`, [
    it(`adds a new item to array like`, ({ equal }) => {
      const arrayLike = new ArrayLikeImpl<number>()

      arrayLike[0] = 0

      equal(1, arrayLike.length)

      arrayLike.push(1)

      equal(1, arrayLike[1])
    }),

    it(`keeps correct length`, ({ equal }) => {
      const arrayLike = new ArrayLikeImpl<number>()

      arrayLike.length = 3

      arrayLike.push(4)

      equal(4, arrayLike.length)
    }),
  ]),

  describe(`findIndex`, [
    given(`a predicate function`, [
      it(`returns -1 if not found`, ({ equal }) => {
        const arrayLike = new ArrayLikeImpl()

        const index = arrayLike.findIndex(x => x === 0)

        equal(-1, index)
      }),

      it(`returns index a value is as when found`, ({ equal }) => {
        const arrayLike = new ArrayLikeImpl()

        arrayLike[0] = 0
        arrayLike[1] = 100

        const index = arrayLike.findIndex(x => x === 100)

        equal(1, index)
      }),
    ]),
  ]),

  describe(`remove`, [
    given(`an index`, [
      it(`removes an item`, ({ equal }) => {
        const arrayLike = new ArrayLikeImpl<number>()

        arrayLike[0] = 0
        arrayLike[1] = 1

        arrayLike.removeFromIndex(1)

        equal(void 0, arrayLike[1])
      }),

      it(`moves following items to the left`, ({ equal }) => {
        const arrayLike = new ArrayLikeImpl<number>()

        arrayLike[0] = 1
        arrayLike[1] = 2
        arrayLike[2] = 3
        arrayLike[3] = 4
        arrayLike[4] = 5

        equal(5, arrayLike.length)

        arrayLike.removeFromIndex(2)

        equal(1, arrayLike[0])
        equal(2, arrayLike[1])
        equal(4, arrayLike[2])
        equal(5, arrayLike[3])

        equal(4, arrayLike.length)
      }),
    ]),

    given(`an index and a count`, [
      it(`removes n number of items`, ({ equal }) => {
        const arrayLike = new ArrayLikeImpl<number>()
        const index = 2
        const count = 2

        arrayLike[0] = 0
        arrayLike[1] = 10
        arrayLike[2] = 20
        arrayLike[3] = 30
        arrayLike[4] = 40
        arrayLike[5] = 50

        equal(6, arrayLike.length)

        arrayLike.removeFromIndex(index, count)

        equal(0, arrayLike[0])
        equal(10, arrayLike[1])
        equal(40, arrayLike[2])
        equal(50, arrayLike[3])
        equal(4, arrayLike.length)
      }),

      it(`returns the correct length`, ({ equal }) => {
        const arrayLike = new ArrayLikeImpl<number>()

        arrayLike[0] = 0
        arrayLike[1] = 10
        arrayLike[2] = 20
        arrayLike[3] = 30
        arrayLike[4] = 40
        arrayLike[5] = 50

        arrayLike.removeFromIndex(5, 2)

        equal([0, 10, 20, 30, 40], Array.from(arrayLike))
      }),
    ]),
  ]),
  describe(`filter`, [
    given(`a predicate`, [
      it(`returns a new ArrayLike with only values passing predicate`, ({ equal }) => {
        const a = new ArrayLikeImpl<number>()
        const isEven = (value: number) => value % 2 === 0

        a[0] = 1
        a[1] = 2
        a[2] = 3
        a[3] = 4
        a[4] = 5

        const b = a.filter(isEven)

        equal(2, b[0])
        equal(4, b[1])
        equal(2, b.length)
      }),
    ]),
  ]),

  describe(`insertBefore`, [
    given(`a value and a valid reference value`, [
      it(`inserts the new value before reference value`, ({ equal }) => {
        const arrayLike = new ArrayLikeImpl<number>()

        arrayLike[0] = 1
        arrayLike[1] = 2
        arrayLike[2] = 3

        arrayLike.insertBefore(4, 3)

        equal(1, arrayLike[0])
        equal(2, arrayLike[1])
        equal(4, arrayLike[2])
        equal(3, arrayLike[3])
      }),
    ]),
  ]),
])
