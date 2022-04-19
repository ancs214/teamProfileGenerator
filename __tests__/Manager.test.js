const Manager = require('../lib/Manager')

test('creates a manager object', () => {
    const manager = new Manager('Dave', 123456, 'dave@gmail.com', 1);
  
    expect(manager.name).toBe('Dave');
    expect(manager.id).toBe(123456);
    expect(manager.email).toBe('dave@gmail.com');
    expect(manager.officeNumber).toBe(1);
  });