// Le solicitaremos un valor al usuario

let ingresarNumero = parseInt (prompt ("Ingresar Numero"));

// Calcularemos el numero ingresado por el numero de repeticiones (i)

for (let i = 1; i <= 10; i++) {
    let resultado = ingresarNumero * i ;
    alert (ingresarNumero + " X " + i + " = " + resultado);
}