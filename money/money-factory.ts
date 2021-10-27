import { Money } from './money'

export function dollar(amount: number): Money {
  return new Money(amount, 'USD')
}

export function franc(amount: number): Money {
  return new Money(amount, 'CHF')
}
