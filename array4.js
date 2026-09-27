const prime = [];
const nprime = [];
const main = [];

const start = Number(prompt("Enter the starting of number :"));
const end = Number(prompt("Enter the ending of number :"));

for(let x = start; x <= end; x++){
    main[x] = Number(prompt(`ENTER THE VALUE OF ARRAY[${x}]:`));
}

for(let x = start; x <= end; x++){
    console.log(`main[${x}] is ${main[x]}`);
}

for(let x = start; x <= end; x++){

    let count = 0;

    for(let y = 1; y <= main[x]; y++){

        if(main[x] % y == 0){
            count++;
        }
    }

    if(count == 2){
        prime.push(main[x]);
    }
    else{
        nprime.push(main[x]);
    }
}

console.log(`The given prime array is : ${prime}`);
console.log(`The given non-prime array is : ${nprime}`);