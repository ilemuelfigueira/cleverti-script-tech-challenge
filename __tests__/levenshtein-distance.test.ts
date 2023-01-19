import {
  getDistance,
  getDistanceQuality,
  getMatchByScore,
} from "../use-cases/levenshtein-distance";

describe("Levenshtein distance", () => {
  describe("getDistance", () => {
    it("should return 0 for identical strings", () => {
      const result = getDistance("test", "test");
      expect(result).toBe(0);
    });
    it("should return 1 for strings with one character difference", () => {
      const result = getDistance("test", "tast");
      expect(result).toBe(1);
    });
    it("should return 2 for strings with two character difference", () => {
      const result = getDistance("test", "tact");
      expect(result).toBe(2);
    });
    it("should return 3 for strings with three character difference", () => {
      const result = getDistance("test", "taaa");
      expect(result).toBe(3);
    });
    it("should return 4 for strings with four character difference", () => {
      const result = getDistance("test", "asdc");
      expect(result).toBe(4);
    });
  });

  describe("getDistanceQuality", () => {
    it("should return 1 for identical strings", () => {
      const result = getDistanceQuality("test", "test", 0);
      expect(result).toBe(1);
    });
    it("should return 0.25 for strings with one character difference and values lengths is 4", () => {
      const result = getDistanceQuality("test", "tast", 1);
      expect(result).toBe(0.75);
    });
    it("should return 0.5 for strings with two character difference and values lengths is 4", () => {
      const result = getDistanceQuality("test", "tats", 2);
      expect(result).toBe(0.5);
    });
    it("should return 0.75 for strings with three character difference and values lengths is 4", () => {
      const result = getDistanceQuality("test", "tats", 3);
      expect(result).toBe(0.25);
    });
  });

  describe("getMatchByScore", () => {
    it("should return the first target if the score is 1", () => {
      const result = getMatchByScore("test", ["test", "tast"], 1);
      expect(result).toBe("test");
    });

    it("should return the second target if the score is 0.5", () => {
      const result = getMatchByScore("test", ["tast", "test"], 0.5);
      expect(result).toBe("test");
    });

    it("should return the second target if the score is 0.25", () => {
      const result = getMatchByScore("test", ["tats", "test"], 0.25);
      expect(result).toBe("test");
    });
  });
});
