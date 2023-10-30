export function type(arg){
    let string=Object.prototype.toString.call(arg);
    return string.match(/(?<=\s)\w+/)[0].toLowerCase();
}
