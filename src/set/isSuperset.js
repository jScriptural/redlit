import {type} from "../helper.js";

export function isSuperset(superset,set){
  if(type(set) !== "set" || type(superset) !== "set"){
    throw new TypeError("args must of type set");
  }else if(set === undefined || superset === undefined){
    throw new SyntaxError("expects two args");
  } else if(set.size > superset.size){
    return false;
  }else {
    return new Set(Array.from(set).concat(Array.from(superset))).size === superset.size;
  }
}
