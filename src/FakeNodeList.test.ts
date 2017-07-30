import { Test, describe, it } from '@typed/test'

import { FakeNode } from './FakeNode'
import { createFakeNodeList } from './FakeNodeList'

export const test: Test = describe(`FakeNodeList`, [
  it(`is an ArrayLike`, ({ equal, same }) => {
    const nodeList = createFakeNodeList()

    equal(0, nodeList.length)

    const node = new FakeNode()

    nodeList.push(node)

    equal(1, nodeList.length)
    same(node, nodeList[0])
  })
])