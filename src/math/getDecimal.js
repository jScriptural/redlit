import {type} from "../helper.js";

export function getDecimal(num){
    if(type(num) !== "number" ||  !isFinite(num)){
	throw new TypeError("arg is a NaN or not a number type");
    }
    let groups = num.toString().match(/(?<int>\d+)(?<dec>\.\d+)?/).groups;
    return groups.dec?+(groups.dec.padStart(groups.dec.length+1,"0")): 0;

}

    
