import {type} from "../helper.js";

export function isPrime(num){
    if(type(num) !== "number" || !isFinite(num)){
	throw new TypeError("arg is NaN or not a number type");
    }
    if(num <= 1)return false;
    if(!Number.isInteger(num))return false;
    for(let i=2; i<=Math.sqrt(num); ++i){
	if(!(num % i))return false;
    }
    return true;
}

