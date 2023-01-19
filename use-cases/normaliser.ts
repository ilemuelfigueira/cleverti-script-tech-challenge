import * as levenshtein from "./levenshtein-distance";

class Normaliser {
  normalise(input: string, targets: string[] = ["Software engineer", "Accountant"], targetScore: number = 0.5) {
    console.info(`Normalising
    ${input}`);

    return levenshtein.getMatchByScore(input, targets, 0.5);
  }
}

export default Normaliser;
