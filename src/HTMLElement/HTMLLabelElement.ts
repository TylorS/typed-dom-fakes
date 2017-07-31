import { HTMLElementImpl } from './HTMLElement'

export class HTMLLabelElementImpl extends HTMLElementImpl implements HTMLLabelElement {
  form: HTMLFormElement
  htmlFor: string

  constructor(document: Document, options: Record<string, any> = {}) {
    super(document, 'label', options)
  }
}
