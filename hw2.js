"use strict"

let x = 124;
let type = typeof(x);

switch (type) {
    case "string":
        console.log('Это строка');
        break;
    case "boolean":
        console.log('Это логический тип');
        break;
    case "function":
        console.log('Это функция');
        break;
    case "bigint":
        console.log('Это bigint');
        break;
    case "number":
        console.log('Это число');
        break;
    case "object":
        console.log('Это объект');
        break;
    case "symbol":
        console.log('Это символ');
        break;
    case "undefined":
        console.log('Это undefined');
        break; 
    default:
        console.log('тип x не опеределён');
}