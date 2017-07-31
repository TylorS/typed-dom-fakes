import { HTMLCollectionImpl } from '../HTMLCollection'
import { equals } from '167'
import { matchesCssSelector } from './matchesCssSelector'

export function hasCssSelector(cssSelector: string, element: Element): boolean {
  cssSelector = cssSelector.trim()

  if (cssSelector === '*') return true

  if (cssSelector.indexOf(',') > -1) {
    const cssSelectors = cssSelector.split(',').map(str => str.trim())

    for (let i = 0; i < cssSelectors.length; ++i)
      if (hasCssSelector(cssSelectors[i], element)) return true

    return false
  } else if (cssSelector.indexOf('>') > -1) {
    const [parentSelector, elementSelector] = splitByLastIndex(cssSelector, '>')

    if (!element.parentElement) return false

    return (
      hasCssSelector(parentSelector, element.parentElement) &&
      hasCssSelector(elementSelector, element)
    )
  } else if (cssSelector.indexOf(' + ') > -1) {
    const [siblingSelector, selector] = splitByLastIndex(cssSelector, '+')

    const parent = element.parentElement

    if (!parent || !hasCssSelector(selector, element)) return false

    const children = parent.children as HTMLCollectionImpl<Element>

    const index = children.findIndex(equals(element))

    if (index === 0 || !hasCssSelector(siblingSelector, children[index - 1])) return false

    return true
  } else if (cssSelector.indexOf(' ~ ') > -1) {
    const [siblingSelector, selector] = splitByLastIndex(cssSelector, '~')

    const parent = element.parentElement

    if (!parent || !hasCssSelector(selector, element)) return false

    const children = parent.children as HTMLCollectionImpl<Element>

    const index = children.findIndex(equals(element))

    for (let i = 0; i < index; ++i) if (hasCssSelector(siblingSelector, children[i])) return true

    return false
  } else if (cssSelector.indexOf(' ') > -1) {
    const cssSelectors: Array<string> = cssSelector
      .split(' ')
      .filter(Boolean)
      .map(str => str.trim())

    let i = cssSelectors.length - 1

    if (!hasCssSelector(cssSelectors[i], element)) return false

    while (--i >= 0) {
      const parentMatches = traverseParentElements(
        parent => hasCssSelector(cssSelectors[i], parent),
        element
      )

      if (!parentMatches) return false
    }

    return true
  }

  return matchesCssSelector(cssSelector, element)
}

function splitByLastIndex(cssSelector: string, token: string): [string, string] {
  const index = cssSelector.lastIndexOf(token)

  return [cssSelector.substring(0, index).trim(), cssSelector.substring(index + 1).trim()]
}

function traverseParentElements(predicate: (vNode: Element) => boolean, element: Element): boolean {
  const parent = element.parentElement

  if (!parent) return false

  if (predicate(parent)) return true

  return traverseParentElements(predicate, parent)
}
