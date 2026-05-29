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
btnCrear.addEventListener("click", function(){
    if(
        inputTitulo.value !== "" &&
        inputDescripcion.value !== "" &&
        inputFecha.value !== "" &&
        inputHora.value !== "" &&
        selectPrioridad.value !== "Ninguna prioridad..." &&
        selectCategoria.value !== "Ninguna categoria..." &&
        selectEstado.value !== "Ningun estado..."
    ){
        let lista =
            JSON.parse(localStorage.getItem("recordatorios")) || [];
        let nuevo = {
            titulo: inputTitulo.value,
            descripcion: inputDescripcion.value,
            fecha: inputFecha.value,
            hora: inputHora.value,
            prioridad: selectPrioridad.value,
            categoria: selectCategoria.value,
            estado: selectEstado.value
        };
        lista.push(nuevo);
        localStorage.setItem(
            "recordatorios",
            JSON.stringify(lista)
        );
        alert("Recordatorio creado correctamente");
        mostrarTarjetas();
    } else {
        alert("No ha creado ningún recordatorio");
    }
});
//-------------------------------------------//
//--|funcionalidad_contador_en_recordarios|--//
//-------------------------------------------//
const totalRecordatorios =
    document.getElementById(
        "total_recordatorios"
    )
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
function actualizarContadores(){
    let lista =
        JSON.parse(localStorage.getItem("recordatorios")) || [];
    totalRecordatorios.textContent =
        lista.length;
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
    let lista =
        JSON.parse(localStorage.getItem("recordatorios")) || [];
    contenedorTarjetaRecordatorio.innerHTML = "";
    lista.forEach((item, index) => {
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
                <p><strong>Fecha:</strong> ${item.fecha}</p>
                <p><strong>Hora:</strong> ${item.hora}</p>
                <p><strong>Prioridad:</strong> ${item.prioridad}</p>
                <p><strong>Categoria:</strong> ${item.categoria}</p>
                <p><strong>Estado:</strong> ${item.estado}</p>
            </div>
            <div class="tarjeta_botones">
                <button
                    class="btn_editar"
                    onclick="editarTarjeta(${index})"
                >
                    Editar
                </button>
                <button
                    class="btn_eliminar"
                    onclick="eliminarTarjeta(${index})"
                >
                    Eliminar
                </button>
            </div>
        </div>
        `;
    });
    actualizarContadores();
}
//----------------------------//
//--|boton_eliminar_tarjeta|--//
//----------------------------//
function eliminarTarjeta(index){
    let lista =
        JSON.parse(localStorage.getItem("recordatorios")) || [];
    lista.splice(index, 1);
    localStorage.setItem(
        "recordatorios",
        JSON.stringify(lista)
    );
    mostrarTarjetas();
}
//--------------------------//
//--|boton_editar_tarjeta|--//
//--------------------------//
function editarTarjeta(index){
    let lista =
        JSON.parse(localStorage.getItem("recordatorios")) || [];
    let tarjeta = lista[index];
    let nuevoTitulo =
        prompt(
            "Editar titulo:",
            tarjeta.titulo
        );
    let nuevaDescripcion =
        prompt(
            "Editar descripcion:",
            tarjeta.descripcion
        );
    let nuevaFecha =
        prompt(
            "Editar fecha:",
            tarjeta.fecha
        );
    let nuevaHora =
        prompt(
            "Editar hora:",
            tarjeta.hora
        );
    let nuevaPrioridad =
        prompt(
            "Editar prioridad:",
            tarjeta.prioridad
        );
    let nuevaCategoria =
        prompt(
            "Editar categoria:",
            tarjeta.categoria
        );
    let nuevoEstado =
        prompt(
            "Editar estado:",
            tarjeta.estado
        );
    lista[index] = {
        titulo: nuevoTitulo,
        descripcion: nuevaDescripcion,
        fecha: nuevaFecha,
        hora: nuevaHora,
        prioridad: nuevaPrioridad,
        categoria: nuevaCategoria,
        estado: nuevoEstado
    };
    localStorage.setItem(
        "recordatorios",
        JSON.stringify(lista)
    );
    mostrarTarjetas();
}
window.addEventListener("load", function(){
    mostrarTarjetas();
});