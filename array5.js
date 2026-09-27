const array = [];

const end = Number(prompt("enter the ending index of an array :"))

for (let x = 0 ; x <= end; x++){
    array [x] = Number(prompt(`enter the value od array[${x}]`))
}

const choice = Number(prompt(`(1)- reverse array  \n
    (2)- sum of elements   \n
    (3)- maximum from an array  \n
    (4)- minimum from an array  \n`))

if (choice == 1 ){
    for(let x = end; x >= 0 ; x--){
        console.log(`${array[x]}`)
    }
}
else if ( choice == 2){
    let sum = 0;
    for (let x = 0 ; x <= end; x++){
    sum = sum + array[x]
}
console.log(`the sum of an elements are : ${sum}`)
}
else if(choice == 3){
  let max = array[0];
   for(let x = 1 ; x <= end; x++){
       if (max < array[x]){
        max = array[x];
       }
    } 
    console.log(`maximum of an array is :${max}`)
}
else if(choice == 4){
let min = array[0];
   for(let x = 1 ; x <= end; x++){
       if (min > array[x]){
        min = array[x];
       }
    } 
    console.log(`minimum of an array is :${min}`)
}
else if (choice < 0 || choice > 4){
    alert("invalid choice !! please re eneter your choice ")
}