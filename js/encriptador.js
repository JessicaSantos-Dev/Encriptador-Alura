function encriptar(traducao) {
  debugger;
  document.querySelector("#warning").removeAttribute("style");
  var textarea = document.querySelector("#texto");
  const texto = textarea.value;
  var area_default = document.querySelector("#default");
  var area_result = document.querySelector("#result");
  var texto_out = document.querySelector("#texto_out");
  if (texto != "") {
    var out = "";
    for (var i = 0; i < texto.length; i++) {
      if ((texto[i] < "a" || texto[i] > "z") && texto[i] != " ") {
        document.querySelector("#warning").style.color = "red";
        document.querySelector("#warning").style.fontSize = "16px";
        return;
      } else if (
        (texto.length == 1 && texto == " ") ||
        texto.replace(/ /g, "") == ""
      ) {
        area_default.classList.remove("invisible");
        area_result.classList.add("invisible");
        return;
      }
      if (texto[i] == "a") {
        out += traducao["a"];
      } else if (texto[i] == "e") {
        out += traducao["e"];
      } else if (texto[i] == "i") {
        out += traducao["i"];
      } else if (texto[i] == "o") {
        out += traducao["o"];
      } else if (texto[i] == "u") {
        out += traducao["u"];
      } else {
        out += texto[i];
      }
    }

    area_default.classList.add("invisible");
    area_result.classList.remove("invisible");
    texto_out.innerHTML = out;
  }

  return;
}

function desencriptar(traducao) {
  document.querySelector("#warning").removeAttribute("style");
  var textarea = document.querySelector("#texto");
  var texto = textarea.value;
  var area_default = document.querySelector("#default");
  var area_result = document.querySelector("#result");
  var texto_out = document.querySelector("#texto_out");
  if (texto != "") {
    for (var i = 0; i < texto.length; i++) {
      if ((texto[i] < "a" || texto[i] > "z") && texto[i] != " ") {
        document.querySelector("#warning").style.color = "red";
        document.querySelector("#warning").style.fontSize = "16px";
        return;
      } else if (
        (texto.length == 1 && texto == " ") ||
        texto.replace(/ /g, "") == ""
      ) {
        area_default.classList.remove("invisible");
        area_result.classList.add("invisible");
        return;
      }
    }
    area_default.classList.add("invisible");
    area_result.classList.remove("invisible");
    texto = texto.replace(new RegExp(traducao["a"], "g"), "a");
    texto = texto.replace(new RegExp(traducao["e"], "g"), "e");
    texto = texto.replace(new RegExp(traducao["i"], "g"), "i");
    texto = texto.replace(new RegExp(traducao["o"], "g"), "o");
    texto = texto.replace(new RegExp(traducao["u"], "g"), "u");
    texto_out.innerHTML = texto;
  }
  return;
}

function clipboard() {
  const texto_out = document.querySelector("#texto_out");
  navigator.clipboard.writeText(texto_out.value);
}

function cleanboard() {
  var textarea = document.querySelector("#texto");
  var texto_out = document.querySelector("#texto_out");
  textarea.value = "";
  texto_out.innerHTML = "";

  var area_default = document.querySelector("#default");
  var area_result = document.querySelector("#result");
  area_default.classList.remove("invisible");
  area_result.classList.add("invisible");
}

const enc = document.querySelector("#enc");
const des = document.querySelector("#des");
const copy = document.querySelector("#copiar");
const limpar = document.querySelector("#limpar");

var traducao = { a: "ai", e: "enter", i: "imes", o: "ober", u: "ufat" };

enc.addEventListener("click", function () {
  encriptar(traducao);
});
des.addEventListener("click", function () {
  desencriptar(traducao);
});
copy.addEventListener("click", function () {
  clipboard();
});
limpar.addEventListener("click", function () {
  cleanboard();
});
