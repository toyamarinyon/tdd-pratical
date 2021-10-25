import { Money } from './money'
import { franc } from './money-factory'

export class Franc extends Money {
  times(multiplayer: number) {
    return franc(this.amount * multiplayer)
  }
}
