const arr1 = [];

const len = Number(prompt("Enter The Length of an Array :"));

for(let x = 0; x <= len ; x++){
    arr1 [x] = Number(prompt(`enter the number at index arr [${x}]`));
}

for (let y = 0 ; y <= len; y++){
    console.log(arr1[y])
}

const positive = []
const negative = []

for(let z = 0; z <= len ; z++){
    if(arr1[z] > 0){
        positive.push(arr1[z])
    }
    else {
        negative.push(arr1[z])
    }
}

console.log(`The positive numbers from given arrray is : ${positive}`)
console.log(`The negative numbers from given arrray is : ${[negative]}`)