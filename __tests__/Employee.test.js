const Employee = require("../lib/Employee")
const testEmployee = new Employee("Steve", "99887", "Steve@steve.com")
test("Can instanciate Employee", () => {
    expect(typeof (testEmployee)).toBe("object");
})
test("Can we set a name", () => {
    expect(testEmployee.name).toBe("Steve")
})
test("Can we get a name", () => {
    expect(testEmployee.getName()).toBe("Steve")
})
test("Can we set an id", () => {
    expect(testEmployee.id).toBe("99887")
})
test("Can we get an id", () => {
    expect(testEmployee.getId()).toBe("99887")
})
test("Can we set an email", () => {
    expect(testEmployee.email).toBe("Steve@steve.com")
})
test("Can we get an email", () => {
    expect(testEmployee.getEmail()).toBe("Steve@steve.com")
})
test("Can we get an role", () => {
    expect(testEmployee.getRole()).toBe("Employee")
})