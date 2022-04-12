const { Kata } = require('../src/kata');

describe('Checking first scores', () => {
  test('GIVEN 15-0 WHEN logic THEN returns 1', () => {
    const kata = new Kata();
    expect(kata.tennisGamePoints('15-love')).toStrictEqual(1);
  });

  test('GIVEN 30-0 WHEN logic THEN returns 2', () => {
    const kata = new Kata();
    expect(kata.tennisGamePoints('30-love')).toStrictEqual(2);
  });

  test('GIVEN 40-0 WHEN logic THEN returns 3', () => {
    const kata = new Kata();
    expect(kata.tennisGamePoints('40-love')).toStrictEqual(3);
  });
});
describe('Checking second scores', () => {
  test('GIVEN 0-15 WHEN logic THEN returns 1', () => {
    const kata = new Kata();
    expect(kata.tennisGamePoints('love-15')).toStrictEqual(1);
  });

  test('GIVEN 0-30 WHEN logic THEN returns 2', () => {
    const kata = new Kata();
    expect(kata.tennisGamePoints('love-30')).toStrictEqual(2);
  });

  test('GIVEN 0-40 WHEN logic THEN returns 3', () => {
    const kata = new Kata();
    expect(kata.tennisGamePoints('love-40')).toStrictEqual(3);
  });
});


describe('Checking complex scores', () => {
  test('GIVEN 15-40 WHEN logic THEN returns 4', () => {
    const kata = new Kata();
    expect(kata.tennisGamePoints('15-40')).toStrictEqual(4);
  });

  test('GIVEN 30-love WHEN logic THEN returns 2', () => {
    const kata = new Kata();
    expect(kata.tennisGamePoints('30-love')).toStrictEqual(2);
  });

  test('GIVEN 30-all WHEN logic THEN returns 4', () => {
    const kata = new Kata();
    expect(kata.tennisGamePoints('30-all')).toStrictEqual(4);
  });

  test('GIVEN 40-all WHEN logic THEN returns 6', () => {
    const kata = new Kata();
    expect(kata.tennisGamePoints('40-all')).toStrictEqual(6);
  });

});

