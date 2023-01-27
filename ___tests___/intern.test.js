const Intern = require("../lib/intern");

test('can set object properties using a constructor', () => {
    const employee = new Intern("bob", 1, "bob@email.com", "UTA")
    expect(employee.school).toBe("UTA");
});
test('can get name via getSchool()', () => {
    const employee = new Intern("bob", 1, "bob@email.com", "UTA")
    expect(employee.getSchool()).toBe("UTA");
});

test('can get name via getRole() will return Intern', () => {
    const employee = new Intern("bob", 1, "bob@email.com", "UTA")
    expect(employee.getRole()).toBe("Intern");
});