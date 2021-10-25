import { dollar, franc } from './money-factory'

test('multiplication', () => {
  const five = dollar(5)
  expect(five.times(2).equals(dollar(10))).toBeTruthy()
  expect(five.times(3).equals(dollar(15))).toBeTruthy()
})

test('equality', () => {
  expect(dollar(5).equals(dollar(5))).toBeTruthy()
  expect(dollar(5).equals(dollar(6))).toBeFalsy()
  expect(dollar(5).equals(franc(5))).toBeFalsy()
})

test('franc multiplication', () => {
  const five = franc(5)
  expect(five.times(2).equals(franc(10))).toBeTruthy()
  expect(five.times(3).equals(franc(15))).toBeTruthy()
})

test('franc equality', () => {
  expect(franc(5).equals(franc(5))).toBeTruthy()
  expect(franc(5).equals(franc(6))).toBeFalsy()
})

test('currency', () => {
  expect(dollar(1).getCurrency()).toBe('USD')
  expect(franc(1).getCurrency()).toBe('CHF')
})
