import { Dollar } from './dollar'
import { Franc } from './franc'

export function dollar(amount: number) {
  return new Dollar(amount)
}

export function franc(amount: number) {
  return new Franc(amount)
}
