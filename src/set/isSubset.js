import {type} from "../helper.js";

export function isSubset(subset,set){
  if(type(subset) !== "set" || type(set) !== "set"){
    throw new TypeError("args must of type set");
  }else if(subset === undefined || set === undefined){
    throw new SyntaxError("expects two args");
  } else if(subset.size > set.size){
    return false;
  }else {
    return new Set(Array.from(set).concat(Array.from(subset))).size === set.size;
  }
}


