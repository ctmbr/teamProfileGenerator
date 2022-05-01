const Manager = require("../lib/Manager")
const testManager = new Manager("Charles", "111012", "Charles@steve.com", "70234")
test("Can we set an Office Number", () => {
    expect(testManager.officeNumber).toBe("70234")
})
test("Can we get an Office Number", () => {
    expect(testManager.getOfficeNumber()).toBe("70234")
})
test("Can we get a role", () => {
    expect(testManager.getRole()).toBe("Manager")
})