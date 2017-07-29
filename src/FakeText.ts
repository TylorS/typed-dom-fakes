import { FakeNode, NodeType } from './FakeNode'

export class FakeText extends FakeNode implements Text {
  data: string
  assignedSlot: HTMLSlotElement | null = null

  get innerHTML(): string {
    return this.data
  }

  get length(): number {
    return this.data.length
  }

  get wholeText(): string {
    return this.data
  }

  constructor(data: string) {
    super()
    this.nodeType = NodeType.TEXT_NODE
    this.data = data
  }

  appendData(arg: string): void {
    this.data += arg
  }

  deleteData(offset: number, count: number): void {
    const before = this.data.slice(0, offset)
    const after = this.data.slice(offset + count)

    this.data = before + after
  }

  insertData(offset: number, arg: string): void {
    const before = this.data.slice(0, offset)
    const after = this.data.slice(offset)

    this.data = before + arg + after
  }

  replaceData(offset: number, count: number, arg: string): void {
    this.deleteData(offset, count)
    this.insertData(offset, arg)
  }

  substringData(offset: number, count: number): string {
    return this.data.slice(offset, offset + count)
  }

  splitText(offset: number): Text {
    return new FakeText(this.data.slice(offset))
  }

  remove(): void {
    if (this.assignedSlot) {
      this.assignedSlot.remove()
    }
  }
}
