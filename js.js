
const sumar = (num1,num2)=> {
    return parseInt (num1) + parseInt (num2);
}
const restar = (num1,num2)=> {
    return parseInt (num1) - parseInt (num2);
}
const dividir = (num1,num2)=> {
    return parseInt (num1) / parseInt (num2);
}
const multiplicar = (num1,num2)=> {
    return parseInt (num1) * parseInt (num2);
}
alert("1 suma, 2 resta ,3 dividir, 4 multiplciar");
let operacion = prompt ("1 suma, 2 resta ,3 dividir, 4 multiplciar");

if(operacion == 1) {
    let numero1 = prompt ("ingresa un numero");
    let numero2 = prompt("ingresa otro numero");
    resultado = sumar(numero1,numero2);
    alert(`tu resultado es ${resultado}`);
}
else if(operacion == 2) {
    let numero1 = prompt ("ingresa un numero");
    let numero2 = prompt("ingresa otro numero");
    resultado = restar(numero1,numero2);
    alert(`tu resultado es ${resultado}`);
}
else if(operacion == 3) {
    let numero1 = prompt ("ingresa un numero");
    let numero2 = prompt("ingresa otro numero");
    resultado = dividir(numero1,numero2);
    alert(`tu resultado es ${resultado}`);
}
else if(operacion == 4) {
    let numero1 = prompt ("ingresa un numero");
    let numero2 = prompt("ingresa otro numero");
    resultado = multiplicar(numero1,numero2);
    alert(`tu resultado es ${resultado}`);
}