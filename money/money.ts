import { Expression } from './expression'

export class Money implements Expression {
  protected amount: number
  protected currency: string
  constructor(amount: number, currency: string) {
    this.amount = amount
    this.currency = currency
  }

  equals(money: Money) {
    return this.currency === money.currency && this.amount === money.amount
  }
  getCurrency() {
    return this.currency
  }
  times(multiplayer: number) {
    return new Money(this.amount * multiplayer, this.currency)
  }
  plus(money: Money): Expression {
    return new Money(this.amount + money.amount, this.currency)
  }
}
