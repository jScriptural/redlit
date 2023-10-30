import {random} from "./random.js";
import {getDecimal} from "./getDecimal.js";
import {isPrime} from "./isPrime.js";
import {range} from "./range.js";

export  const math = {}; 

math.random = random;
math.getDecimal = getDecimal;
math.isPrime = isPrime;
math.range = range;

Object.freeze(math);
