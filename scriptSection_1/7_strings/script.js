// strings

var user_1name = "Oğuz Batuhan";
var user_1surname = "Çözeli";
var user_1old = 21;
var user_1city = "Antalya";
//console.log(name[5]);
var message = "Hi, there I am " + user_1name + " " + user_1surname + " " + user_1old + " years old live in " + user_1city;

// Template Strings
message = `Hi, there I am ${user_1name} ${user_1surname} ${user_1old} years old live in ${user_1city}`;
// backtick işareti ``

console.log(message);