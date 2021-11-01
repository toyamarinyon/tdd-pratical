import { Bank } from './bank'
import { dollar, franc } from './money-factory'
import { Sum } from './sum'

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

test('plus returns sum', () => {
  const five = dollar(5)
  const result = five.plus(five)
  const sum = result as Sum
  expect(five).toBe(sum.augend)
  expect(five).toBe(sum.addend)
})

test('reduce sum', () => {
  const sum = new Sum(dollar(3), dollar(4))
  const bank = new Bank()
  const result = bank.reduce(sum, 'USD')
  expect(result).toStrictEqual(dollar(7))
})

test('reduce money', () => {
  const bank = new Bank()
  const result = bank.reduce(dollar(1), 'USD')
  expect(dollar(1)).toStrictEqual(result)
})

test('reduce money difference currency', () => {
  const bank = new Bank()
  bank.addRate('CHF', 'USD', 2)
  const result = bank.reduce(franc(2), 'USD')
  expect(result).toStrictEqual(dollar(1))
})
