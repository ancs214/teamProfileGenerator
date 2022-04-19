const Engineer = require('../lib/Engineer')

test('creates an engineer object', () => {
    const engineer = new Engineer('Dave', 123456, 'dave@gmail.com', 'theDavester');
  
    expect(engineer.name).toBe('Dave');
    expect(engineer.id).toBe(123456);
    expect(engineer.email).toBe('dave@gmail.com');
    expect(engineer.github).toBe('theDavester');
  });