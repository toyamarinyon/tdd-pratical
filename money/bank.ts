import { Expression } from './expression'

{
  usd: {
  }
}
export class Bank {
  private rates = {}
  reduce(source: Expression, to: string) {
    return source.reduce(this, to)
  }
  addRate(from: string, to: string, rate: number) {
    this.rates[`${from}_${to}`] = rate
  }
  rate(from: string, to: string) {
    if (from === to) {
      return 1
    }
    return this.rates[`${from}_${to}`]
  }
}
