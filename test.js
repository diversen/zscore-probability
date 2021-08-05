import { probabilityToZscore, zScoreToProbability } from "./index.js";


let prob_1 = zScoreToProbability(-2)
console.log(prob_1)
// -> 0.022750132959500013
// Table: 0.02275

let prob_2 = zScoreToProbability(-3)
console.log(prob_2)
// -> 0.0013498974275996112
// Table: 0.0013499

let prob_3 = zScoreToProbability(1.25)
console.log(prob_3)
// -> 0.8943502262209612
// Table: 0.89435

// Just reverse the above results
let z_score_1 = probabilityToZscore(prob_1)
console.log(z_score_1)
// -> -1.9999998807907104

let z_score_2 = probabilityToZscore(prob_2)
console.log(z_score_2)
// -> -2.9999996423721313

let z_score_3 = probabilityToZscore(prob_3)
console.log(z_score_3)
// -> 1.2499998807907104

