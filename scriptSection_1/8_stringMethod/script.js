// string mrthods

var courseName = "   Komple Uygulamalı Web Geliştirme Eğitimi   ";
var conclusion, conclusion_1, conclusion_2, conclusion_3, conclusion_4, conclusion_5, conclusion_6, conclusion_7, conclusion_8, conclusion_9, conclusion_10, conclusion_11, conclusion_12, conclusion_13, conclusion_14, conclusion_15, conclusion_16;

conclusion = courseName.toLowerCase();
conclusion_1 = courseName.toUpperCase();
conclusion_2 = courseName.length;
conclusion_3 = courseName[0];
conclusion_4 = courseName.slice(0,6);
conclusion_5 = courseName.slice(10);
conclusion_6 = courseName.slice(-10);
conclusion_7 = courseName.slice(-10, -5);

conclusion_8 = courseName.substring(0,6);
conclusion_9 = courseName.substring(10);

conclusion_10 = courseName.replace("Eğitimi", "Kursu");

conclusion_11 = courseName.trim();
conclusion_12 = courseName.trimStart();
conclusion_13 = courseName.trimEnd();

conclusion_14 = courseName.indexOf("Web");
conclusion_15 = courseName.split(" ");
conclusion_16 = courseName.split(" ")[4];

console.log(conclusion);
console.log(conclusion_1);
console.log(conclusion_2);
console.log(conclusion_3);
console.log(conclusion_4);
console.log(conclusion_5);
console.log(conclusion_6);
console.log(conclusion_7);
console.log(conclusion_8);
console.log(conclusion_9);
console.log(conclusion_10);
console.log(conclusion_11);
console.log(conclusion_12);
console.log(conclusion_13);
console.log(conclusion_14);
console.log(conclusion_15);
console.log(conclusion_16);
