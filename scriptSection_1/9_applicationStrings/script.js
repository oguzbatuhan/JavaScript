// strings application

let url = "https://www.sadikturan.com";
let courseName = "Komple Web Geliştirme Kursu";

let conclusion, conclusion_1, conclusion_2, conclusion_3, conclusion_4;

// 1- url kaç karakterlidir?
conclusion = url.length;

// 2- Kurs adı kaç kelimeden oluşmaktadır?
conclusion_1 = courseName.split(" ").length;

// 3- url https ile mi başlıyor?
conclusion_2 = url.startsWith("https");

// 4- kurs adı içerisinde Eğitimi kelimesi  varmı?
conclusion_3 = url.indexOf("Eğitimi");

// 5- url ve kurs adı değişkenlerini kullanarak aşağıdaki string bilgiyi oluşturunuz.

// https://www.sadikturan.com/komple-web-geliştirme-kursu
conclusion_4 = courseName.toLowerCase();
conclusion_4 = conclusion_4.replaceAll(" ", "-");
conclusion_4 = conclusion_4.replaceAll("ş", "s").replaceAll("ı", "i").replaceAll("ç", "c").replaceAll("ü", "u").replaceAll("ö", "o").replaceAll("ğ", "g");

console.log(conclusion, conclusion_1, conclusion_2, conclusion_3, `${url}/${conclusion_4}`);
