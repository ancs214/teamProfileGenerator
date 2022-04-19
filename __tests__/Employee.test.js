const Employee = require('../lib/Employee')

const employee = new Employee('Dave', 123456, 'dave@gmail.com');

test('creates a employee object', () => {

    expect(employee.name).toBe('Dave');
    expect(employee.id).toBe(123456);
    expect(employee.email).toBe('dave@gmail.com');
});

test('returns appropriate name of employee', () => {
    expect(employee.getName()).toBe('Dave');
})

test('returns appropriate ID of employee', () => {
    expect(employee.getId()).toBe(123456);
})

test('returns appropriate email of employee', () => {
    expect(employee.getEmail()).toBe('dave@gmail.com');
})

test('returns appropriate role of employee', () => {
    expect(employee.getRole()).toBe('Employee');
})
