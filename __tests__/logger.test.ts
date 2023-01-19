import { Logger } from "../use-cases/logger";

process.env.NODE_ENV = "development";

describe("Logger", () => {
  describe("debug", () => {
    it("should log a debug message", () => {
      const logger = new Logger("test");
      const spy = jest.spyOn(logger, "debug");
      spy.mockImplementation(() => {});
      logger.debug("test");
      expect(spy).toHaveBeenCalledWith("test");
    });
  });
  describe("info", () => {
    it("should log an info message", () => {
      const logger = new Logger("test");
      const spy = jest.spyOn(logger, "info");
      spy.mockImplementation(() => {});
      logger.info("test");
      expect(spy).toHaveBeenCalledWith("test");
    });
  });
  describe("warn", () => {
    it("should log a warn message", () => {
      const logger = new Logger("test");
      const spy = jest.spyOn(logger, "warn");
      spy.mockImplementation(() => {});
      logger.warn("test");
      expect(spy).toHaveBeenCalledWith("test");
    });
  });
  describe("error", () => {
    it("should log an error message", () => {
      const logger = new Logger("test");
      const spy = jest.spyOn(logger, "error");
      spy.mockImplementation(() => {});
      logger.error("test");
      expect(spy).toHaveBeenCalledWith("test");
    });
  });
});
