// operators

let result;
let a = 10, b = 20, c = 30;

// 1- Aritmetik Operatörler, Arithmetic Operators
result = (a + b);
result = (a - b);
result = (a * b);
result = (a / b);
result = (a % b); // mod alma. tekmi çiftmi.
result = a++; // result = a + 1
result = ++a; // result = a + 1
result = a--; // result = a - 1
result = --a; // result = a - 1

// 2- Atama Operatörleri, Assignment Operators
result = a; // a = result
result = (a + b); // a + b = result
result += (a + b); // a + b + result = result
result = a + result; // a + result = result
result += a; // a + result = result

// 3- Karşılaştırma Oparatörleri, Comparison Operators
result = (a == b); // true, false -eşitmi?
result = (a != b); // true, false -eşit değilmi?
result = (2 == "2");
result = (2 === "2"); // tip kontrolüde yapar.
result = a > b;
result = a >= b;
result = a < b;
result = a <= b;

// 4- Mantıksal Oparatörler, Logical Operators

console.log(result);