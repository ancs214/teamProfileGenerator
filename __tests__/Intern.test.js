const Intern = require('../lib/Intern')
const intern = new Intern('Dave', 123456, 'dave@gmail.com', 'Trilogy');
  
test('creates a intern object', () => {
    expect(intern.name).toBe('Dave');
    expect(intern.id).toBe(123456);
    expect(intern.email).toBe('dave@gmail.com');
    expect(intern.school).toBe('Trilogy');
  });

  test('returns appropriate name of employee', () => {
    expect(intern.getName()).toBe('Dave');
  })
  
  test('returns appropriate ID of employee', () => {
    expect(intern.getId()).toBe(123456);
  })
  
  test('returns appropriate email of employee', () => {
    expect(intern.getEmail()).toBe('dave@gmail.com');
  })
  
  test('returns appropriate role of employee', () => {
    expect(intern.getRole()).toBe('Intern');
  })
  
  test('returns appropriate github username of employee', () => {
    expect(intern.getSchool()).toBe('Trilogy');
  })