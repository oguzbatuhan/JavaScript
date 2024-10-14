// Arry Methods

let student = ["Çinar", "Yiğit", "Ada"];

let result;

// test

result = student.length;
console.log(result);

result = student.toString();
console.log(result);

result = student.join(" ");
console.log(result);

// Removing an Element

student = ["Çinar", "Yiğit", "Ada", 1, 2, 3, 4];

result = student.pop();
console.log(result);
console.log(student);

result = student.shift();
console.log(result);
console.log(student);

result = student.splice(3, 1);
console.log(result);
console.log(student);

// adding an element

student = ["Çinar", "Yiğit", "Ada"];

result = student.push("Sena");
console.log(result);
console.log(student);

result = student.unshift("Sena");
console.log(result);
console.log(student);

// Element Search

student = ["Çinar", "Yiğit", "Ada", "Yiğit"];

result = student.indexOf("Yiğit");
console.log(result);
console.log(student);

result = student.lastIndexOf("Yiğit");
console.log(result);
console.log(student);

result = student.includes("Ada");
console.log(result);
console.log(student);

// Delete and Push

student = ["Çinar", "Yiğit", "Ada"];

result = student.splice(0,1);
console.log(result);
console.log(student);

student = ["Çinar", "Yiğit", "Ada"];

result = student.splice(0,2,"Oğuz","Batuhan");
console.log(result);
console.log(student);
