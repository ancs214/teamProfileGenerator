const Engineer = require('../lib/Engineer')

const engineer = new Engineer('Dave', 123456, 'dave@gmail.com', 'theDavester');

test('creates an engineer object', () => {
  expect(engineer.name).toBe('Dave');
  expect(engineer.id).toBe(123456);
  expect(engineer.email).toBe('dave@gmail.com');
  expect(engineer.github).toBe('theDavester');
});

test('returns appropriate name of employee', () => {
  expect(engineer.getName()).toBe('Dave');
})

test('returns appropriate ID of employee', () => {
  expect(engineer.getId()).toBe(123456);
})

test('returns appropriate email of employee', () => {
  expect(engineer.getEmail()).toBe('dave@gmail.com');
})

test('returns appropriate role of employee', () => {
  expect(engineer.getRole()).toBe('Engineer');
})

test('returns appropriate github username of employee', () => {
  expect(engineer.getGithub()).toBe('theDavester');
})