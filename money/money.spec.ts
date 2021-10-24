import { Dollar } from './dollar'
test('multiplication', () => {
  const five = new Dollar(5)
  expect(five.times(2).equals(new Dollar(10))).toBeTruthy()
  expect(five.times(3).equals(new Dollar(15))).toBeTruthy()
})

test('equality', () => {
  expect(new Dollar(5).equals(new Dollar(5))).toBeTruthy()
  expect(new Dollar(5).equals(new Dollar(6))).toBeFalsy()
})
