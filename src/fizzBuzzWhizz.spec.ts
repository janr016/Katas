import { game } from "./fizzBuzzWhizz";

describe('FizzBuzz Game', () => {
  test('should return 1 for input 1', () => {
    expect(game(1)).toEqual(1);
  });

  test('should return Whizz for input 2', () => {
    expect(game(2)).toEqual('Whizz');
  });
});
