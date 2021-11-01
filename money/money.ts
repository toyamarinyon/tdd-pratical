import { Bank } from './bank'
import { Expression } from './expression'
import { Sum } from './sum'

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
  plus(added: Money): Expression {
    return new Sum(this, added)
  }
  getAmount() {
    return this.amount
  }
  reduce(bank: Bank, to: string) {
    const rate = bank.rate(this.currency, to)
    return new Money(this.amount / rate, to)
  }
}
