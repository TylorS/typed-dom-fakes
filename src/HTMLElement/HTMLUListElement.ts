import { HTMLElementImpl } from './HTMLElement'

export class HTMLUListElementImpl extends HTMLElementImpl implements HTMLUListElement {
  compact: boolean
  type: string

  constructor(document: Document, options: Record<string, any> = {}) {
    super(document, '', options)
  }
}
