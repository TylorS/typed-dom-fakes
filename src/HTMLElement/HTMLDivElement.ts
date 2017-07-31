import { HTMLElementImpl } from './HTMLElement'

export class HTMLDivElementImpl extends HTMLElementImpl implements HTMLDivElement {
  /**
   * Sets or retrieves how the object is aligned with adjacent text.
   */
  align: string
  /**
   * Sets or retrieves whether the browser automatically performs wordwrap.
   */
  noWrap: boolean

  constructor(document: Document, options: Record<string, any> = {}) {
    super(document, 'div', options)
  }
}
