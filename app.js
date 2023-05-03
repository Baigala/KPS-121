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
var mergejil = "togooch";
if (mergejil === "togooch" || mergejil === "jolooch") {
  console.log("ajild awna.");
}

/* Дасгал №3:
Гараас 2ш тоо өгөгдсөн ба, хэрэв тэдгээрийн үржвэр 1000-с их бол үржвэрийг хэвлэж, 1000-с бага бол нийлбэрийг хэвлэ. */

/* Дасгал №4:
Гурвалжны суурь болон өндөр өгөгдсөн бол тухайн гурвалжны талбайг ол.
томьёо: (суурь*өндөр)/2
*/

/* Дасгал №5:
Гараас тоо аваад тэгш, сондгой эсэхийг нь шалгадаг програм бич. */
