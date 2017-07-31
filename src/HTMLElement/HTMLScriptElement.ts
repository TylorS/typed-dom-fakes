import { HTMLElementImpl } from './HTMLElement'

export class HTMLScriptElementImpl extends HTMLElementImpl implements HTMLScriptElement {
  async: boolean
  charset: string
  crossOrigin: string | null
  defer: boolean
  event: string
  htmlFor: string
  src: string
  text: string
  type: string
  integrity: string

  constructor(document: Document, options: Record<string, any> = {}) {
    super(document, 'script', options)
  }
}
