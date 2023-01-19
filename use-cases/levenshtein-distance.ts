import { Logger } from "./logger";

export const getDistance = (a: string, b: string) => {
  const logger = new Logger("Levenshtein");

  const track = Array(b.length + 1)
    .fill(null)
    .map(() => Array(a.length + 1).fill(null));
  for (let i = 0; i <= a.length; i += 1) {
    track[0][i] = i;
  }
  for (let j = 0; j <= b.length; j += 1) {
    track[j][0] = j;
  }
  for (let j = 1; j <= b.length; j += 1) {
    for (let i = 1; i <= a.length; i += 1) {
      const indicator = a[i - 1] === b[j - 1] ? 0 : 1;
      track[j][i] = Math.min(
        track[j][i - 1] + 1, // deletion
        track[j - 1][i] + 1, // insertion
        track[j - 1][i - 1] + indicator // substitution
      );
    }
  }

  const result = track[b.length][a.length];

  logger.debug(`Distance between ${a} and ${b} is ${result}`);

  return result;
};

export const getDistanceQuality = (a: string, b: string, distance: number) => {
  return 1 - distance / Math.max(a.length, b.length);
};

export const getMatchByScore = (
  a: string,
  targets: string[],
  targetScore: number = 0.4
) => {
  const logger = new Logger("Levenshtein");
  // get match by score closest to target score
  const qualities = targets.map((t) => {
    const distance = getDistance(a, t);
    const quality = getDistanceQuality(a, t, distance);
    return quality;
  });

  const highestQuality = Math.max(...qualities);

  if (highestQuality >= targetScore) {
    return targets[qualities.indexOf(highestQuality)];
  }

  throw new Error("No match found");
};
