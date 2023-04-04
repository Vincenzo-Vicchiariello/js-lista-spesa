let listaDellaSpesa = ["Latte", "Uova", "Pane", "Farina", "Olio"]

let listaLength = listaDellaSpesa.length

listaLength = parseInt(listaLength);

console.log(listaLength)

/*for (i = 0; i < 1; i++) {
    listaDellaSpesa.forEach(element => {
        console.log(element)

    });
}
Funziona, ma non mi convince



/*listaDellaSpesa.forEach(element => {
    console.log(element)
});
Funziona anche senza il ciclo for

Funzionano sia il ciclo for che il ciclo while, ma userò il ciclo for per l'elenco puntato.

for (i = 0; i < listaLength; i++) {   
    console.log(listaDellaSpesa[i]);

}



i = 0;
while (i < listaDellaSpesa.length) {
    console.log(listaDellaSpesa[i]);
    i++;
}*/

for (i = 0; i < listaLength; i++) {
    console.log("• " + listaDellaSpesa[i]);

}

