const Manager = require('../lib/Manager')
const manager = new Manager('Dave', 123456, 'dave@gmail.com', 1);

test('creates a manager object', () => {
    expect(manager.name).toBe('Dave');
    expect(manager.id).toBe(123456);
    expect(manager.email).toBe('dave@gmail.com');
    expect(manager.officeNumber).toBe(1);
  });

  test('returns appropriate name of employee', () => {
    expect(manager.getName()).toBe('Dave');
  })
  
  test('returns appropriate ID of employee', () => {
    expect(manager.getId()).toBe(123456);
  })
  
  test('returns appropriate email of employee', () => {
    expect(manager.getEmail()).toBe('dave@gmail.com');
  })
  
  test('returns appropriate role of employee', () => {
    expect(manager.getRole()).toBe('Manager');
  })
  
