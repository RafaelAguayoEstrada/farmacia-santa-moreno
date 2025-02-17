<?php
include 'conexion.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['nombre'];
    $apellidos = $_POST['apellidos'];
    $puesto = $_POST['puesto'];
    $salario = $_POST['salario'];

    $sql = "INSERT INTO empleados (nombre, apellidos, puesto, salario) VALUES ('$nombre', '$apellidos', '$puesto', '$salario')";

    if ($conn->query($sql) === TRUE) {
        echo json_encode(["success" => true, "message" => "Empleado agregado correctamente"]);
    } else {
        echo json_encode(["success" => false, "message" => "Error: " . $sql . "<br>" . $conn->error]);
    }
}

$conn->close();
?>