import { NodeImpl } from './Node'

export class TextImpl extends NodeImpl implements Text {
  data: string
  readonly wholeText: string
  readonly assignedSlot: HTMLSlotElement | null

  splitText(offset: number): Text {
    return new TextImpl(this.ownerDocument, { data: this.data.slice(offset) })
  }

  get length(): number {
    return this.data.length
  }

  appendData(arg: string): void {
    this.data += arg
  }

  deleteData(offset: number, count: number): void {
    this.data = this.data.slice(0, offset) + this.data.slice(offset + count)
  }

  insertData(offset: number, arg: string): void {
    const before = this.data.slice(0, offset)
    const after = this.data.slice(offset)

    this.data = before + arg + after
  }

  replaceData(offset: number, count: number, arg: string): void {
    const before = this.data.slice(0, offset)
    const after = this.data.slice(offset + count)

    this.data = before + arg + after
  }

  substringData(offset: number, count: number): string {
    return this.data.substr(offset, count)
  }

  remove() {
    if (this.parentNode) this.parentNode.removeChild(this)
  }
}
