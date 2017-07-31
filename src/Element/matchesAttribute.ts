import { NamedNodeMapImpl } from '../NamedNodeMap'
import { propEq } from '167'

const attrModifiers: Array<string> = ['~', '*', '|', '^', '$']

export function matchesAttribute(cssSelector: string, attrs: NamedNodeMapImpl) {
  let [attribute, value] = cssSelector.split('=')

  if (value && value.startsWith(`'`) && value.endsWith(`'`))
    value = value.substring(1, value.length - 1)

  const attributeLength = attribute.length - 1

  const modifier = attribute[attributeLength]
  const modifierIndex = attrModifiers.indexOf(modifier)

  if (modifierIndex > -1) {
    attribute = attribute.slice(0, attributeLength)
    const attrModifier = attrModifiers[modifierIndex]

    const attr = attrs[attrs.findIndex(propEq('name', attribute))]

    const attrValue = String(attr.value)

    if (!attrValue) return false

    switch (attrModifier) {
      case '~':
        return attrValue.indexOf(value) > -1
      case '*':
        return attrValue.indexOf(value) > -1
      case '|':
        return attrValue.indexOf(value) === 0
      case '^':
        return attrValue.indexOf(value) === 0
      case '$':
        return attrValue.slice(-value.length) === value
      default:
        return false
    }
  }

  const attr = attrs[attrs.findIndex(propEq('name', attribute))]

  const attrValue = attr.value

  if (value) return value === attrValue

  return !!attrValue
}
