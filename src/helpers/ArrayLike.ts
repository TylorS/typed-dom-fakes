import { findIndex, keys, length } from '167'

export class ArrayLike<A> {
  [index: number]: A

  protected _length: number;

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

    for (let i = 0; i < indexesToRemove; ++i) this[i + newLength] = void 0
  }

  public push(value: A) {
    if (this._length) this._length++

    this[this.length] = value
  }

  public findIndex(predicate: (value: A) => boolean): number {
    return findIndex(predicate, this)
  }

  /*
   * Does not support negative values for `count`.
   */
  public remove(index: number, count: number = 1): void {
    const currentLength = this.length

    if (currentLength > index) {
      for (let i = index; i < currentLength; ++i) {
        this[i] = this[i + count]
        this[i + count] = void 0
      }
    } else {
      this[index] = void 0
    }

    this._length = currentLength - count
  }

  public filter(predicate: (value: A, index: number) => boolean): ArrayLike<A> {
    const currentLength = this.length
    const arrayLike = new ArrayLike<A>()

    for (let i = 0; i < currentLength; ++i) {
      const value = this[i]

      if (predicate(value, i))
        arrayLike.push(value)
    }

    return arrayLike
  }  
}
