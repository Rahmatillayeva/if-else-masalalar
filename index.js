// 1 - Masala


// let a = prompt("Summani so'mda kiriting!");
// const AQShDollari = 10896.61,
//   yevro = 12247.79,
//   ticketPrice = 500 * AQShDollari,
//   hotelPrice = 250 * AQShDollari,
//   travel = 120 * yevro,
//   totalAmount = ticketPrice + hotelPrice + travel;

// console.log(`Borish-kelish samolyot bileti = ${ticketPrice} so'm`);
// console.log(`Mehmonxona to'lovi (to'liq safar davomiyligi uchun) = ${hotelPrice} so'm`);
// console.log(`Muzey va ko'ngilochar joylar uchun = ${travel} so'm`);
// if (a >= totalAmount) {
//   console.log("OQ YO'L!");
// }
// else {
//   console.log("Sizda sayohat uchun mablag' yetarli emas!");
// }





// 2 - Masala


// const MarkMassa = prompt("Enter the weight of the Mark!"),
//   MarkTall = prompt("Enter the height of the Mark!"),
//   JohnMassa = prompt("Enter the weight of the John!"),
//   JohnTall = prompt("Enter the height of the John!"),
//   BMI_M = MarkMassa / MarkTall ** 2,
//   BMI_J = JohnMassa / JohnTall ** 2,
//   markHigherBMI = true;


// console.log(`Mark BMI = ${BMI_M}`);
// console.log(`John BMI = ${BMI_J}`);
// if (BMI_M > BMI_J) {
//   console.log(`Mark's BMI is greater than John's = ${markHigherBMI}`);
// }
// else {
//   console.log(`Mark's BMI is not greater than John's = ${!markHigherBMI}`);
// }





// if - else masalalari
// 1 - Masala


// const a = prompt("Sonni kiriting!");
// if (a > 0) {
//   console.log(++a);
// }
// else if (a == 0) {
//   console.log("0 musbat son ham manfiy son ham emas!");
// } else {
//   console.log(a);
// }






// 2 - Masala


// const a = prompt("Sonni kiriting!");
// if (a > 0) {
//   console.log(++a);
// }
// else if (a == 0) {
//   console.log("0 musbat son ham manfiy son ham emas!");
// } else {
//   console.log(a - 2);
// }





// 3 - Masala


// const a = prompt("Sonni kiriting!");
// if (a > 0) {
//   console.log(++a);
// }
// else if (a == 0) {
//   console.log(10);
// } else {
//   console.log(a - 2);
// }





// 4 - Masala


// const a = prompt('a = '),
//   b = prompt('b = '),
//   c = prompt('c = ');
// let count = 0;

// if (a > 0) {
//   count++;
// }
// else if (b > 0) {
//   count++;
// }
// else if (c > 0) {
//   count++;
// }
// else {
//   console.log("Musbat son mavjud emas!");
// }

// console.log("3 ta butun sondan " + count + " tasi musbat son ekan.");


// xato ishlayapti, countda faqat 1 qo'shib qo'yayapti xalos, keyingi bosqichda hisobga olmayapti





// 5 - Masala

// 4-masala bilan bir xil faqat manfiy sonlari nechtaligini ham chiqarishi kerak.






// 6 - Masala


// const a = prompt('a = '),
//   b = prompt('b = ');

// if (a > b) {
//   console.log(`Kattasi a = ${a}`);
// } else {
//   console.log(`Kattasi b = ${b}`);
// }





// 7 - Masala


// const a = prompt('a = '),
//   b = prompt('b = ');

// if (a < b) {
//   console.log(`Kichigi a = ${a} va u birinchi tartib raqamli`);
// } else {
//   console.log(`Kichigi b = ${b} va u ikkinchi tartib raqamli`);
// }





// 8 - Masala


// const a = prompt('a = '),
//   b = prompt('b = ');

// if (a > b) {
//   console.log(`Kattasi a = ${a}`);
//   console.log(`Kichigi a = ${b}`);
// } else {
//   console.log(`Kattasi b = ${b}`);
//   console.log(`Kichigi a = ${a}`);
// }




// 9 - Masala


// const a = prompt("A = "),
// b = prompt("B = ");

// if (a < b) {
// console.log(`Kattasi B = ${b}`);
// console.log(`Kichigi A = ${a}`);
// } else {
//   console.log(`Kattasi B = ${a}`);
// console.log(`Kichigi A = ${b}`);
// }




// 10 - Masala


// const a = +prompt("A = "),
// b = +prompt("B = ");

// if (a != b) {
//   console.log(`A = ${a + b}`);
//   console.log(`B = ${a + b}`);
// } else {
//   console.log(`A = 0`);
//   console.log(`B = 0`);
// }




// 11 - Masala


// const a = +prompt("A = "),
//  b = +prompt("B = ");

//  if (a != b) {
//   if (a > b) {
//     console.log(`A = ${a}`);
//     console.log(`B = ${a}`);
//   } else {
//     console.log(`A = ${b}`);
//     console.log(`B = ${b}`);
//   }

//   } else {
//     console.log(`A = 0`);
//     console.log(`B = 0`);
//   }




// 12 - Masala


const a = prompt("a = "),
b = prompt("b = "),
c = prompt("c = ");

function max(x, y) {
if (x > y) {
  console.log(`Kattasi = ${x}`);
} else {
  console.log(`Kattasi = ${y}`);
}
}

console.log(max(max(a, b), c));

// funksiya bilan qilmoqchi bo'ldim ammo kamchiligi bor natijani to'g'ri chiqazmadi.