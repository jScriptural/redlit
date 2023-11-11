import {union} from "./union.js";
import {intersection} from "./intersection.js";
import {difference} from "./difference.js";
import {isSubset} from "./isSubset.js";
import {isSuperset} from "./isSuperset.js";

export const set = {};

set.union = union;
set.intersection = intersection;
set.difference = difference;
set.isSuperset = isSuperset;
set.isSubset = isSubset;


Object.freeze(set);

