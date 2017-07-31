const Fakes = require('./')

const window = global.window = new Fakes.WindowImpl(global.document = new Fakes.DocumentImpl())

window.Event = global.Event = Fakes.EventImpl
window.EventTarget = global.EventTarget = Fakes.EventTargetImpl
window.Node = global.Node = Fakes.NodeImpl
window.Element = global.Element = Fakes.ElementImpl
window.HTMLElement = global.HTMLElement = Fakes.HTMLElementImpl
window.Attr = global.Attr = Fakes.AttrImpl
window.DOMTokenList = global.DOMTokenList = Fakes.DOMTokenListImpl
window.HTMLCollection = global.HTMLCollection = Fakes.HTMLCollectionImpl
window.NamedNodeMap = global.NamedNodeMap = Fakes.NamedNodeMapImpl
window.NodeList = global.NodeList = Fakes.NodeListImpl
window.Text = global.Text = Fakes.TextImpl
