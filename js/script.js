
document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // paraliza envío formulario

    // console.log(event.target.elements);

    const nombre = event.target.nombre.value;
    const email = event.target.email.value;
    const comentario = event.target.comentario.value; // select
    const imagen = event.target.imagen.value;

    const emailPattern = /^[a-zA-Z0-9]{2,}@[a-zA-Z]{3,}\.(?:[a-zA-Z]{2,4})$/;

    // Comprobar si el correo electrónico cumple con el patrón
    if (emailPattern.test(email)) {
        console.log("Correo electrónico válido.");
        guardarDatos(event.target.elements);
        leerDatos();
    } else {
        console.log("Correo electrónico no válido.");
        return false;
    }
});

let arr_valores = [];

function guardarDatos(datos) {

    let miObjeto = {
        id: "_id_" + Date.now(),
        nombre: datos.nombre.value,
        email: datos.email.value,
        comentario: datos.comentario.value,
        imagen: datos.imagen.value,
    }


    arr_valores.push(miObjeto);

    console.log(arr_valores)

    localStorage.setItem(
        "user",
        JSON.stringify(arr_valores)
    );
}

function leerDatos() {

    let getUser = localStorage.getItem("user");
    var user = JSON.parse(getUser);

    pintarDatos(user);
}

function pintarDatos(usuario) {

    console.log(usuario.length)
    let container = document.querySelector(".container");
    container.innerHTML = "";

    for (let i = 0; i < usuario.length; i++) {

        let fichaID = usuario[i].id;

        container.innerHTML += `
        <div class="box box1" id="${fichaID}">
			<div>Usuario: ${usuario[i].nombre}</div>
			<div>Email: ${usuario[i].email}</div>
			<div>Comentario: ${usuario[i].comentario}</div>
            <div>Imagen: ${usuario[i].imagen}</div>
            <button onclick="eliminarFicha('${fichaID}')">Eliminar ficha</button>
		</div>
        `;
    }
}

function eliminarFicha(ficha) {

    let fichaBorrar = document.querySelector("#" + ficha)
    fichaBorrar.remove();


    let getUser = localStorage.getItem("user");
    var user = JSON.parse(getUser);
    console.log(user);

    for (let i = 0; i < arr.length; i++) {
        let elemento = arr.find(el => el.id === id);
        if (elemento) {
            return i; // Retorna el índice cuando encuentra el objeto
        }
    }
}

/* function encontrarIndicePorId(arr, id) {
    for (let i = 0; i < arr.length; i++) {
        let elemento = arr.find(el => el.id === id);
        if (elemento) {
            return i; // Retorna el índice cuando encuentra el objeto
        }
    }
    return -1; // Si no encuentra el objeto con el id dado
} */