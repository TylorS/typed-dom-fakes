import { FakeDocument } from './FakeDocument'
import { FakeWindow } from './FakeWindow'
import { FakeElement } from './FakeElement'
import { FakeHTMLElement } from './FakeHTMLElement'
import { FakeText } from './FakeText'
import { FakeEvent } from './FakeEvent'

const window = new FakeWindow()
const document = new FakeDocument()

const globals = global as any

globals.window = window
globals.document = document
globals.Element = FakeElement
globals.HTMLElement = FakeHTMLElement
globals.Text = FakeText
globals.Event = FakeEvent

window.window = window
window.document = document
;(window as any).Element = FakeDocument
;(window as any).HTMLElement = FakeHTMLElement
;(window as any).Text = FakeText
;(window as any).Event = FakeEvent
