import { HTMLElementImpl } from './HTMLElement'

export class HTMLBRElementImpl extends HTMLElementImpl implements HTMLBRElement {
  clear: string

  constructor(document: Document, options: Record<string, any> = {}) {
    super(document, 'br', options)
  }
}
