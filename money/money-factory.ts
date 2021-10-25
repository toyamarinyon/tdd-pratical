import { Dollar } from './dollar'
import { Franc } from './franc'
import { Money } from './money'

export function dollar(amount: number): Money {
  return new Dollar(amount, 'USD')
}

export function franc(amount: number): Money {
  return new Franc(amount, 'CHF')
}
