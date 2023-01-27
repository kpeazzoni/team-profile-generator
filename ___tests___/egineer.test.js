const Engineer = require("../lib/engineer");

test('can set object properties using a constructor', () => {
    const employee = new Engineer("bob", 1, "bob@email.com", "kpeazzoni")
    expect(employee.github).toBe("kpeazzoni");
});
test('can get name via getGithub()', () => {
    const employee = new Engineer("bob", 1, "bob@email.com", "kpeazzoni")
    expect(employee.getGithub()).toBe("kpeazzoni");
});

test('can get name via getRole() will return engineer', () => {
    const employee = new Engineer("bob", 1, "bob@email.com")
    expect(employee.getRole()).toBe("Engineer");
});