import { Dollar } from './dollar'
import { Franc } from './franc'

test('multiplication', () => {
  const five = new Dollar(5)
  expect(five.times(2).equals(new Dollar(10))).toBeTruthy()
  expect(five.times(3).equals(new Dollar(15))).toBeTruthy()
})

test('equality', () => {
  expect(new Dollar(5).equals(new Dollar(5))).toBeTruthy()
  expect(new Dollar(5).equals(new Dollar(6))).toBeFalsy()
  expect(new Dollar(5).equals(new Franc(5))).toBeFalsy()
})

test('franc multiplication', () => {
  const five = new Franc(5)
  expect(five.times(2).equals(new Franc(10))).toBeTruthy()
  expect(five.times(3).equals(new Franc(15))).toBeTruthy()
})

test('franc equality', () => {
  expect(new Franc(5).equals(new Franc(5))).toBeTruthy()
  expect(new Franc(5).equals(new Franc(6))).toBeFalsy()
})
