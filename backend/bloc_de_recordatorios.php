<?php
include("conexion.php");
header("Content-Type: application/json");
if($_SERVER["REQUEST_METHOD"] == "POST"){
    $accion =
        $_POST["accion"];
    //------------------------//
    //--|crear_recordatorio|--//
    //------------------------//
    if($accion == "crear"){
        $titulo =
            $_POST["titulo"];
        $descripcion =
            $_POST["descripcion"];
        $fecha =
            $_POST["fecha"];
        $hora =
            $_POST["hora"];
        $prioridad =
            $_POST["prioridad"];
        $categoria =
            $_POST["categoria"];
        $estado =
            $_POST["estado"];
        $sql =
            "INSERT INTO bloc_recordatorio
            (
                titulo,
                descripcion,
                fecha,
                hora,
                prioridad,
                categoria,
                estado
            )
            VALUES
            (
                '$titulo',
                '$descripcion',
                '$fecha',
                '$hora',
                '$prioridad',
                '$categoria',
                '$estado'
            )";
        if($conexion->query($sql)){
            echo json_encode([
                "estado" => "ok",
                "mensaje" =>
                "Recordatorio creado correctamente"
            ]);
        }
        else {
            echo json_encode([
                "estado" => "error",
                "mensaje" =>
                "No se pudo crear el recordatorio"
            ]);
        }
    }
    //-------------------------//
    //--|editar_recordatorio|--//
    //-------------------------//
    if($accion == "editar"){
        $id =
            $_POST["id"];
        $titulo =
            $_POST["titulo"];
        $descripcion =
            $_POST["descripcion"];
        $fecha =
            $_POST["fecha"];
        $hora =
            $_POST["hora"];
        $prioridad =
            $_POST["prioridad"];
        $categoria =
            $_POST["categoria"];
        $estado =
            $_POST["estado"];
        $sql =
            "UPDATE bloc_recordatorio
            SET
                titulo='$titulo',
                descripcion='$descripcion',
                fecha='$fecha',
                hora='$hora',
                prioridad='$prioridad',
                categoria='$categoria',
                estado='$estado'
            WHERE id='$id'";
        if($conexion->query($sql)){
            echo json_encode([
                "estado" => "ok",
                "mensaje" =>
                "Recordatorio editado correctamente"
            ]);
        }
        else {
            echo json_encode([
                "estado" => "error",
                "mensaje" =>
                "No se pudo editar"
            ]);
        }
    }
    //---------------------------//
    //--|eliminar_recordatorio|--//
    //---------------------------//
    if($accion == "eliminar"){
        $id =
            $_POST["id"];
        $sql =
            "DELETE FROM bloc_recordatorio
            WHERE id='$id'";
        if($conexion->query($sql)){
            echo json_encode([
                "estado" => "ok",
                "mensaje" =>
                "Recordatorio eliminado correctamente"
            ]);
        }
        else {
            echo json_encode([
                "estado" => "error",
                "mensaje" =>
                "No se pudo eliminar"
            ]);
        }
    }
}
if($_SERVER["REQUEST_METHOD"] == "GET"){
    $sql =
        "SELECT * FROM bloc_recordatorio
        ORDER BY id DESC";
    $resultado =
        $conexion->query($sql);
    $datos = [];
    while(
        $fila =
        $resultado->fetch_assoc()
    ){
        $datos[] = $fila;
    }
    echo json_encode($datos);
}
?>