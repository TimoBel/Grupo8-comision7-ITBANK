let total = 0;
let contador = 0;

function agregarGasto(){

    let nombre = $("#nombre").val();
    let monto = $("#monto").val();
    
    let prueba = parseInt(monto, 10);
    
    total += prueba;


    const boxResultado = document.getElementById("resultado");

    if (boxResultado.textContent.toLowerCase().includes(nombre.toLowerCase()) == false) {
        contador++;
    }

    let textoAMostrar = `<p> ${nombre}: $${monto} </p>`;
    let totalAMostrar = `Total: ${total}, a cada uno le toca pagar ${total/contador}`;


    $("#resultado").append(textoAMostrar);
    $("#total").text(totalAMostrar);

}
