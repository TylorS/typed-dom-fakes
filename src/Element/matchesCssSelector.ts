import { NamedNodeMapImpl } from '../NamedNodeMap'
import { matchesAttribute } from './matchesAttribute'
import { matchesBasicCssSelector } from './matchesBasicCssSelector'
import { matchesPsuedoSelector } from './matchesPsuedoSelector'

export function matchesCssSelector(cssSelector: string, element: Element) {
  if (cssSelector[0] === '[' && cssSelector[cssSelector.length - 1] === ']')
    return matchesAttribute(cssSelector.slice(1, -1), element.attributes as NamedNodeMapImpl)

  if (cssSelector.indexOf(':') > -1) return matchesPsuedoSelector(cssSelector, element)

  return matchesBasicCssSelector(cssSelector, element)
}
