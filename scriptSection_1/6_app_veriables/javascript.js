/*
    1- Aşağıdaki iki öğrencinin bilgilerini değişkenler içerisinde saklayınız.

        Student 1:
            Name : Ada Bilgi
            Date of birth : 2012
            Math grades : 70, 70, 80

        Student 2:
            Name : Yiğit Bilgi
            Date of birth : 2010
            Math grades : 40, 40, 50
            
    2- Öğrencilerin yaş bilgilerini değişkende tutunuz.
    3- öğrencilerin ders ortalama notunu değişkende saklayınız.
    4- öğrencilerin 50 geçme notuna göre başarı durumlarını değişkende saklayınız.
*/

// student_1
var student_1Name = "Ada";
var student_1Surname = "Bilgi";
var student_1dateOfBirth = 2012;
var student_1mathGrades_1 = 70;
var student_1mathGrades_2 = 70;
var student_1mathGrades_3 = 80;

var student_1Old = 2024 - student_1dateOfBirth;
console.log(student_1Old);
console.log(student_1Name + " " + student_1Surname);
var student_1gpa =(student_1mathGrades_1 + student_1mathGrades_2 + student_1mathGrades_3)/3;
console.log(parseInt(student_1gpa));
console.log(student_1gpa >= 50); // Boolean


// student_2
var student_2Name = "Yiğit";
var student_2Surname = "Bilgi";
var student_2dateOfBirth = 2010;
var student_2mathGrades_1 = 40;
var student_2mathGrades_2 = 40;
var student_2mathGrades_3 = 50;

var student_2Old = 2024 - student_2dateOfBirth;
console.log(student_2Old);
console.log(student_2Name + " " + student_2Surname);
var student_2gpa =(student_2mathGrades_1 + student_2mathGrades_2 + student_2mathGrades_3)/3;
console.log(parseFloat(student_2gpa));
console.log(student_2gpa >= 50);  // Boolean