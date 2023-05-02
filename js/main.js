const encriptar = document.getElementById("encriptar");
const desencriptar = document.getElementById("desencriptar");
const copiar = document.getElementById("copiar");
const inputEncriptar = document.getElementById("inputEncriptar");
const textDefault = document.querySelector(".container-text-default");
const textResult = document.querySelector(".container-context-resultado");
const text = document.querySelector(".text-message-resultado");
const alert = document.querySelector(".alert-disabled");

encriptar.addEventListener("click", () => {
  let input = inputEncriptar.value;

  if (/([A-ZáéíóúÁÉÍÓÚñ\d$@$!%*?&])/gm.test(input)) {
    mostrarAlerta();
  } else if (input.length > 0) {
    const mapObj = {
      e: "enter",
      i: "imes",
      a: "ai",
      o: "ober",
      u: "ufat",
    };
    input = input.replace(/e|i|a|o|u/gm, (matched) => mapObj[matched]);

    quitarAlerta();
    mostrarResultado();
    text.textContent = input;
  }
});

desencriptar.addEventListener("click", () => {
  let input = inputEncriptar.value;

  if (/([A-ZáéíóúÁÉÍÓÚñ\d$@$!%*?&])/gm.test(input)) {
    mostrarAlerta();
  } else if (input.length > 0) {
    const mapObj = {
      enter: "e",
      imes: "i",
      ai: "a",
      ober: "o",
      ufat: "u",
    };
    input = input.replace(/enter|imes|ai|ober|ufat/gm, (matched) => mapObj[matched]);

    quitarAlerta();
    mostrarResultado();
    text.textContent = input;
  }
});

copiar.addEventListener("click", () => {
  const copiado = text.textContent;
  navigator.clipboard.writeText(copiado).then(() => {
    copiar.textContent = "Copiado ✅";
    copiar.classList.add("btn-copiado");
    setTimeout(() => {
      copiar.textContent = "Copiar";
      copiar.classList.remove("btn-copiado");
    }, 1000);
  });
});

const mostrarResultado = () => {
  textDefault.style.display = "none";
  textResult.style.display = "flex";
};

const quitarAlerta = () => {
  inputEncriptar.classList.remove("text-desencriptar-alert");
  alert.classList.remove("alert-actived");
};

const mostrarAlerta = () => {
  inputEncriptar.classList.add("text-desencriptar-alert");
  alert.classList.add("alert-actived");
};
