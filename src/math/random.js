export function random(min=0,max=1){
   if(!Number.isFinite(min) || !Number.isFinite(max)){
   	throw new TypeError("arg is not a number type");
   }else if(min > max){
	throw new RangeError("arg out of order");
	}
	return (Math.random()*(max-min))+min;
	
}
