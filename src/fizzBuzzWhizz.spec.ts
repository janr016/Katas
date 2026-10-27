import { game } from "./fizzBuzzWhizz";

describe('FizzBuzz Game', () => {
  test('should return 1 for input 1', () => {
    expect(game(1)).toEqual(1);
  });

  test('should return Whizz for input 2', () => {
    expect(game(2)).toEqual('Whizz');
  });

  test('should return FizzWhizz for input 3', () => {
    expect(game(3)).toEqual('FizzWhizz');
  });

  test('should return 4 for input 4', () => {
    expect(game(4)).toEqual(4);
  });

  test('should return BuzzWhizz for input 5', () => {
    expect(game(5)).toEqual('BuzzWhizz');
  });

  test('should return Fizz for input 6', () => {
    expect(game(6)).toEqual('Fizz');
  });

  test('should return FizzBuzz for input 15', () => {
    expect(game(15)).toEqual('FizzBuzz');
  });

  test.each([
    [7, 'Whizz'],
    [13, 'Whizz'],
    [91, 91],          // 91 no es primo (7 * 13)
    [97, 'Whizz'],      // 97 es primo
    [100, 'Buzz']      // 100 es múltiplo de 5, no es primo
  ])('should return correct result for input %i', (input, expected) => {
    expect(game(input)).toEqual(expected);
  });

});
