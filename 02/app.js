// crea una funcion a la cual se le pase una array de numeros
// y un numero que sera el resultado de la suma de dos de los
// valores del array

// Ejemplos

// funcionX([ 3, 7, 8, 2], 10)  // [3, 7]  (ambos suman 10)

function funcionX(array, resultado) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] + array[j] === resultado) {
        console.log(array[i], array[j]);
        return array[i], array[j];
        break;
      }
    }
  }
}
funcionX([3, 7, 8, 2], 10);