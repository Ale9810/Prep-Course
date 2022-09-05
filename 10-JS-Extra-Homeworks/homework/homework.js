// No cambies los nombres de las funciones.

const { join } = require("@11ty/eleventy/src/TemplatePath");

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var arreglo=[];
  for(i in objeto){
    arreglo.push([i , objeto[i]]);
  }
  return arreglo;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  obj={};
  for(i=0;i<string.length;i++){
    if(Object.keys(obj).includes(string[i])){
      obj[string[i]]= obj[string[i]]+1;
      continue;
    }
    obj[string[i]]=1;
  }
  return obj;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var stringMayus="";
  var stringMin="";
  for(var i=0 ; i<s.length ; i++){
    if(s[i]===s[i].toUpperCase()){
      stringMayus+=s[i];
    }
    else{
      stringMin+=s[i];
    }
  }
  return stringMayus.concat(stringMin);
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var frase=str.split(' ').map(function(elemento){
    return elemento.split('').reverse().join('');//map recive la frase eliminando los espacios con el primer split(' ') ejem [The,Henry,Challenge,is,Close], luego comienza la iteracio con el map() y retorna cada letra con el split(''),[T,h,e,H,e,n...], invierte cada letra con el reverse()y vuelve a juntar cada letra con join(''),nota: al join('')sin espacio junta cada lugar que no tenga espacio en una frase o elemento.         
  }).join(' ');
  return frase;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var numeroLetra=numero.toString();
  var capicua='';
  capicua=numeroLetra.split('').reverse().join('');// split('') separa la frase o palabra por cada letra, invierte toda la cadena con reverse() y con join() la vuelve a unir en una sola frase/elemento 
  if(capicua===numeroLetra){
    return 'Es capicua';
  }
  else{
    return 'No es capicua';
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var nuevoCadena=cadena.split('').map(function(elemento){
    if(elemento!=='a' && elemento !=='b' && elemento !=='c'){
      return nuevoCadena=elemento; 
    };
  }).join(' ');
  return nuevoCadena;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  for(var i=0; i<arr.length; i++){
    for(var j=i+1;j<arr.length;j++){ 
        if(arr[i].length>arr[j].length){
            var aux=arr[i];
            arr[i]=arr[j];
            arr[j]=aux;
        }
    }
  }
  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var arrayExtenso=[];

  for(var i in arreglo2){
    if(arreglo2.includes(arreglo1[i])){
      arrayExtenso.push(arreglo1[i]);
    }
  }
  return arrayExtenso;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

