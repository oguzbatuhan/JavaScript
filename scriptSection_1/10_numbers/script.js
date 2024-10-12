// Numbers

let conclusion;

conclusion = 10; // number.
conclusion = "10"; // string.
conclusion = Number("10"); // string veriyi number a çevirir.
conclusion = parseInt("10.7"); // float olan veriyi int e çevirir.
conclusion = parseFloat("10.7"); // veriyin float olarak tanımlar.
conclusion = parseInt("10a"); // tam sayımı? number 10.
conclusion = parseInt("a10"); // tam sayımı? nımber nan.

conclusion = isNaN("a10"); // is not a number?
conclusion = Number.isInteger(10.5); // tam sayımı?

let number = 10.12355;
 
conclusion = number.toPrecision(5); // en fazla beş basamak.
conclusion = number.toFixed(2); // , den sonra kaç basamak geleceğini söyler.

conclusion = Math.round(2.4); // en yakına yuvarlar.
conclusion = Math.ceil(2.4); // hep yukarı yuvarlar.
conclusion = Math.floor(2.4); // hep aşağı yuvarlar.
conclusion = Math.sqrt(25); // kare kökünü alır.
conclusion = Math.pow(2,3); // 2 nin 3 cü kuvvetini alır.
conclusion = Math.min(2,3,4,5,6,7,8,9); // en küçüğü yazdırır.
conclusion = Math.max(2,3,4,5,6,7,8,9); // en büyüğü yazdırır.

conclusion = Math.random();
conclusion = Math.floor(Math.random() * 100 + 0);

console.log(typeof conclusion);
console.log(conclusion);