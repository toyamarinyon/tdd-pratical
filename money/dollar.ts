import { Money } from './money'
import { dollar } from './money-factory'

export class Dollar extends Money {
  times(multiplayer: number) {
    return dollar(this.amount * multiplayer)
  }
}
