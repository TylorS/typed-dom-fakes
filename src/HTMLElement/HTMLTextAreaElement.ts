import { HTMLElementImpl } from './HTMLElement'

export class HTMLTextAreaElementImpl extends HTMLElementImpl implements HTMLTextAreaElement {
  // TODO
  autofocus: boolean
  cols: number
  defaultValue: string
  disabled: boolean
  readonly form: HTMLFormElement
  maxLength: number
  name: string
  placeholder: string
  readOnly: boolean
  required: boolean
  rows: number
  selectionEnd: number
  selectionStart: number
  status: any
  readonly type: string
  readonly validationMessage: string
  readonly validity: ValidityState
  value: string
  readonly willValidate: boolean
  wrap: string
  minLength: number

  constructor(document: Document, options: Record<string, any> = {}) {
    super(document, 'textarea', options)
  }

  checkValidity(): boolean {
    return true
  }

  select(): void {}

  setCustomValidity(error: string): void {
    Function.prototype(error)
  }

  setSelectionRange(): void {}
}
