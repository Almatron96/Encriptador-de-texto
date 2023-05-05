/* La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" */

/* const a = "ai",
    e = "enter",
    i = "imes",
    o = "ober",
    u = "ufat";

let texto = "gato";

let textoConvertido = "";

 for (let letra of texto) {
    if (letra === "a") {
        textoConvertido += a;
    } else if (letra === "e") {
        textoConvertido += e;
    } else if (letra === "i") {
        textoConvertido += i;
    } else if (letra === "o") {
        textoConvertido += o;
    } else if (letra === "u") {
        textoConvertido += u;
    } else {
        textoConvertido += letra;
    }
} 
//console.log(textoConvertido);
  textoConvertido= textoConvertido.replace(/ai/gi, "a");
 textoConvertido= textoConvertido.replace(/enter/gi, "e"); 
 textoConvertido= textoConvertido.replace(/imes/gi, "i"); 
 textoConvertido= textoConvertido.replace(/ober/gi, "o"); 
 textoConvertido= textoConvertido.replace(/ufat/gi, "u");   // g para buscar de manera global y i para ignorar mayúsc. y minusc. */




const vocales = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat"
};

let textoConvertido = ""; // variable para almacenar el texto convertido a array 
let textArea = document.getElementById("texto"); // variable para almacenar el elemento textArea
function encriptar() {
     //obtengo el elemento "textarea" con id "texto"
    let texto = textArea.value;//obtengo el texto de mi textarea
    let arrayTexto = texto.split("");  //convierto mi texto en un array

    arrayTexto.map((letra) => {
        if (vocales.hasOwnProperty(letra)) { //para comprobar si mi array "vocales" tiene la propiedad que busco. 
            textoConvertido += vocales[letra];
        } else {
            textoConvertido += letra;
        }
    });
    textArea.value = textoConvertido;
    console.log(textoConvertido);
    textoConvertido = "";
    document.getElementById("msjEncriptado").textContent = "Mensaje Encriptado con éxito";
}

function desencriptar() {
textoConvertido = textArea.value.replace(
    /(ai|enter|imes|ober|ufat)/gi,
    (coincidencia) => {
        for (const vocal in vocales) {
            if (vocales[vocal] === coincidencia) {
                return vocal; // si coincide me retorna la vocal
            }
        }
        return coincidencia; // 
    }
);
textArea.value = textoConvertido;
console.log(textoConvertido);
textoConvertido = "";
document.getElementById("msjEncriptado").textContent = "Mensaje Desencriptado con éxito";
} 


document.getElementById("texto").addEventListener("input", () => {
    textArea.value = textArea.value.toLowerCase();
    if (textArea.value.length === 0) {
      document.getElementById("msjEncontrado").textContent = "¡Ningún mensaje fue encontrado!";
      document.getElementById("msjEncriptado").textContent = "Ingrese el texto que desea encriptar o desencriptar";
    } else {
        document.getElementById("msjEncontrado").textContent = "¡Mensaje fue encontrado!";
    }
  });

