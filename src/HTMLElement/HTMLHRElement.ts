import { HTMLElementImpl } from './HTMLElement'

export class HTMLHRElementImpl extends HTMLElementImpl implements HTMLHRElement {
  //
  align: string
  noShade: boolean
  width: number

  // deprecated properties
  color: string
  size: number

  constructor(document: Document, options: Record<string, any> = {}) {
    super(document, 'hr', options)
  }
}
