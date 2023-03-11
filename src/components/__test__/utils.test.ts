import { convertMsToTime } from "../utils";

describe("Timer", () => {
    it("should return correctly with time lower 1s", () => {
        expect(convertMsToTime(100)).toEqual("00:01:00");
    });

    it("should return correctly with time lower 1s", () => {
        expect(convertMsToTime(500)).toEqual("00:05:00");
    });

    it("should return correctly with time lower 1s", () => {
        expect(convertMsToTime(10001)).toEqual("01:40:01");
    });
});
