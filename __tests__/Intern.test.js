const Intern = require('../lib/Intern')

test('creates a intern object', () => {
    const intern = new Intern('Dave', 123456, 'dave@gmail.com', 'Trilogy');
  
    expect(intern.name).toBe('Dave');
    expect(intern.id).toBe(123456);
    expect(intern.email).toBe('dave@gmail.com');
    expect(intern.school).toBe('Trilogy');
  });