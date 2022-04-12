const { Kata } = require('../src/kata');

describe('Checking first scores', () => {
  test('GIVEN 15-0 WHEN logic THEN returns 1', () => {
    const kata = new Kata();
    expect(kata.tennisGamePoints('15-0')).toStrictEqual(1);
  });

  test('GIVEN 30-0 WHEN logic THEN returns 2', () => {
    const kata = new Kata();
    expect(kata.tennisGamePoints('30-0')).toStrictEqual(2);
  });

  test('GIVEN 40-0 WHEN logic THEN returns 3', () => {
    const kata = new Kata();
    expect(kata.tennisGamePoints('40-0')).toStrictEqual(3);
  });
});
describe('Checking second scores', () => {
  test('GIVEN 0-15 WHEN logic THEN returns 1', () => {
    const kata = new Kata();
    expect(kata.tennisGamePoints('0-15')).toStrictEqual(1);
  });

  test('GIVEN 0-30 WHEN logic THEN returns 2', () => {
    const kata = new Kata();
    expect(kata.tennisGamePoints('0-30')).toStrictEqual(2);
  });
});




