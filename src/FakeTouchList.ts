export class FakeTouchList extends Array<Touch> implements TouchList {
  constructor(...touches: Array<Touch>) {
    super(...touches)
  }

  item(index: number) {
    return this[index]
  }
}
