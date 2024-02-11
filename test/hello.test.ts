import { getHello } from 'template-ts-node/hello';

describe('getHello', () => {
  test("returns the string 'Hello world!'", () => {
    expect(getHello()).toBe('Hello world!');
  });
});
