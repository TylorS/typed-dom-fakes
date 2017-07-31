import { HTMLElementImpl } from './HTMLElement'

// TODO implement behaviros
export class HTMLInputElementImpl extends HTMLElementImpl implements HTMLInputElement {
  accept: string
  align: string
  alt: string
  autocomplete: string
  autofocus: boolean
  border: string
  checked: boolean
  readonly complete: boolean
  defaultChecked: boolean
  defaultValue: string
  disabled: boolean
  readonly files: FileList | null
  readonly form: HTMLFormElement
  formAction: string
  formEnctype: string
  formMethod: string
  formNoValidate: string
  formTarget: string
  height: string
  hspace: number
  indeterminate: boolean
  readonly list: HTMLElement
  max: string
  maxLength: number
  min: string
  multiple: boolean
  name: string
  pattern: string
  placeholder: string
  readOnly: boolean
  required: boolean
  selectionDirection: string
  selectionEnd: number
  selectionStart: number
  size: number
  src: string
  status: boolean
  step: string
  type: string
  useMap: string
  readonly validationMessage: string
  readonly validity: ValidityState
  value: string
  valueAsDate: Date
  valueAsNumber: number
  vspace: number
  webkitdirectory: boolean
  width: string
  readonly willValidate: boolean
  minLength: number

  constructor(document: Document, options: Record<string, any> = {}) {
    super(document, 'iput', options)
  }

  checkValidity(): boolean {
    return true
  }
  select(): void {}
  setCustomValidity(error: string): void {
    Function.prototype(error)
  }
  setSelectionRange(start?: number, end?: number, direction?: string): void {
    Function.prototype(start, end, direction)
  }
  stepDown(n?: number): void {
    Function.prototype(n)
  }
  stepUp(n?: number): void {
    Function.prototype(n)
  }
}
