import { HTMLElementImpl } from './HTMLElement'

export class HTMLImageElementImpl extends HTMLElementImpl implements HTMLImageElement {
  // TODO implement behaviors
  align: string
  alt: string
  border: string
  readonly complete: boolean
  crossOrigin: string | null
  readonly currentSrc: string
  height: number
  hspace: number
  isMap: boolean
  longDesc: string
  lowsrc: string
  msPlayToDisabled: boolean
  msPlayToPreferredSourceUri: string
  msPlayToPrimary: boolean
  readonly msPlayToSource: any
  name: string
  readonly naturalHeight: number
  readonly naturalWidth: number
  sizes: string
  src: string
  srcset: string
  useMap: string
  vspace: number
  width: number
  readonly x: number
  readonly y: number

  constructor(document: Document, options: Record<string, any> = {}) {
    super(document, 'img', options)
  }

  // unimplemented
  msGetAsCastingSource(): any {}
}
