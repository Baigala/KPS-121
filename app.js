// js хичээлийн сэдвүүд:
// var, data type
// нөхцөл шалгах
// давталт
// function
// massiv
// object
// es6 нэмэлтүүд
// DOM
// OOP
// Module
// Async

/* хувьсагч, өгөгдлийн төрлүүд */
// var түлхүүр үг ашиглаж зарлана.
// тоогоор эхэлсэн нэртэй байж болохгүй.
// олон үгээс тогтох урт нэрийг CamelCase ашиглан бичнэ.
// js ийн түлхүүр үгсээр хувьсагчийг нэрлэж болохгүй.

// өгөгдлийн 5 төрөл - datatype
// 1. number - 123456789
// 2. string - "hi" 'hello' '2'
// 3. boolean - true, false
// 4. null
// 5. undefined

// true == 1;
// false == 0;
// +, parseInt()
// var too = parseInt(prompt("Toogoo oruulna uu?"));
// Math.PI
// Math.pow(3,2)
// Math.sqrt(9)
// alert("dffasfasd");

/*Дасгал 1
Өөрийн төрсөн оноо хувьсагчинд хадгалаад одоо байгаа оноос хасч насаа гаргаж ирдэг програм бич.
*/
// var miniiTorsonOn = 1998;
// var currentYear = 2024;
// var nas = currentYear - miniiTorsonOn;
// console.log(nas);

// console.log(currentYear - 10);
// console.log(currentYear * 2);
// console.log(currentYear / 2);

/*Дасгал 2
Гараас радиус авж тухайн радиустай тойргийн урт, талбайг тус тусад нь ол..
urt = PiToo * 2 * r;
talbai = PiToo * r * r;
*/
// var radius = +prompt("radiusaa oruulna uu?");
// urt = Math.PI * 2 * radius;
// talbai = Math.PI * radius * radius;
// console.log(urt);
// console.log(talbai);

/* нөхцөл шалгалт */
// if statement
// >=, <=, ==, ===, &&-and, !-not, || - or
// var age = +prompt("nasaa oruulna uu");
// if (age > 0 && age < 12) {
//   console.log("baga nasnii huuhed.");
// } else if (age >= 12 && age < 18) {
//   console.log("oswor nasnii huuhed.");
// } else if (age >= 18 && age < 140) {
//   console.log("tom hun");
// } else {
//   console.log("nasaa buruu oruulsan bna.");
// }
// var mergejil = "togooch";
// if (mergejil === "togooch" || mergejil === "jolooch") {
//   console.log("ajild awna.");
// }

/* Дасгал №3:
Гараас 2ш тоо өгөгдсөн ба, хэрэв тэдгээрийн үржвэр 1000-с их бол үржвэрийг хэвлэж, 1000-с бага бол нийлбэрийг хэвлэ. */
// var too1 = +prompt("ehnii toog oruulna u");
// var too2 = +prompt("2 dahi toog oruul");
// var urjwer = too1 * too2;
// if (urjwer > 1000) {
//   console.log(urjwer);
// } else {
//   console.log(too1 + too2);
// }
/* Дасгал №4:
Гурвалжны суурь болон өндөр өгөгдсөн бол тухайн гурвалжны талбайг ол.
томьёо: (суурь*өндөр)/2
*/
// var suuri = +prompt("suuriig oruulna uu?");
// var ondor = +prompt("gurwaljnii ondriig oruulna u");
// var talbai = (suuri * ondor) / 2;
// console.log(talbai);
/* Дасгал №5:
Гараас тоо аваад тэгш, сондгой эсэхийг нь шалгадаг програм бич. */
// var too = +prompt("toog oruul");
// if (too % 2 === 0) {
//   console.log("tegsh too");
// } else {
//   console.log("sondgoi");
// }

// for dawtalt
// var x = 5;
// x = x + 4;
// x += 4;
// x -= 3;
// x *= 2;
// x -= 15;

// x = x + 1;
// x += 1;
// x++;
// x--;

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// for (var too = 1; too <= 5; too++) {
//   console.log(too);
// }
// 1 - 100 hurtel console deer hewle.
// for (var i = 1; i <= 100; i++) {
//   console.log("i iin utga " + i);
// }
// 1 - 100 hurtelh tegsh toonuudiig hewle.
// for (var i = 1; i <= 100; i++) {
//   if (i % 2 === 1) {
//     console.log(i);
//   }
// }
/* 10 hurtelh toonii niilberiig hewle. */
// var sum = 0;
// for (var i = 1; i <= 10; i++) {
//   sum += i;
// }
// console.log(sum);
/* 10 хүртэл давталт хийж, тоо тус бүрийг өмнөх тооны нийлбэртэй консолд хэвлэнэ үү. */
// var sum1 = 0;
// for (var i = 0; i <= 10; i++) {
//   sum1 += i;
//   console.log(i, sum1);
// }

// while dawtalt
// var too = 1;
// while (too <= 5) {
//   console.log(too);
//   too++;
// }

// do while dawtalt
// var too1 = 1;
// do {
//   console.log(too1);
//   too1++;
// } while (too1 >= 5);

// function void || return hdg.
// function butets || function zarlah

// function nemeh1(num1, num2) {
//   console.log(num1 + num2);
// }

// function nemeh2(num1, num2) {
//   return num1 + num2;
// }

