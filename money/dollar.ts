import { Money } from './money'

export class Dollar extends Money {
  constructor(amount: number) {
    super()
    this.amount = amount
  }
  times(multiplayer: number) {
    return new Dollar(this.amount * multiplayer)
  }
}
