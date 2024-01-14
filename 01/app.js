// Dada una cadena de texto, comprobar si es palindromo o no.
// no usar funciones de javascript solo structuras de control  

let cadena = prompt("ingrese una cadena de texto");

function palindromo(cadena){
  //  let cadenaDividida= cadena.split(''); ----se cambia a estructura de control------
   
  let cadenaDividida = [];
   for (let i = 0; i < cadena.length; i++) {
     cadenaDividida.push(cadena[i]);
   }

   let cadenaInvertida = [];
   
   for (let i = cadenaDividida.length; i > 0; i--) {
      cadenaInvertida.push(cadenaDividida[i -1]);
   }

  //  cadenaInvertida = cadenaInvertida.join('');  ----se cambia a estructura de control-----
   let cadenaInvertidaF = "";
   for (let i = 0; i < cadenaInvertida.length; i++) {
      cadenaInvertidaF += cadenaInvertida[i]; 
   }

   let respuesta = cadena == cadenaInvertidaF ? "es palindromo" : "no es palindromo" ;

  console.log(`la cadena ${cadena} ${respuesta}`);
}

palindromo(cadena);
