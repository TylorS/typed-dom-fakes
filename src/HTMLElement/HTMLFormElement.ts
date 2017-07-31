import { EventImpl } from '../Event'
import { HTMLElementImpl } from './HTMLElement'

export class HTMLFormElementImpl extends HTMLElementImpl implements HTMLFormElement {
  // TODO implement behaviors
  acceptCharset: string
  action: string
  autocomplete: string
  readonly elements: HTMLFormControlsCollection
  encoding: string
  enctype: string
  readonly length: number
  method: string
  name: string
  noValidate: boolean
  target: string

  constructor(document: Document, options: Record<string, any> = {}) {
    super(document, 'form', options)
  }

  checkValidity(): boolean {
    return true
  }

  item(name?: any, index?: any): any {
    Function.prototype(name, index)
  }

  namedItem(name: string): any {
    Function.prototype(name)
  }

  reset(): void {
    this.dispatchEvent(new EventImpl('reset', false))
  }

  submit(): void {
    this.dispatchEvent(new EventImpl('submit'))
  }
}
