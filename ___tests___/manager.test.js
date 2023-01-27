const Manager = require("../lib/manager");

test('can set object properties using a constructor', () => {
    const employee = new Manager("bob", 1, "bob@email.com", "123")
    expect(employee.officeNumber).toBe("123");
});
test('can get name via getOfficeNumber()', () => {
    const employee = new Manager("bob", 1, "bob@email.com", "123")
    expect(employee.getOfficeNumber()).toBe("123");
});

test('can get name via getRole() will return Manager', () => {
    const employee = new Manager("bob", 1, "bob@email.com", "123")
    expect(employee.getRole()).toBe("Manager");
});