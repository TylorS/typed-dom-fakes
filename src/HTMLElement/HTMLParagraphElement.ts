import { HTMLElementImpl } from './HTMLElement'

export class HTMLParagraphElementImpl extends HTMLElementImpl implements HTMLParagraphElement {
  align: string
  clear: string

  constructor(document: Document, options: Record<string, any> = {}) {
    super(document, 'p', options)
  }
}
