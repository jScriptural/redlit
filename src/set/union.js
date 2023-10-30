import {type} from "../helper.js";

export function union(...sets){
    if(sets.length <2){
	throw new Error("expect at least two args");
    }else if (sets.some(set=>type(set) !== "set")){
	throw new TypeError("Invalid args: args must be  Set");
    }

    return new Set(sets.flatMap(set=>Array.from(set)));

}
