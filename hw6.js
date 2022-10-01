"use strict"

let arr = ["a","b","c","d","e","f","g"];
//let arr = ["a","a","a"];

let i = 0;
let j = 1;
let all = 0;

for(i = 0; i < arr.length; i++){
    for(j = 1; j < arr.length; j++){
        if(arr[i] === arr[j]){
            all++;
        }
    }
}

if (all/2 === arr.length){
    console.log(true);
}
else{
    console.log(false);
}