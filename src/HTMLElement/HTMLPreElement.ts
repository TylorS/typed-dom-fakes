import { HTMLElementImpl } from './HTMLElement'

export class HTMLPreElementImpl extends HTMLElementImpl implements HTMLPreElement {
  width: number

  constructor(document: Document, options: Record<string, any> = {}) {
    super(document, 'pre', options)
  }
}
