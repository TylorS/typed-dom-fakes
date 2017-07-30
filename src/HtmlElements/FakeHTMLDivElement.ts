import { FakeHTMLElement } from '../FakeHTMLElement'

export class FakeHTMLDivElement extends FakeHTMLElement implements HTMLDivElement {
  align: string = ''
  noWrap: boolean = false

  constructor() {
    super('div')
  }
}