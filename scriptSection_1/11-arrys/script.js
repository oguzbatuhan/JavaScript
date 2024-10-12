// Arrys, Diziler

//let product1 = "Iphone 15";
//let product2 = "Iphone 16";
//let product3 = "Iphone 17";

let conclusion;

let products = ["Iphone 15", "Iphone 16", "Iphone 17"];
let pirices = [50000, 60000, 70000];
let colors = ["gold", "black", "silver"];

conclusion = `${products[0]} - ${pirices[0]} - ${colors[0]}`;
console.log(conclusion);
conclusion = `${products[1]} - ${pirices[1]} - ${colors[1]}`;
console.log(conclusion);
conclusion = `${products[2]} - ${pirices[2]} - ${colors[2]}`;
console.log(conclusion);

let product1 = ["Iphone 15", 50000, "gold"];
let product2 = [
    "Iphone 16",
    60000,
    ["gold", "black", "silver"]
];
let product3 = [
    "Iphone 17",
    70000,
    ["gold", "black", "silver"]
];

conclusion = `${product1[0]} ${product1[1]} ${product1[2]}`;
console.log(conclusion);
conclusion = `${product2[0]} ${product2[1]} ${product2[2]}`;
console.log(conclusion);
conclusion = `${product3[0]} ${product3[1]} ${product3[2][1]}`;
console.log(conclusion);

product1[0] = "Iphone 15 Pro";
conclusion = `${product1[0]} ${product1[1]} ${product1[2]}`;
console.log(conclusion);