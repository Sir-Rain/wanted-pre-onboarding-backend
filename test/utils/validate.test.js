import * as Validate from '../../src/utils/validate.js';

describe('user input articleId check', () => {
  test('dont find articleId throw Error', () => {
    const articleId = undefined;

    expect(() => Validate.checkInputArticleId(articleId)).toThrowError();
  });

  test('articleId is not number throw Error', () => {
    const articleId = 'test';

    expect(() => Validate.checkInputArticleId(articleId)).toThrowError();
  });

  test('articleId is under 1 throw Error', () => {
    const articleId = 0;

    expect(() => Validate.checkInputArticleId(articleId)).toThrowError();
  });
});

describe('user input email validate', () => {
  test('email pattern ok', () => {
    const email = 'test@test.test';

    expect(Validate.checkEmail(email)).toBeUndefined();
  });

  test('email pattern fail', () => {
    const email = 'testemail';

    expect(() => Validate.checkEmail(email)).toThrowError();
  });
});

describe('user input password validate', () => {
  test('password length over 7 ok', () => {
    const password = 'testtest';

    expect(Validate.checkPassword(password)).toBeUndefined();
  });

  test('password length under 7 fail', () => {
    const password = 'testtes';

    expect(() => Validate.checkPassword(password)).toThrowError();
  });
});
