import * as levenshtein from "./levenshtein-distance";
import { Logger } from "./logger";

class Normaliser {

  private console: Logger;
  constructor() {
    this.console = new Logger("Normaliser");
  }

  normalise(input: string, targets: string[] = ["Software engineer", "Accountant"], targetScore: number = 0.5) {
    this.console.debug(`Normalising ${input}`);

    return levenshtein.getMatchByScore(input, targets, 0.5);
  }
}

export default Normaliser;
