import { NODE_TYPE, NodeImpl } from './Node'
import { Test, describe, given, it } from '@typed/test'

const document = {} as Document

export const test: Test = describe(`NodeImpl`, [
  describe(`textContent`, [
    describe(`getter`, [
      given(`the Node is a Text Node`, [
        it(`it returns the nodes .data value`, ({ equal }) => {
          const node = new NodeImpl(document)
          const data = 'test'

          node.nodeType = NODE_TYPE.TEXT_NODE
          ;(node as any).data = data

          equal(data, node.textContent)
        }),
      ]),
    ]),
  ]),

  describe(`insertBefore`, [
    given(`a node, and a reference node`, [
      it(`inserts node before the reference node`, ({ same }) => {
        const node = new NodeImpl(document)
        const childNode = new NodeImpl(document)
        node.appendChild(childNode)

        const newNode = new NodeImpl(document)

        node.insertBefore(newNode, childNode)

        same(2, node.childNodes.length)

        same(newNode, node.childNodes[0])
        same(childNode, node.childNodes[1])
      }),
    ]),
  ]),
])
