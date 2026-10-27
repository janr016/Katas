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
});
