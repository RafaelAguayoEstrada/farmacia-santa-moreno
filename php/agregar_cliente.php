<?php
include 'conexion.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['nombre'];
    $apellidos = $_POST['apellidos'];
    $telefono = $_POST['telefono'];
    $correo = $_POST['correo'];
    $membresia = $_POST['membresia'];

    $sql = "INSERT INTO clientes (nombre, apellidos, telefono, correo, membresia) VALUES ('$nombre', '$apellidos', '$telefono', '$correo', '$membresia')";

    if ($conn->query($sql) === TRUE) {
        echo json_encode(["success" => true, "message" => "Cliente agregado correctamente"]);
    } else {
        echo json_encode(["success" => false, "message" => "Error: " . $sql . "<br>" . $conn->error]);
    }
}

$conn->close();
?>