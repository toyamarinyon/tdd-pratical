import { Expression } from './expression'
import { Money } from './money'

export class Sum implements Expression {
  augend: Money
  addend: Money
  constructor(augend: Money, added: Money) {
    this.augend = augend
    this.addend = added
  }
  reduce(to: string) {
    const amount = this.augend.getAmount() + this.addend.getAmount()
    return new Money(amount, to)
  }
}
