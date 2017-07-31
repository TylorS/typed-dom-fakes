import { HTMLElementImpl } from './HTMLElement'

// TODO impelement behaviros
export class HTMLButtonElementImpl extends HTMLElementImpl implements HTMLButtonElement {
  /**
   * Provides a way to direct a user to a specific field when a document loads. This can provide both direction and convenience for a user, reducing the need to click or tab to a field when a page opens. This attribute is true when present on an element, and false when missing.
   */
  autofocus: boolean
  disabled: boolean
  /**
   * Retrieves a reference to the form that the object is embedded in.
   */
  readonly form: HTMLFormElement
  /**
   * Overrides the action attribute (where the data on a form is sent) on the parent form element.
   */
  formAction: string
  /**
   * Used to override the encoding (formEnctype attribute) specified on the form element.
   */
  formEnctype: string
  /**
   * Overrides the submit method attribute previously specified on a form element.
   */
  formMethod: string
  /**
   * Overrides any validation or required attributes on a form or form elements to allow it to be submitted without validation. This can be used to create a "save draft"-type submit option.
   */
  formNoValidate: string
  /**
   * Overrides the target attribute on a form element.
   */
  formTarget: string
  /**
   * Sets or retrieves the name of the object.
   */
  name: string
  status: any
  /**
   * Gets the classification and default behavior of the button.
   */
  type: string = 'submit'
  /**
   * Returns the error message that would be displayed if the user submits the form, or an empty string if no error message. It also triggers the standard error message, such as "this is a required field". The result is that the user sees validation messages without actually submitting.
   */
  readonly validationMessage: string
  /**
   * Returns a  ValidityState object that represents the validity states of an element.
   */
  readonly validity: ValidityState
  /**
   * Sets or retrieves the default or selected value of the control.
   */
  value: string
  /**
   * Returns whether an element will successfully validate based on forms validation rules and constraints.
   */
  readonly willValidate: boolean

  constructor(document: Document, options: Record<string, any> = {}) {
    super(document, 'button', options)
  }

  /**
   * Returns whether a form will validate when it is submitted, without having to submit it.
   */
  checkValidity(): boolean {
    return true
  }

  setCustomValidity(error: string): void {
    Function.prototype(error)
  }
}
