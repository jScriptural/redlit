import {math} from "./src/math/math.js";
import {object} from "./src/object/object.js";
import {set} from "./src/set/set.js";

const redlit = {};

redlit.math = math;
redlit.object = object;
redlit.set = set;

;
Object.freeze(redlit);
export default redlit;
