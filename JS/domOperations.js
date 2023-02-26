//  функцій на клік формули площа квадрат
function showResultInDomKvadrat() {
  const a = document.getElementById("dlinaStoroniKvadrata").value;
  document.getElementById("ploschadKvadrata").innerHTML = getResult(a, a);
}

//  функцій на клік формули площі прямокутника
function showResultInDomPriamougolnika() {
  const a = document.getElementById("pervayaStoronaPriamougolnika").value;
  const b = document.getElementById("drugayaStoronaPriamougolnika").value;
  document.getElementById("ploschadPriamougolnika").innerHTML = getResult(a, b);
}

//  функцій на клік формули площі паралелограма
function showResultInDomParalelograma() {
  const a = document.getElementById("dlinaStoronyParalelograma").value;
  const b = document.getElementById("dlinaVisotyParalelograma").value;
  document.getElementById("ploschadParalelograma").innerHTML = getResult(a, b);
}

//  функцій на клік формули площі ромба
function showResultInDomRomba() {
  const a = document.getElementById("dlinaStoronyRomba").value;
  const b = document.getElementById("dlinaVisotyRomba").value;
  document.getElementById("ploschadRomba").innerHTML = getResult(a, b);
}
