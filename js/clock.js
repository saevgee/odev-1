let Adim =
  document.getElementById("myName"); /* DOM elemanı JS değeri olarak aldım */
let Saatim =
  document.getElementById("myClock"); /* DOM elemanı JS değeri olarak aldım */
let UserInput = prompt("Lütfen adınızı yazınız.");
if (UserInput) {
  Adim.innerHTML = UserInput;
} else {
  Adim.innerHTML = `İsimsiz`;
}
zamanGoster();
function zamanGoster() {
  let zaman = new Date();
  function sifirEkle(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  let gun = zaman.getDay();
  let sa = zaman.getHours();
  let dk = sifirEkle(zaman.getMinutes());
  let sn = sifirEkle(zaman.getSeconds());
  if (sa >= 12) {
    sa = sa % 12;
    sa = sa ? sa : 12; /* 0'dan büyükse aynını yaz değilse 12 yaz! */
    gg = `pm`;
  } else {
    sa = sa % 12;
    gg = `am`;
  }

  sa = sa < 10 ? "0" + sa : sa;

  switch (gun) {
    case 0:
      gun = "Pazar";
      break;
    case 1:
      gun = `Pazartesi`;
      break;
    case 2:
      gun = `Salı`;
      break;
    case 3:
      gun = `Çarşamba`;
      break;
    case 4:
      gun = `Perşembe`;
      break;
    case 5:
      gun = "Cuma";
      break;
    case 6:
      gun = `Cumartesi`;
  }
  let time = sa + ":" + dk + ":" + sn + " " + gg + " " + gun;
  Saatim.innerHTML = time;
}
setInterval(zamanGoster, 1000);
