import { parseSelector } from './parseSelector'

const CLASS_NAME_SEPARATOR = ' '

export function matchesBasicCssSelector(cssSelector: string, element: Element) {
  const hasTagName = cssSelector[0] !== '#' && cssSelector[0] !== '.'

  const { tagName, className, id } = hasTagName
    ? parseSelector(cssSelector)
    : parseSelector(element.tagName.toLowerCase() + cssSelector)

  const sameTagName: boolean = tagName.toUpperCase() === element.tagName

  const sameClassName: boolean =
    className.length > 0 ? hasSameClassName(className, element.classList) : true

  const sameId: boolean = id ? id === element.id : true

  if (sameTagName && sameClassName && sameId) return true

  return false
}

function hasSameClassName(className: string, classList: DOMTokenList): boolean {
  const classListTokens = className
    .split(CLASS_NAME_SEPARATOR)
    .map(str => str.trim())
    .filter(Boolean)

  for (const token of classListTokens) if (!classList.contains(token)) return false

  return true
}
