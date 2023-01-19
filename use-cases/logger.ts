export class Logger {
  constructor(private instanceName: string) {
    this.instanceName = instanceName;
  }

  log(message: string) {
    console.log(
      `[${new Date().toLocaleString()}] ${this.instanceName}: ${message}`
    );
  }

  error(message: string) {
    console.error(
      `[${new Date().toLocaleString()}] ${this.instanceName}: ${message}`
    );
  }

  warn(message: string) {
    console.warn(
      `[${new Date().toLocaleString()}] ${this.instanceName}: ${message}`
    );
  }

  info(message: string) {
    console.info(
      `[${new Date().toLocaleString()}] ${this.instanceName}: ${message}`
    );
  }

  debug(message: string) {
    if (process.env.NODE_ENV === "development") {
      console.log(
        `[${new Date().toLocaleString()}] ${this.instanceName}: ${message}`
      );
    }
  }
}
