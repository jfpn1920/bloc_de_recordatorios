//-----------------------------------------//
//--|funcionalidad_bloc_de_recordatorios|--//
//-----------------------------------------//
const inputTitulo =
document.getElementById("input_titulo");
const inputDescripcion =
document.getElementById("input_descripcion");
const inputFecha =
document.getElementById("input_fecha");
const inputHora =
document.getElementById("input_hora");
const selectPrioridad =
document.getElementById("select_prioridad");
const selectCategoria =
document.getElementById("select_categoria");
const selectEstado =
document.getElementById("select_estado");
const btnCrear =
document.getElementById("btn_crear");
btnCrear.addEventListener(
"click",
function(){
    if(
        inputTitulo.value !== "" &&
        inputDescripcion.value !== "" &&
        inputFecha.value !== "" &&
        inputHora.value !== "" &&
        selectPrioridad.value !== "Ninguna prioridad..." &&
        selectCategoria.value !== "Ninguna categoria..." &&
        selectEstado.value !== "Ningun estado..."
    ){
        let datos =
            new FormData();
        datos.append(
            "accion",
            "crear"
        );
        datos.append(
            "titulo",
            inputTitulo.value
        );
        datos.append(
            "descripcion",
            inputDescripcion.value
        );
        datos.append(
            "fecha",
            inputFecha.value
        );
        datos.append(
            "hora",
            inputHora.value
        );
        datos.append(
            "prioridad",
            selectPrioridad.value
        );
        datos.append(
            "categoria",
            selectCategoria.value
        );
        datos.append(
            "estado",
            selectEstado.value
        );
        fetch(
            "bloc_de_recordatorios.php",
            {
                method: "POST",
                body: datos
            }
        )
        .then(
            respuesta =>
            respuesta.json()
        )
        .then(
            data => {
                alert(
                    data.mensaje
                );
                mostrarTarjetas();
            }
        );
    }
    else {
        alert(
            "No ha creado ningún recordatorio"
        );
    }
}
);
//-------------------------------------------//
//--|funcionalidad_contador_en_recordarios|--//
//-------------------------------------------//
const totalRecordatorios =
document.getElementById(
"total_recordatorios"
);
const totalCompletados =
document.getElementById(
"total_completados"
);
const totalPendientes =
document.getElementById(
"total_pendientes"
);
const totalVencidos =
document.getElementById(
"total_vencidos"
);
const contenedorTarjetaRecordatorio =
document.getElementById(
"contenedor_tarjeta_recordatorio"
);
function actualizarContadores(lista){
//-------------------------//
//--|total_recordatorios|--//
//-------------------------//
totalRecordatorios.textContent =
    lista.length;
//-----------------------//
//--|total_completados|--//
//-----------------------//
let completados =
    lista.filter((item) => {
        let estado =
            item.estado
                ?.toLowerCase()
                .trim();
        return (
            estado === "completado" ||
            estado === "completados"
        );
    });
totalCompletados.textContent =
    completados.length;
//----------------------//
//--|total_pendientes|--//
//----------------------//
let pendientes =
    lista.filter((item) => {
        let estado =
            item.estado
                ?.toLowerCase()
                .trim();
        return (
            estado === "pendiente" ||
            estado === "pendientes"
        );
    });
totalPendientes.textContent =
    pendientes.length;
//--------------------//
//--|total_vencidos|--//
//--------------------//
let vencidos =
    lista.filter((item) => {
        let estado =
            item.estado
                ?.toLowerCase()
                .trim();
        return (
            estado === "vencido" ||
            estado === "vencidos"
        );
    });
totalVencidos.textContent =
    vencidos.length;
}
//---------------------------------------------------//
//--|funcionalidad_mostrar_dinamicamente_los_datos|--//
//---------------------------------------------------//
function mostrarTarjetas(){
fetch(
    "bloc_de_recordatorios.php"
)
.then(
    respuesta =>
    respuesta.json()
)
.then(
    lista => {
        contenedorTarjetaRecordatorio.innerHTML = "";
        lista.forEach((item) => {
            contenedorTarjetaRecordatorio.innerHTML +=
            `
            <div class="tarjeta_recordatorio">
                <div class="tarjeta_titulo">
                    <h2>${item.titulo}</h2>
                </div>
                <div class="tarjeta_descripcion">
                    <p>${item.descripcion}</p>
                </div>
                <div class="tarjeta_informacion">
                    <p>
                        <strong>Fecha:</strong>
                        ${item.fecha}
                    </p>
                    <p>
                        <strong>Hora:</strong>
                        ${item.hora}
                    </p>
                    <p>
                        <strong>Prioridad:</strong>
                        ${item.prioridad}
                    </p>
                    <p>
                        <strong>Categoria:</strong>
                        ${item.categoria}
                    </p>
                    <p>
                        <strong>Estado:</strong>
                        ${item.estado}
                    </p>
                </div>
                <div class="tarjeta_botones">
                    <button
                        class="btn_editar"
                        onclick="editarTarjeta(${item.id})"
                    >
                        Editar
                    </button>
                    <button
                        class="btn_eliminar"
                        onclick="eliminarTarjeta(${item.id})"
                    >
                        Eliminar
                    </button>
                </div>
            </div>
            `;
        });
        actualizarContadores(
            lista
        );
    }
);
}
//----------------------------//
//--|boton_eliminar_tarjeta|--//
//----------------------------//
function eliminarTarjeta(id){
let datos =
    new FormData();
datos.append(
    "accion",
    "eliminar"
);
datos.append(
    "id",
    id
);
fetch(
    "bloc_de_recordatorios.php",
    {
        method: "POST",
        body: datos
    }
)
.then(
    respuesta =>
    respuesta.json()
)
.then(
    data => {
        alert(
            data.mensaje
        );
        mostrarTarjetas();
    }
);
}
//--------------------------//
//--|boton_editar_tarjeta|--//
//--------------------------//
function editarTarjeta(id){
let nuevoTitulo =
    prompt(
        "Editar titulo:"
    );
let nuevaDescripcion =
    prompt(
        "Editar descripcion:"
    );
let nuevaFecha =
    prompt(
        "Editar fecha:"
    );
let nuevaHora =
    prompt(
        "Editar hora:"
    );
let nuevaPrioridad =
    prompt(
        "Editar prioridad:"
    );
let nuevaCategoria =
    prompt(
        "Editar categoria:"
    );
let nuevoEstado =
    prompt(
        "Editar estado:"
    );
let datos =
    new FormData();
datos.append(
    "accion",
    "editar"
);
datos.append(
    "id",
    id
);
datos.append(
    "titulo",
    nuevoTitulo
);
datos.append(
    "descripcion",
    nuevaDescripcion
);
datos.append(
    "fecha",
    nuevaFecha
);
datos.append(
    "hora",
    nuevaHora
);
datos.append(
    "prioridad",
    nuevaPrioridad
);
datos.append(
    "categoria",
    nuevaCategoria
);
datos.append(
    "estado",
    nuevoEstado
);
fetch(
    "bloc_de_recordatorios.php",
    {
        method: "POST",
        body: datos
    }
)
.then(
    respuesta =>
    respuesta.json()
)
.then(
    data => {
        alert(
            data.mensaje
        );
        mostrarTarjetas();
    }
);
}
window.addEventListener(
"load",
function(){
    mostrarTarjetas();
}
);