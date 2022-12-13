function guardarDato() {
    const nombre = document.getElementById("nombre").value;
    const movil = document.getElementById("movil").value;
    const email = document.getElementById("email").value;
    const datos = {
        'movil': movil,
        'email': email,
    };

    localStorage.setItem(nombre, JSON.stringify(datos));
    document.getElementById("nombre").value = "";
    document.getElementById("movil").value = "";
    document.getElementById("email").value = "";
    actualizarDatos();
}

function recuperarDato() {
    const nombre = document.getElementById("nombre").value;
    let datos = localStorage.getItem(nombre);
    datos = JSON.parse(datos);
    document.getElementById("movil").value = datos.movil;
    document.getElementById("email").value = datos.email;
}

function eliminarDato() {
    const nombre = document.getElementById("nombre").value;
    localStorage.removeItem(nombre);
    actualizarDatos();
}

function eliminarTodo() {
    localStorage.clear();
    actualizarDatos();
}

function actualizarDatos() {
    let elementos = "";
    if (localStorage.length === 0) {
        elementos += '<div class="panel panel-default"><div class="panel-body">Vacío</div></div>';
    } else {
        for (let i = 0; i <= localStorage.length - 1; i++) {
            const key = localStorage.key(i);
            let datos = localStorage.getItem(key);
            datos = JSON.parse(datos);
            elementos += `<div class="panel panel-default">
                <div class="panel-body">
                <div class="col-xs-3">
                </div>
                <div class="col-xs-9">
                    <p><b>${key}</b></p>

                    <a href="tel:+34${datos.movil}"><p><span class="glyphicon glyphicon-phone" aria-hidden="true"></span> ${datos.movil}</p></a>
                    <a href="mailto:${datos.email}"><p><span class="glyphicon glyphicon-envelope" aria-hidden="true"></span> ${datos.email}</p></a>
                </div>
                </div>
            </div>`;
        }
    }
    document.getElementById('contactos').innerHTML = elementos;
}


actualizarDatos();