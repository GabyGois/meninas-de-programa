function soma (num1,num2){
   return num1+num2;
}
console.log (soma(6,7)) 

function areaQuadrado (lado) {
    return lado*lado;
}
console.log (areaQuadrado(54));
 
let num3 = parseInt(prompt('digite um numero'));
let num4 = parseInt(prompt('digite um numero'));
let num5 = parseInt(prompt('digite um numero'));

let calculoMedia = function (num3,num4,num5){
    return (num3+num4+num5)/3;
}
document.write (calculoMedia (num3,num4,num5));