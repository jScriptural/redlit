import {type} from "../helper.js";

export function difference(setA,setB){
  let diff = new Set();
  if(type(setA) !== "set" || type(setB) !== "set"){
    throw new TypeError("args must of type set");
  }else if(setA === undefined || setB === undefined){
    throw new SyntaxError("expects two args");
  }
  for(let elem of setA){
    if(!setB.has(elem))diff.add(elem);
  }
  return diff;
}

