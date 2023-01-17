//Suma
function myFunctionS(){  
   var x,y,suma,resultado;  
   x = document.getElementById("num1").value;  
   y = document.getElementById("num2").value;  
   if (isNaN(x) || isNaN(y)) {  
     resultado = "Es necesarios introducir dos números válidos";  
   } else {    
     suma=parseFloat(x)+parseFloat(y);  
     resultado = suma;
   }  
   document.getElementById("resultado").value=resultado;
   document.getElementById("sumando").innerHTML = text;  
}
 //Resta
 function myFunctionR() {  
    var x,y,resta,resultado;  
    x = document.getElementById("num1").value;  
    y = document.getElementById("num2").value;  
    if (isNaN(x) || isNaN(y)) {  
      resultado = "Es necesarios introducir dos números válidos";  
    } else {    
      resta=parseFloat(x)-parseFloat(y);  
      resultado= resta;  
    }  
    document.getElementById("resultado").value=resultado;
    document.getElementById("restando").innerHTML = text;  
  }  
  //Multiplicacion
  function myFunctionM() {  
    var x,y,multiplicacion,resultado;  
    x = document.getElementById("num1").value;  
    y = document.getElementById("num2").value;  
    if (isNaN(x) || isNaN(y)) {  
      resultado = "Es necesarios introducir dos números válidos";  
    } else {    
      multiplicacion=parseFloat(x)*parseFloat(y);  
      resultado= multiplicacion;  
    }  
    document.getElementById("resultado").value=resultado;
    document.getElementById("multiplicando").innerHTML = text;  
  }  
  //Division
  function myFunctionD() {  
    var x,y,division,resultado;  
    x = document.getElementById("num1").value;  
    y = document.getElementById("num2").value;  
    if (isNaN(x) || isNaN(y)) {  
      resultado = "Es necesarios introducir dos números válidos";  
    } else {    
      division=parseFloat(x)/parseFloat(y);  
      resultado= division;  
    }  
    document.getElementById("resultado").value=resultado;
    document.getElementById("dividiendo").innerHTML = text;  
  }  
