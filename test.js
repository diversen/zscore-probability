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

let z_score_top = probabilityToZscore(0.975)
let z_score_bot = probabilityToZscore(0.025)

console.log('z-score top and bottom', z_score_top, z_score_bot)

/**
 * A population has a mean weight of 172 lbs for men
 * Find porbability that a random selected man will have a weight of less than 174
 * standard diviation is 29
 */

// Find z score
let z = (174 - 172) / 29;

// z-score to probability
let z_prob = zScoreToProbability(z)
console.log("Probability of a weight below 174", z_prob)
// -> 0.527491466305664


/**
 * IQ is a normal distribution with a mean of 100 and a std deviation of 15
 * What percentage of people have an IQ between 85 and 125 
 */
let z_low = (85 - 100)/ 15
let z_high = (125 - 100) / 15

let z_low_prob = zScoreToProbability(z_low)
let z_high_prob = zScoreToProbability(z_high)

console.log('Probability of a IQ between 85 and 125', z_high_prob - z_low_prob)
// -> 0.7935543938203113

/**
 * What weight separates the lighest 99.5% from the heaviest 0.5%
 * x = mean + sigma*z
 */
let z_score_lightest = probabilityToZscore(0.995)
console.log('z score lightest', z_score_lightest)
let x = 172 + 29 * z_score_lightest;
console.log('weight that separates the lightest from the heaviest', x)
// -> 246.6990522146225 

/**
 * 
 * sample proportion of the mean
 * 
 * Body temp. has an average of 98.5
 * Std deviation is 0.62
 * 
 * A sample of 106 people. What is the probability that the 
 * average temp. for the sample will be 98.2 or lower
 * 
 * (x_bar - mean) / (sigma/ sqrt n) 
 */
let z_score_temp = (98.2 - 98.6) / (0.62 / Math.sqrt(106))
console.log('z score temperature', z_score_temp)
console.log('Probability is ', zScoreToProbability(z_score_temp))

/**
 * confidence intervals for the population proportion
 * 
 * 280 trials, 123 corrrect
 * p_hat = 123/280
 * q_hat = 1 - p_hat
 * 
 * alha_level = 0.05
 * confidence = 0.95
 * 
 * E = probabilityToZscore(0.95 + alpha_level / 2) * Math.sqrt((133/280)*(1-133/280)/280 
 * 
 */

// 
let p_hat = 123/280

let E = probabilityToZscore(0.975) * Math.sqrt(p_hat*(1-p_hat)/280)
let Etable = 1.96 * Math.sqrt(p_hat*(1-p_hat)/280)


console.log('z-score using table', 1.96)
// -> 1.96
console.log('z-score using zScoreToProbability', probabilityToZscore(0.975))
// -> 1.9599641561508179

console.log('Using zScoreToProbability. You are 95 confident that the population is in the interval between ', p_hat - E, p_hat + E ) 
// -> 0.3811539553457276 0.49741747322570096

console.log('Using table lookup You are 95 confident that the population is in the interval between ', p_hat - Etable, p_hat + Etable ) 
// -> 0.3811528922313877 0.49741853634004085
