import { something } from './something';

describe('something', () => {
  test('should return the expected value', () => {
    expect(something()).toEqual('something else');
  });
});
