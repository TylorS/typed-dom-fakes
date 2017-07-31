const defaultParent = Object.freeze({ childNodes: [] as Array<Element> })

export function matchesPsuedoSelector(cssSelector: string, element: Element): boolean {
  const parent = element.parentNode || defaultParent
  const children = parent.childNodes

  if (cssSelector.indexOf(`:nth-child`) === 0)
    return matchNthChild(cssSelector.slice(11).split(')')[0], element)

  if (cssSelector.indexOf(`:contains`) === 0)
    return elementContainsText(cssSelector.slice(10).split(')')[0], element)

  switch (cssSelector) {
    case ':first-child':
      return children && children[0] === element
    case ':last-child':
      return children && children[children.length - 1] === element
    case ':empty':
      return !element.children || element.children.length === 0
    case ':root':
      return isRoot(element)
    default:
      return false
  }
}

function elementContainsText(text: string, element: Element) {
  if (element.textContent) return text === element.textContent

  const children = element.children

  if (!children || children.length === 0) return false

  for (let i = 0; i < children.length; ++i) {
    const child = children[i]

    if (child.textContent.indexOf(text) > -1) return true
  }

  return false
}

function isRoot(element: Element) {
  return !element.parentElement
}

function matchNthChild(index: string, element: Element) {
  const parent = element.parentElement || defaultParent
  const children = Array.from(parent.childNodes)

  if (!children || children.length === 0) return false

  if (index.indexOf('+') === -1 && !isNaN(parseInt(index, 10)))
    return children[parseInt(index, 10)] === element

  const childIndex = children.indexOf(element)

  if (index === 'odd') return childIndex % 2 !== 0

  if (index === 'even') return childIndex % 2 === 0

  if (index.indexOf('+') > -1) {
    const [multipleString, offsetString] = index.split('+')
    const multiple = parseInt(multipleString.split('n')[0], 10)
    const offset = parseInt(offsetString, 10)

    if (multiple === 0) return true

    return childIndex !== 0 && childIndex % (multiple + offset) === 0
  }

  return false
}

function isNaN(x: number): x is number {
  return (x | 0) !== x
}
