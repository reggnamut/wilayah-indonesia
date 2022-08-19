import { countTotal } from '../src/v1/lib/helper';

describe('Count total provinces', () => {
  it('If the data length is zero', () => {
    expect(countTotal([])).toBe(0);
  });
  it('If there is a data or more', () => {
    expect(countTotal([1, 2, 3])).toBe(3);
  });
});
