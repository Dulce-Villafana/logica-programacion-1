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
    if (numero1 >= numero2 && numero1 >= numero3) {
        mayor = numero1;
        if (numero2 >= numero3) {
            medio = numero2;
            menor = numero3;
        } else {
            medio = numero3;
            menor = numero2;
        }
    } 
    else if (numero2 >= numero1 && numero2 >= numero3) {
        mayor = numero2;
        if (numero1 >= numero3) {
            medio = numero1;
            menor = numero3;
        } else {
            medio = numero3;
            menor = numero1;
        }
    } 
    else {
        mayor = numero3;
        if (numero1 >= numero2) {
            medio = numero1;
            menor = numero2;
        } else {
            medio = numero2;
            menor = numero1;
        }
    }
    console.log("De mayor a menor:");
    console.log(mayor + ", " + medio + ", " + menor);

    console.log("De menor a mayor:");
    console.log(menor + ", " + medio + ", " + mayor);
}
