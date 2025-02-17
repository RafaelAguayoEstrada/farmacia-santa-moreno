<?php
include 'conexion.php';

$sql = "SELECT id, nombre, apellidos, telefono, correo, membresia FROM clientes";
$result = $conn->query($sql);

$clientes = [];

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $clientes[] = $row;
    }
}

echo json_encode($clientes);

$conn->close();
?>