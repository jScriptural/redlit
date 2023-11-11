import {math} from "./src/math/math.js";
import {object} from "./src/object/object.js";
import {set} from "./src/set/set.js";

const redlit = {};

redlit.math = math;
redlit.object = object;
redlit.set = set;

let setA = new Set([1,2,3,4,5]);
let setB = new Set([3,4,5,6,7,8,8, 9,0]);

console.log(redlit.set.union(setB,setA))
Object.freeze(redlit);
export default redlit;
