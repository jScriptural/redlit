import {isEmpty} from "./isEmpty.js";
import {size} from "./size.js";


export const object = {};
object.isEmpty = isEmpty;
object.size = size;


Object.freeze(object);
