import { Expression } from './expression'

export class Bank {
  reduce(source: Expression, to: string) {
    return source.reduce(to)
  }
}
