export class Franc {
  private amount: number
  constructor(amount: number) {
    this.amount = amount
  }
  times(multiplayer: number) {
    return new Franc(this.amount * multiplayer)
  }
  equals(franc: Franc) {
    return this.amount === franc.amount
  }
}
