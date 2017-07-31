import * as Elements from './'

export function createElement(document: Document, tagName: string): HTMLElement {
  switch (tagName) {
    case 'a':
      return new Elements.HTMLAnchorElementImpl(document)
    case 'body':
      return new Elements.HTMLBodyElementImpl(document)
    case 'br':
      return new Elements.HTMLBRElementImpl(document)
    case 'button':
      return new Elements.HTMLButtonElementImpl(document)
    case 'div':
      return new Elements.HTMLDivElementImpl(document)
    case 'form':
      return new Elements.HTMLFormElementImpl(document)
    case 'hr':
      return new Elements.HTMLHRElementImpl(document)
    case 'html':
      return new Elements.HTMLHRElementImpl(document)
    case 'img':
      return new Elements.HTMLImageElementImpl(document)
    case 'input':
      return new Elements.HTMLInputElementImpl(document)
    case 'label':
      return new Elements.HTMLLabelElementImpl(document)
    case 'li':
      return new Elements.HTMLLIElementImpl(document)
    case 'p':
      return new Elements.HTMLParagraphElementImpl(document)
    case 'pre':
      return new Elements.HTMLPreElementImpl(document)
    case 'script':
      return new Elements.HTMLScriptElementImpl(document)
    case 'select':
      return new Elements.HTMLSelectElementImpl(document)
    case 'span':
      return new Elements.HTMLSpanElementImpl(document)
    case 'style':
      return new Elements.HTMLStyleElementImpl(document)
    case 'textarea':
      return new Elements.HTMLTextAreaElementImpl(document)
    case 'ul':
      return new Elements.HTMLUListElementImpl(document)
    default:
      return new Elements.HTMLElementImpl(document, tagName)
  }
}
