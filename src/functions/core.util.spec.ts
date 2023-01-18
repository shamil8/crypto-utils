import { mathFloor } from './core.util';

test('mathFloor test with precision', () => {
  expect(mathFloor(0, 99)).toBe(0);
  expect(mathFloor(0.12345)).toBe(0.1234);
  expect(mathFloor(0.12345, 5)).toBe(0.12345);
  expect(mathFloor(0.4327998237457239)).toEqual(0.4327);
  expect(mathFloor(0.4327998237457239, 12)).toBe(0.432799823745);
});