// functionoo ajilluulah || functionoo duudah.
// console.log(nemeh2(3, 6) * 2);
// nemeh1(4, 6);
// nemeh1(3, 9);

// var ner = "Baigal";
// var mergejil = "marketing manager";
// if (mergejil === "bagsh") {
//   console.log(ner + " hool hdg.");
// } else if (mergejil === "marketing manager") {
//   console.log(ner + " poster hdg.");
// } else if (mergejil === "togooch") {
//   console.log(ner + " hool hdg.");
// }

// var name = "Gizmo";
// var job = "manager";
// if (job === "togooch") {
//   console.log(name + " cooks.");
// } else if (job === "manager") {
//   console.log(name + " creates posters");
// } else if (job === "bagsh") {
//   console.log(name + " teaches lessons.");
// }

// functionii parameter || argument
// function mergejilShalgah(ner, mergejil) {
//   if (mergejil === "bagsh") {
//     console.log(ner + " hiceel zaadag.");
//   } else if (mergejil === "marketing manager") {
//     console.log(ner + " poster hdg.");
//   } else if (mergejil === "togooch") {
//     console.log(ner + " hool hdg.");
//   }
// }

// mergejilShalgah("Baigal", "togooch");
// mergejilShalgah("Zoloo", "bagsh");
// mergejilShalgah("Nomin", "marketing manager");

// Гараас тоо аваад тэгш, сондгой эсэхийг нь шалгадаг програм бич.
// function shalgah(too) {
//   if (too % 2 === 0) {
//     return "tegsh";
//   } else {
//     return "sondgoi";
//   }
// }
// console.log(shalgah(10));

/* array - массив */
var too = [1, 2, 3, true, "bla", "aa"]; // hooson massiv
// console.log(too);
// massiv dotorh utguud ruu indexeer ni handana.
too[0]; // 1 gsn element garch irne.
// massiv dotor heden element bgaag ilerhiilne.
too.length;
// massiviin suulchiin elementiig awah.
too[too.length - 1];
// array-tai ajilladag functionuud.
// push("nemeh zuil") - хамгийн сүүлд элемент нэмж өгнө.
// pop() - хамгийн сүүлийн элементийг устгах.
// shift() - хамгийн эхний элементийг устгах.
// unshift(44) - хамгийн эхэнд элемент нэмэх.
// splice() - тодорхой хэсгийг устгах. // cut
// slice() - тодорхой хэсгийг тасдаж авна. // copy
// reverse() - өгөгдлүүдийн байрлалыг урвуу болгоно.
// join("юу залгаж нийлүүлэх") - массивын элементүүдийг хооронд нь стринг болгон нийлүүлнэ.
// split("хаагуур салгах") - стринг өгөгдлийг салгаж массив болгоно;
// arr.concat(залгах массив); - 2 массивыг хооронд нь залгаад шинэ массив үүсгэнэ.
// massivaar dawtalt hiij uzeh.
// for (var i = 0; i < too.length; i++) {
//   console.log(too[i]);
// }
// функц ашиглан бодно.
/* Өгөгдсөн массив дотроос 5-д хуваагддаг тоонуудын нийлбэрийг олж буцаа */
function ex1(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 5 === 0) {
      sum += arr[i];
    }
  }
  return sum;
}
// console.log(ex1([1, 2, 15, 5, 10]));

/* Өгөгдсөн массивын эхний болон сүүлийн элемент тэнцүү бол true, үгүй бол false буцаа */
function ex2(arr) {
  if (arr[0] === arr[arr.length - 1]) {
    return true;
  } else {
    return false;
  }
}
// console.log(ex2(["aa", 2, "aa"]));
// console.log(ex2([6, 4, 3]));

/* Гараас стринг өгөгдсөн бол тэгш индекс дээрх тэмдэгтүүдийг хэвлэх функц бич. */
function ex3(str) {
  for (var i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      console.log(str[i]);
    }
  }
}
ex3("asdfg");

/* Дан boolean утгууд агуулсан массив өгөгдсөн бол, дотор нь нийт хэдэн ширхэг true утга байгааг олж буцаа. */
function ex4(arr) {}
ex4([true, false, false, true, true]);

/* Массив өгөдсөн бол element тус бүрийг харгалзах indexeer нь үржүүлж үржвэрүүдийн нийлбэрийг буцаа. */

/* Массив дотор number болон string төрлийн тоонууд өгөгджээ. Зөвхөн number төрлийн тоонуудын нийлбэрийг олж буцаа. */

// Gert:
/* Массиваас element устгадаг функц бич. */

/* Өгөгдсөн массив дотор сондгой element болгон сондгой index агуулж, тэгш index болгон тэгш утга агуулж байвал тухайн massiv нь онцгой массив болно. Хэрэв онцгой массив таарвал true эсрэг тохиолдолд false утга буцаа.
[4, 5, 2, 9, 2]; ==> онцгой массив */

/* String төрлийн тоо өгөгджээ. Бүх тэгш цифрүүдийн нийлбэрийг сондгой цифрүүдийн нийлбэртэй харьцуулж тэгш цифрүүдийн нийлбэр их бол тэгш цифрүүдийн нийлбэр их байна харин сондгой цифрүүдийн нийлбэр нь их байвал сондгой цифрүүдийн нийлбэр нь их хэрвээ тэнцүү байвал цифрүүдийн нийлбэр тэнцүү байна гэсэн утга буцаа.
string төрлийн тоо ==> "1258" */
