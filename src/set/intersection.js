import {type} from "../helper.js";

export function intersection(setA,setB){
  let common = new Set();
  if(type(setA) !== "set" || type(setB) !==  "set" ){
    throw new TypeError("args must be of type set");
  }else if(setA === undefined || setB === undefined){
    throw new Error("Expect two args ");
  }
  for(let elem of setA){
    if(setB.has(elem))common.add(elem);
  }
  return common;
}
