export class FakeClientRectList extends Array<ClientRect> implements ClientRectList {
  public item(index: number) {
    return this[index]
  }
}
