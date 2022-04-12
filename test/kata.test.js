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
});




