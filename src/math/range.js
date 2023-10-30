
export function range(end,start=0,step=1){
    let r = [];
    if(Number.isInteger(start) && Number.isInteger(end) && Number.isInteger(step) && end >= 0 && start>=0 && step>=1){
	for(let i = start; i < end ; i += step){
	    r.push(i);
	}
	return r;
    }
    throw new TypeError("arg is not an integer or it`s negative");
}

range.help=`
@func: range(<end>,<start>=0,<end>=0).
@desc: this function return an array of integers greater than or equals to <start> parameter 
and less than the <end> parameter with a step size of <step>. <start> default to 0 and <step> default to 1.
@params: *<end> @type[number] upper bound of the range. Must be non-negative integer.
	 *<start> @type[number]  lower bound of the range(optional).Must be non-negative integer.
	 *<step> @type[number] the increment size(optional). Must be integer greater than or equals to 1.

@return: An array of integers between <start>(inclusive) and <end>.`;



