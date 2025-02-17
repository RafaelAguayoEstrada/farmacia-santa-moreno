<?php
include 'conexion.php';

$sql = "SELECT id, nombre, apellidos, puesto, salario FROM empleados";
$result = $conn->query($sql);

$empleados = [];

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $empleados[] = $row;
    }
}

echo json_encode($empleados);

$conn->close();
?>