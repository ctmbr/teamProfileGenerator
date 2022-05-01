const Intern = require("../lib/Intern")
const testIntern = new Intern("Juana", "99712", "Juana@steve.com", "Croscrosft University")
test("Can we set a school", () => {
    expect(testIntern.school).toBe("Croscrosft University")
})
test("Can we get a school", () => {
    expect(testIntern.getSchool()).toBe("Croscrosft University")
})
test("Can we get a role", () => {
    expect(testIntern.getRole()).toBe("Intern")
})