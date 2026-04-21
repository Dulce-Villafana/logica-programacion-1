let numero1=Number(prompt("Ingrese su primer número"))
let numero2=Number(prompt("Ingrese su segundo número"))
let numero3=Number(prompt("Ingrese su tercer número"))
if (numero1 == numero2 && numero2 == numero3) {
    console.log("Los tres números son iguales")
} else if (numero1 == numero2 && numero2 != numero3){
    console.log("Los número 1 y 2 son iguales")
} else if (numero1 == numero3 && numero3 != numero2){
    console.log("Los número 1 y 3 son iguales")
} else if (numero2 == numero3 && numero3 != numero1){
    console.log("Los número 2 y 3 son iguales")
} else {
    let mayor, medio, menor;
    if (num1 >= num2 && num1 >= num3) {
        mayor = num1;
        if (num2 >= num3) {
            medio = num2;
            menor = num3;
        } else {
            medio = num3;
            menor = num2;
        }
    } 
    else if (num2 >= num1 && num2 >= num3) {
        mayor = num2;
        if (num1 >= num3) {
            medio = num1;
            menor = num3;
        } else {
            medio = num3;
            menor = num1;
        }
    } 
    else {
        mayor = num3;
        if (num1 >= num2) {
            medio = num1;
            menor = num2;
        } else {
            medio = num2;
            menor = num1;
        }
    }
    console.log("De mayor a menor:");
    console.log(mayor + ", " + medio + ", " + menor);

    console.log("De menor a mayor:");
    console.log(menor + ", " + medio + ", " + mayor);
}
