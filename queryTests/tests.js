//
// TESTING UUID
//
/*
const uuidVar = require("uuid");
//
const variavel = uuidVar.v4(); // generates unique string
const variavelArray = uuidVar.parse(variavel); // transform que string into a bit array
const variavelAgain = uuidVar.stringify(variavelArray); // transform the array back to the original string
//
console.log(variavel);
console.log(variavelArray);
console.log(variavelAgain);
*/
//
// the UUID generates too large unique id's for a url shortener, however it's great for database creation
//
//
//
//
// TESTING Short-Unique-ID
//
const shortUniqID = require("short-unique-id");
//
const variavel1 = new shortUniqID({ length: 10 });
const variavel2 = new shortUniqID({ length: 20 });
const variavel3 = new shortUniqID({ length: 30 });
//
console.log(variavel1());
console.log(variavel2());
console.log(variavel3());
//
// this works fine!
//
