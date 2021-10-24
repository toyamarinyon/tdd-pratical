import { Money } from './money'

export class Franc extends Money {
  times(multiplayer: number) {
    return new Franc(this.amount * multiplayer)
  }
}
