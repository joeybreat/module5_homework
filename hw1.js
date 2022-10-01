"use strict";

let variable = +prompt("Введите число");

if (typeof variable === "number"){
    if(variable === NaN){
        alert("Упс, кажется, вы ошиблись");
    }
    else if(variable === 0){
        alert("Это 0");
    }
    else if(variable % 2 === 0){
        alert("Число чётное");
    }
    else{
        alert("Число нечётное");
    }
}
else{
    alert("Упс, кажется, вы ошиблись");
}