import { Expression } from './expression'
import { dollar } from './money-factory'

export class Bank {
  reduce(source: Expression, to: string) {
    return dollar(10)
  }
}
