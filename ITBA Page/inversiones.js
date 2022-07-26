/*let contenido = $("#contenido");*/
let contenido = document.querySelector('#contenido')

window.onload = traer();

function traer(){
    fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
    .then(res => res.json())
    .then(datos => {
        tabla(datos)
    })
} 

function tabla(datos){
    contenido.innerHTML = ``
    for (let x of datos){
        contenido.innerHTML += `
        <tr>
            <th scope="row">${x.casa.nombre}</th>
            <td>$ ${x.casa.compra}</td>
            <td>$ ${x.casa.venta}</td>
        </tr>
        `
    }
}






