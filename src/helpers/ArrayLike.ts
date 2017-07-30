import { keys, length } from '167'

export class ArrayLike<A> {
  [index: number]: A

  protected _length: number

  get length(): number {
    if (this._length) return this._length

    return length(keys(this))
  }

  set length(newLength: number) {
    this._length = void 0

    const currentLength = this.length
    if (currentLength === newLength) return

    if (newLength > currentLength) {
      this._length = newLength
      return
    }

    const indexesToRemove = currentLength - newLength

    for (let i = 0; i < indexesToRemove; ++i)
      this[i + newLength] = void 0
  }
}
