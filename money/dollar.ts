import { Money } from './money'

export class Dollar extends Money {
  times(multiplayer: number) {
    return new Dollar(this.amount * multiplayer)
  }
}
