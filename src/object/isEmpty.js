import {type} from "../helper.js";

export function isEmpty(obj){
    if(type(obj) !== "object"){
	throw new TypeError("arg is not an object type");
    }
    return !Object.keys(obj).length;
}

    
