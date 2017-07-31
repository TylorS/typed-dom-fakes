import { HTMLElementImpl } from './HTMLElement'

export class HTMLSpanElementImpl extends HTMLElementImpl implements HTMLSpanElement {
  constructor(document: Document, options: Record<string, any> = {}) {
    super(document, 'span', options)
  }
}
