<?php
include 'conexion.php';

$sql = "SELECT v.id, c.nombre as cliente, p.nombre as producto, v.cantidad, v.fecha
        FROM ventas v
        JOIN clientes c ON v.id_cliente = c.id
        JOIN productos p ON v.id_producto = p.id";
$result = $conn->query($sql);

$ventas = [];

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $ventas[] = $row;
    }
}

echo json_encode($ventas);

$conn->close();
?>