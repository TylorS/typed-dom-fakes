import { HTMLElementImpl } from './HTMLElement'

export class HTMLHtmlElementImpl extends HTMLElementImpl implements HTMLHtmlElement {
  version: string = '5'

  constructor(document: Document, options: Record<string, any> = {}) {
    super(document, 'html', options)
  }
}
