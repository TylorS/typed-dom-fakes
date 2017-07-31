import { HTMLElementImpl } from './HTMLElement'

export class HTMLStyleElementImpl extends HTMLElementImpl implements HTMLStyleElement {
  disabled: boolean
  media: string
  type: string

  // TODO?
  readonly sheet: StyleSheet

  constructor(document: Document, options: Record<string, any> = {}) {
    super(document, 'style', options)
  }
}
