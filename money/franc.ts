import { Money } from "../money"

export class Franc extends Money {
  constructor(amount: number) {
    super()
    this.amount = amount
  }
  times(multiplayer: number) {
    return new Franc(this.amount * multiplayer)
  }
}
