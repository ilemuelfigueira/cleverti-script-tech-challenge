import Normaliser from "./src/use-cases/normaliser";

let jt = "Java engineer";
const n = new Normaliser();
let normalisedTitle = n.normalise(jt);
//output normalisedTitle
jt = "C# engineer";
normalisedTitle = n.normalise(jt);
//output normalisedTitle
jt = "Chief Accountant";
normalisedTitle = n.normalise(jt);
//output normalisedTitle
