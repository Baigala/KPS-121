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
//   if (i % 2 === 0) {
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
//   console.log(ner + " hicel zaadag.");
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
var too = [1, 2, 3, true, "bla", "aa"];
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
console.log(ex1([1, 10]));
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
function ex4(arr) {
  var countTrue = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === true) {
      countTrue++;
    }
  }
  return countTrue;
}
console.log(ex4([true, true, true, true, true]));

/* Массив өгөдсөн бол element тус бүрийг харгалзах indexeer нь үржүүлж үржвэрүүдийн нийлбэрийг буцаа. */
function ex5(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += i * arr[i];
  }
  return sum;
}
console.log(ex5([2, 3, 4, 2]));

// Gert:
/* Массив дотор number болон string төрлийн тоонууд өгөгджээ. Зөвхөн number төрлийн тоонуудын нийлбэрийг олж буцаа. */
// [1, "1", 3, "4"]
function ex6(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "number") {
      sum += arr[i];
    }
  }
  return sum;
}
console.log(ex6([2, 4, 4, "6"]));

/* Массиваас element устгадаг функц бич. */
function ex7(arr, ustgahElement) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === ustgahElement) {
      arr.splice(i, 1);
    }
  }
  return arr;
}
console.log(ex7([1, 2, 3, 4, "aa"], "aa"));
/* String төрлийн тоо өгөгджээ. Бүх тэгш цифрүүдийн нийлбэрийг сондгой цифрүүдийн нийлбэртэй харьцуулж тэгш цифрүүдийн нийлбэр их бол тэгш цифрүүдийн нийлбэр их байна харин сондгой цифрүүдийн нийлбэр нь их байвал сондгой цифрүүдийн нийлбэр нь их хэрвээ тэнцүү байвал цифрүүдийн нийлбэр тэнцүү байна гэсэн утга буцаа.
string төрлийн тоо ==> "1258" */
function ex8(str) {
  var tegshNiilber = 0;
  var sondgoiNiilber = 0;
  var hariu = "";
  for (var i = 0; i < str.length; i++) {
    if (str[i] % 2 === 0) {
      tegshNiilber += +str[i];
    } else {
      sondgoiNiilber += +str[i];
    }
  }
  if (tegshNiilber > sondgoiNiilber) {
    hariu = "tegsh tsifruudiin niilber ih";
  } else if (sondgoiNiilber > tegshNiilber) {
    hariu = "sondgoi niilber ih";
  } else {
    hariu = "tentsuu.";
  }
  return hariu;
}
console.log(ex8("3234"));

/* Өгөгдсөн массив дотор сондгой element болгон сондгой index агуулж, тэгш index болгон тэгш утга агуулж байвал тухайн massiv нь онцгой массив болно. Хэрэв онцгой массив таарвал true эсрэг тохиолдолд false утга буцаа.
[4, 5, 2, 9, 2]; ==> онцгой массив */
function ex9(arr) {
  var ontsgoiElement = 0;
  var bool;
  for (var i = 0; i < arr.length; i++) {
    if (
      (i % 2 === 0 && arr[i] % 2 === 0) ||
      (i % 2 === 1 && arr[i] % 2 === 1)
    ) {
      ontsgoiElement++;
    }
  }
  if (ontsgoiElement === arr.length) {
    bool = true;
  } else {
    bool = false;
  }
  return bool;
}
console.log(ex9([1, 5, 2, 9, 2]));
/* Гараас стринг өгөгдсөн бол сондгой индекс дээрх тэмдэгтүүдийг хэвлэх функц бич. */

/* Massiv дотор хамгийн сүүлийн element-ээс бусад бүх утгуудыг нэгтгэж, хамгийн сүүлийн element-тэй таарж байгаа эсэхийг тооцож boolean утга буцаа.*/
function ex11(arr) {
  var sum = "";
  for (var i = 0; i < arr.length - 1; i++) {
    sum += arr[i];
  }
  if (sum === arr[arr.length - 1]) {
    return true;
  } else {
    return false;
  }
}
console.log(ex11(["a", "s", "d", "asd"]));
/* Гараас стринг болон индекс өгөгдсөн бол, стринг дотроос өгөгдсөн индекс хүртэлх тэмдэгтүүдийг устгаж, үлдсэн стрингийг буцаах функц бич */
function ex12(str, index) {
  var ustgahStr = "";
  var uldsenStr = "";
  for (var i = 0; i <= index; i++) {
    ustgahStr += str[i];
  }
  uldsenStr = str.replace(ustgahStr, "");
  return uldsenStr;
}
console.log(ex12("asdf", 2));
/* 2 ширхэг массив өгөгдсөн бол эхний массиваас зөвхөн сондгой, 2 дахь массиваас зөвхөн тэгш утгуудыг агуулсан шинэ массив үүсгэж буцаа. */
function ex13(arr1, arr2) {
  var newArray = [];
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] % 2 === 1) {
      newArray.push(arr1[i]);
    }
  }
  for (var i = 0; i < arr2.length; i++) {
    if (arr2[i] % 2 === 0) {
      newArray.push(arr2[i]);
    }
  }
  return newArray;
}
console.log(ex13([1, 2, 3, 4], [1, 2, 3, 4]));
/* Өгөгдсөн тоог палиндром эсэхийг шалгах функц бич */
function ex14(num) {
  var hariu = false;
  var numString = num.toString();
  if (num === +numString.split("").reverse().join("")) {
    hariu = true;
  }
  return hariu;
}
console.log(ex14(121));

/* oбьект - object */
// primitive, non-primitive - massiv, object
// { } - block haalt
// number, string, function, object
var zoloo = {
  ner: "Zoljargal", // ner - property
  nas: 25,
  geriinHayg: {
    hot: "UB",
    duureg: "BGD",
  },
};
console.log("Minii ner bol " + zoloo.ner);

/* 1. Ner, dugaar, email 3-н property-tai student1, student2, student3 objectuud uusgeed massiv dotor hiine. Promptoos email awj ali neg objectiin emailtai taarj bhin bol tuhain emailtai objectiig consoled hewle.*/
/* 2. 99 || 95 dugaartai mobi hereglegcid baih yum bol mobiUsers massiv ruu hiine. */
var student1 = {
  ner: "a",
  dugaar: 99345565,
  email: "a@gmail.com",
};
var student2 = {
  ner: "b",
  dugaar: 95345565,
  email: "b@gmail.com",
};
var student3 = {
  ner: "c",
  dugaar: 88345565,
  email: "c@gmail.com",
};
var students = [student1, student2, student3];
var oldson = false;
var mobiUsers = [];
var promptEmail = prompt("email ee oruulna uu.");
if (promptEmail !== null) {
  for (var i = 0; i < students.length; i++) {
    var dugaar = students[i].dugaar.toString();
    if (promptEmail === students[i].email) {
      console.log(students[i]);
      oldson = true;
    }
    if (dugaar.slice(0, 2) == 99 || dugaar.slice(0, 2) == 95) {
      mobiUsers.push(students[i]);
    }
  }

  if (oldson === false) {
    console.log("iim emailtai hun bhku bna.");
  }
} else {
  console.log("email ee oruulna uu?");
}
console.log(mobiUsers);
