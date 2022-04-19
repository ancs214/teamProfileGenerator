const Employee = require('../lib/Employee')

test('creates a employee object', () => {
    const employee = new Employee('Dave', 123456, 'dave@gmail.com');
  
    expect(employee.name).toBe('Dave');
    expect(employee.id).toBe(123456);
    expect(employee.email).toBe('dave@gmail.com');
  });

  //TEST FAILS... 
  test('returns appropriate role of employee', () => {
      const employee = new Employee;

      expect(getRole(employee)).toBe('Employee');
  })