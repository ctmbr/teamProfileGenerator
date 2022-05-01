const Engineer = require("../lib/Engineer")
const testEngineer = new Engineer("Alex", "77722", "Alex@steve.com", "@AlexM")
test("Can we set an github", () => {
    expect(testEngineer.github).toBe("@AlexM")
})
test("Can we get an github", () => {
    expect(testEngineer.getGithub()).toBe("@AlexM")
})
test("Can we get an role", () => {
    expect(testEngineer.getRole()).toBe("Engineer")
})