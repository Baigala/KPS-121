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
var miniiTorsonOn = 1998;
var currentYear = 2024;
var nas = currentYear - miniiTorsonOn;
console.log(nas);

console.log(currentYear - 10);
console.log(currentYear * 2);
console.log(currentYear / 2);

/*Дасгал 2
Гараас радиус авж тухайн радиустай тойргийн урт, талбайг тус тусад нь ол..
urt = PiToo * 2 * r;
talbai = PiToo * r * r;
*/
var radius = +prompt("radiusaa oruulna uu?");
urt = Math.PI * 2 * radius;
talbai = Math.PI * radius * radius;
console.log(urt);
console.log(talbai);
