import { GenderGuesser } from "./GenderGuesser";
import { AttendanceList } from "./AttendanceList";

describe("GenderGuesser API Test", () => {
    let name;
    beforeAll(() => {
        name = new GenderGuesser();
    });
    test("Tim call", () => {
        name.getGuess("tim").then(result => {

        });
    });
    test("Test return value", () => {
        name.getGuess("ben").then(result => {
            expect(result).not.toBe(null);
        });
    });
    test("Check if male", () => {
        name.getGuess("ben").then(result => {
            expect(result).arrayContaining("male");
        })
    })
    
});

describe("Attendance List Test", () => {
    let list;
    beforeAll(() => {
        list = new AttendanceList();
    });

    test("Test return value",() => {
        expect(list.add("sanyi")).not.toBeNull();
    });
    
    
});