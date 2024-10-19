// 1- "Kiraz, Karpuz, Kavun, Erik" elemanlarına sahip bir dizi oluşturun
// 2- dizi kaç elemanlıdır?
// 3- dizinin ilk ve son elemanlarını yazdırınız?
// 4- Kavun dizinin bir elemanımıdı?
// 5- Çilek elemanını dizinin sonuna ekleyiniz.
// 6- dizinin son 2 elemanını siliniz.
// 7- aşağıdaki bilgileri bir dizzide saklayınız ve her öğrencinin yaşını ve not ortalamasını hesaplayınız.
/*
 öğrenci 1: Yiğit Bilgi 2010 [60,90,80]
 öğrenci 2: Ada Bİlgi 2012 [70,80,80]
 öğrenci 3: Çınar Turan 2017 [60,50,80]
*/

let fruit = ["Kiraz", "Karpuz", "Kavun", "Erik"];

result = fruit.length;
console.log(result);

result = fruit[0] +" "+ fruit[fruit.length -1];
console.log(result);

result = fruit.includes("Kavun");
console.log(result);

fruit.push("Çilek");
console.log(fruit);

console.log(fruit);
fruit.splice(3, 2);
console.log(fruit);

// student

let student1, student2, student3;

student1 = ["Yiğit", "Bilgi", 2010, [60,90,80]];
student2 = ["Ada", "Bİlgi", 2012, [70,80,80]];
student3 = ["Çınar", "Turan", 2017, [60,50,80]]

// student 1
let student1_gpa = (student1[3][0] + student1[3][1] + student1[3][2])/3;
let student1_old = 2024 - student1[2];
console.log(`${student1[0]} ${student1[1]} Old years ${student1_old} GPA ${student1_gpa.toFixed(1)}`);

// student 2
let student2_gpa = (student2[3][0] + student2[3][1] + student2[3][2])/3;
let student2_old = 2024 - student2[2];
console.log(`${student2[0]} ${student2[1]} Old years ${student2_old} GPA ${student2_gpa.toFixed(1)}`);

// student 3
let student3_gpa = (student3[3][0] + student3[3][1] + student3[3][2])/3;
let student3_old = 2024 - student3[2];
console.log(`${student3[0]} ${student3[1]} Old years ${student3_old} GPA ${student3_gpa.toFixed(1)}`);

// student -or

let students = [
    ["Yiğit", "Bilgi", 2010, [60,90,80]],
    ["Ada", "Bİlgi", 2012, [70,80,80]],
    ["Çınar", "Turan", 2017, [60,50,80]]
];

// student 1
console.log(students[0][0] + " " + students[0][1] + " " + (2024 - students[0][2]) + " " + (students[0][3].reduce((a, b) => a + b) / students[0][3].length).toFixed(1));

// student 2
console.log(students[1][0] + " " + students[1][1] + " " + (2024 - students[1][2]) + " " + (students[1][3].reduce((a, b) => a + b) / students[1][3].length).toFixed(1));

// student 3
console.log(students[2][0] + " " + students[2][1] + " " + (2024 - students[2][2]) + " " + (students[2][3].reduce((a, b) => a + b) / students[2][3].length).toFixed(1));