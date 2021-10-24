export class Dollar {
  private amount: number
  constructor(amount: number) {
    this.amount = amount
  }
  times(multiplayer: number) {
    return new Dollar(this.amount * multiplayer)
  }
  equals(dollar: Dollar) {
    return this.amount === dollar.amount
  }
}
