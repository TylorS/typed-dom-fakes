import { FakeDocument } from './FakeDocument'
import { FakeWindow } from './FakeWindow'

;
(global as any).window = new FakeWindow()
;(global as any).document = new FakeDocument()
