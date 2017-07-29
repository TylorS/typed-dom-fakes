import { FakeDocument } from './FakeDocument'
import { FakeWindow } from './FakeWindow'
import { FakeElement } from './FakeElement'
import { FakeHTMLElement } from './FakeHTMLElement'
import { FakeText } from './FakeText'

const window = new FakeWindow()
const document = new FakeDocument()

window.document = document

const globals = global as any

globals.window = window
globals.document = document
globals.Element = FakeElement
globals.HTMLElement = FakeHTMLElement
globals.Text = FakeText
