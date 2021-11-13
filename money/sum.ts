import { Bank } from './bank'
import { Expression } from './expression'
import { Money } from './money'

export class Sum implements Expression {
  augend: Expression
  addend: Expression
  constructor(augend: Expression, added: Expression) {
    this.augend = augend
    this.addend = added
  }
  reduce(bank: Bank, to: string) {
    const amount =
      this.augend.reduce(bank, to).getAmount() +
      this.addend.reduce(bank, to).getAmount()
    return new Money(amount, to)
  }
  plus(addend: Expression) {
    return new Sum(this, addend)
  }
  times(multiplier: number) {
    return new Sum(this.augend.times(multiplier), this.addend.times(multiplier))
  }
}
