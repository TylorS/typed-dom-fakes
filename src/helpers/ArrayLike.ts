import { equals, findIndex, keys, length } from '167'

export class ArrayLikeImpl<A> implements ArrayLike<A> {
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

    for (let i = 0; i < indexesToRemove; ++i) this[i + newLength] = void 0
  }

  public push(...values: Array<A>) {
    if (this._length) this._length = this._length + values.length

    for (const value of values) {
      this[this.length] = value
    }
  }

  public findIndex(predicate: (value: A) => boolean): number {
    return findIndex(predicate, this)
  }

  /*
   * Does not support negative values for `count`.
   */
  public removeFromIndex(index: number, count: number = 1): void {
    const currentLength = this.length

    if (currentLength > index) {
      for (let i = index; i < currentLength; ++i) {
        const nextValue = this[i + count]

        if (nextValue !== void 0) {
          this[i] = nextValue
          delete this[i + count]
        } else delete this[i]
      }
    } else this._length = currentLength - count
  }

  public filter(predicate: (value: A, index: number) => boolean): ArrayLikeImpl<A> {
    const arrayLike = new ArrayLikeImpl<A>()

    this.forEach((value, i) => {
      if (predicate(value, i)) arrayLike.push(value)
    })

    return arrayLike
  }

  public insertBefore(value: A, reference: A | null): void {
    if (reference === null) return this.push(value)

    const referenceIndex = findIndex(equals(reference), this)
    const valueIndex = findIndex(equals(value), this)

    if (referenceIndex === -1) return this.push(value)

    if (this.length === 1 && referenceIndex === 0) {
      this[0] = value
      return this.push(reference)
    }

    if (valueIndex === -1) {
      if (this._length) this._length++

      for (let i = this.length; i > referenceIndex; --i) this[i] = this[i - 1]

      this[referenceIndex] = value
    } else {
      this.removeFromIndex(valueIndex, 1)

      return this.insertBefore(value, reference)
    }
  }

  public item(index: number): A {
    return this[index]
  }

  public forEach(f: (value: A, index: number) => any) {
    const { length } = this

    for (let i = 0; i < length; ++i) f(this[i], i)
  }
}
