//!harcadigin kadar kazan

// let miktar = +prompt("lutfen harcanan miktari giriniz");
// let bonusPuan;
// if (miktar % 10 === 0) {
//   console.log("puaniniz:" + miktar * 10);
// } else if (miktar % 5 === 0) {
//   console.log("puaniniz:" + miktar * 5);
// } else if (miktar % 4 === 0) {
//   console.log("puaniniz:" + miktar * 4);
// } else {
//   console.log("bonus kazanilamadi");
// }

//! Girilen nesneye göre atılması gereken çöp kutusunu belirten program

// let nesne = prompt("cop turu girin");
// let copTuru;
// switch (nesne) {
//   case "karton":
//     copTuru = "kagit copune gitsin";
//     break;
//   case "sise":
//     copTuru = "cam copune gitsin";
//     break;
//   case "ekmek":
//     copTuru = "gida copune gitsin";
//     break;

//   default: {
//     console.log("genel cope at");
//   }
// }
// console.log(copTuru);

// //!dart oyunu

// let r = Number(prompt("yaricapi giriniz:"));

// if (r > 10) {
//   alert("puaniniz: 0");
// } else if (5 < r && r <= 10) {
//   alert("puaniniz: 1");
// } else if (1 < r && r <= 5) {
//   alert("puaniniz: 5");
// } else {
//   r <= 1;
//   alert("puaniniz: 10");

//!Sevdiğiniz kitap türünü girnce ona göre önerilerde bulunan programı switch -case yapısı ile oluşturunuz

// let kitap = prompt("sevdiginiz kitap turunu giriniz:");
// let tavsiye;

// switch (kitap) {
//   case "roman":
//     tavsiye = "anna karenina";
//     break;
// }
// console.log("size tavsiyemiz:" + tavsiye);

//! Hava durumuna göre giyilmesi gereken kıyafet türünü veren program
let hDurumu = prompt("bugun hava nasil");

if (hDurumu === "gunesli") {
  console.log("ince kiyafetler tercih etmelisiniz");
} else if (hDurumu === "bulutlu") {
  console.log("yagmur yagabilir semsiye almalisiniz");
} else if (hDurumu === "yagmurlu") {
  console.log("yagmurluk giymelisiniz");
} else if (hDurumu === "karli") {
  console.log("kalin kiyafetler ve bot giymelisiniz");
}
