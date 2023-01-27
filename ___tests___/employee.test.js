const Employee = require("../lib/employee");

test('can instantiate employee instance', () => {
    const employee = new Employee() 
    expect(typeof employee).toBe('object');
}
);

test('can set object properties using a constructor', () => {
    const employee = new Employee("bob", 1, "bob@email.com")
    expect(employee.name).toBe("bob");
    expect(employee.id).toBe(1);
    expect(employee.email).toBe("bob@email.com");
});
test('can get name via getName()', () => {
    const employee = new Employee("bob", 1, "bob@email.com")
    expect(employee.getName()).toBe("bob");
});
test('can get name via getId()', () => {
    const employee = new Employee("bob", 1, "bob@email.com")
    expect(employee.getId()).toBe(1);
});
test('can get name via getEmail()', () => {
    const employee = new Employee("bob", 1, "bob@email.com")
    expect(employee.getEmail()).toBe("bob@email.com");
});
test('can get name via getRole() will return employee', () => {
    const employee = new Employee("bob", 1, "bob@email.com")
    expect(employee.getRole()).toBe("Employee");
});
