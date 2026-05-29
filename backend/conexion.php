<?php
$servidor = "localhost";
$usuario = "root";
$contrasena = "";
$base_de_datos = "bloc_tarea_recordatorio";
$conexion = new mysqli(
    $servidor,
    $usuario,
    $contrasena,
    $base_de_datos
);
if($conexion->connect_error){
    die(
        "Error de conexion: " .
        $conexion->connect_error
    );
}
?>