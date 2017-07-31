import { HTMLElementImpl } from './HTMLElement'
import { NodeImpl } from '../Node'

// TODO implement behaviors
export class HTMLSelectElementImpl extends HTMLElementImpl implements HTMLSelectElement {
  autofocus: boolean
  disabled: boolean
  readonly form: HTMLFormElement
  length: number
  multiple: boolean
  name: string
  readonly options: HTMLOptionsCollection
  required: boolean
  selectedIndex: number
  selectedOptions: HTMLCollectionOf<HTMLOptionElement>
  size: number
  readonly type: string
  readonly validationMessage: string
  readonly validity: ValidityState
  value: string

  readonly willValidate: boolean
  constructor(document: Document, options: Record<string, any> = {}) {
    super(document, 'selector', options)
  }

  add(element: HTMLElement, before?: HTMLElement | number): void {
    const reference = ((typeof before === 'number'
      ? this.children[before] || null
      : before || null) as any) as NodeImpl | null

    this.insertBefore(element, reference)
  }

  // TODO implement behaviors
  checkValidity(): boolean {
    return true
  }

  item(name?: any, index?: any): any {
    Function.prototype(name, index)
  }

  namedItem(name: string): any {
    Function.prototype(name)
  }

  remove(index?: number): void {
    Function.prototype(index)
  }

  setCustomValidity(error: string): void {
    Function.prototype(error)
  }
}
