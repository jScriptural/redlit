import {type} from "../helper.js";

export function size(obj){
    if(type(obj) !== "object"){
	throw new TypeError("arg is not an object type");
    }
    return Object.keys(obj).length;
}
