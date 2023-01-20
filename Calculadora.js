const funcionNumeros = () => {
  x = document.getElementById("num1").value;  
  y = document.getElementById("num2").value;  
}
const myFunctionSuma = () =>  { 
  funcionNumeros();
   if (isNaN(x) || isNaN(y)) {  
     resultado = "Es necesarios introducir dos números válidos";  
   } else {    
     suma=parseFloat(x)+parseFloat(y);  
     resultado = suma;
   }  
   document.getElementById("resultado").value=resultado; 
}
 //Resta
const myFunctionResta = () => {     
    if (isNaN(x) || isNaN(y)) {  
      resultado = "Es necesarios introducir dos números válidos";  
    } else {    
      resta=parseFloat(x)-parseFloat(y);  
      resultado= resta;  
    }  
    document.getElementById("resultado").value=resultado; 
  }  
  //Multiplicacion
  const myFunctionMultiplicacion = () => {   
    if (isNaN(x) || isNaN(y)) {  
      resultado = "Es necesarios introducir dos números válidos";  
    } else {    
      multiplicacion=parseFloat(x)*parseFloat(y);  
      resultado= multiplicacion;  
    }  
    document.getElementById("resultado").value=resultado; 
  }  
  //Division
   const myFunctionDivision = () => {    
    if (isNaN(x) || isNaN(y)) {  
      resultado = "Es necesarios introducir dos números válidos";  
    } else {    
      division=parseFloat(x)/parseFloat(y);  
      resultado= division;  
    }  
    document.getElementById("resultado").value=resultado; 
  }  
