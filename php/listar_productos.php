<?php
include 'conexion.php';

$sql = "SELECT id, nombre, precio, stock FROM productos";
$result = $conn->query($sql);

$productos = [];

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $productos[] = $row;
    }
}

echo json_encode($productos);

$conn->close();
?>