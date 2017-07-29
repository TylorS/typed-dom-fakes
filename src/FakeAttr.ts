import { FakeNode } from './FakeNode'

export class FakeAttr extends FakeNode implements Attr {
  public name: string
  public value: string
  public ownerElement: Element
  public prefix: string | null = null
  public specified: boolean = false

  constructor(name: string, value: string) {
    super()

    this.name = name
    this.value = value
  }
}