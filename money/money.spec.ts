import { Bank } from './bank'
import { dollar, franc } from './money-factory'

test('multiplication', () => {
  const five = dollar(5)
  expect(five.times(2).equals(dollar(10))).toBeTruthy()
  expect(five.times(3).equals(dollar(15))).toBeTruthy()
})

test('equality', () => {
  expect(dollar(5).equals(dollar(5))).toBeTruthy()
  expect(dollar(5).equals(dollar(6))).toBeFalsy()
  expect(franc(5).equals(dollar(5))).toBeFalsy()
})

test('currency', () => {
  expect(dollar(1).getCurrency()).toBe('USD')
  expect(franc(1).getCurrency()).toBe('CHF')
})

test('simple addition', () => {
  const five = dollar(5)
  const sum = five.plus(dollar(5))
  const bank = new Bank()
  const reduced = bank.reduce(sum, 'USD')
  expect(reduced).toStrictEqual(dollar(10))
})
