import { HTMLElementImpl } from './HTMLElement'

export class HTMLAnchorElementImpl extends HTMLElementImpl implements HTMLAnchorElement {
  // TODO: implement behaviors
  charset: string
  coords: string
  download: string
  hash: string
  host: string
  hostname: string
  href: string
  hreflang: string
  Methods: string
  mimeType: string
  name: string
  readonly nameProp: string
  pathname: string
  port: string
  protocol: string
  readonly protocolLong: string
  rel: string
  rev: string
  search: string
  shape: string
  target: string
  text: string
  type: string
  urn: string

  constructor(document: Document, options: Record<string, any> = {}) {
    super(document, 'a', options)
  }
}
