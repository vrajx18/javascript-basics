let  odd = [];
let even = [];

const start = Number(prompt("enter the starting index of an array :"));
const end = Number(prompt("enter the ending index of an array :"));

for(let x = start; x <= end; x++){
    if ( x % 2 == 0){
        odd.push(x)
    }
    else
    {
    even.push(x)
    }
}

console.log(`the given odd array is : ${odd}`);
console.log(`the given odd array is :${even}`);
