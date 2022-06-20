window.onload = traer;

function traer(){
    fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
    .then(res => res.json())
    .then(datos => {
        tabla(datos)
    })
} 

function tabla(datos){
    contenido.html(`
    <tr>
        <th scope="row">Compra</th>
        <td>${datos[0].casa.compra}</td>
        <td>${datos[0].casa.venta}</td>
    </tr>

    <tr>
        <th scope="row">Venta</th>
        <td>${datos[1].casa.compra}</td>
        <td>${datos[1].casa.venta}</td>
    </tr>
    `)
}

let contenido = $("#contenido");

