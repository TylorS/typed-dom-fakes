import { HTMLElementImpl } from './HTMLElement'

export class HTMLLIElementImpl extends HTMLElementImpl implements HTMLLIElement {
  type: string
  value: number

  constructor(document: Document, options: Record<string, any> = {}) {
    super(document, 'li', options)
  }
}
