<?php
include 'conexion.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $id_cliente = $_POST['id_cliente'];
    $id_producto = $_POST['id_producto'];
    $cantidad = $_POST['cantidad'];

    // Verificar stock
    $sql = "SELECT stock FROM productos WHERE id = $id_producto";
    $result = $conn->query($sql);
    $row = $result->fetch_assoc();

    if ($row['stock'] >= $cantidad) {
        // Actualizar stock
        $nuevo_stock = $row['stock'] - $cantidad;
        $sql = "UPDATE productos SET stock = $nuevo_stock WHERE id = $id_producto";
        $conn->query($sql);

        // Registrar venta
        $sql = "INSERT INTO ventas (id_cliente, id_producto, cantidad) VALUES ($id_cliente, $id_producto, $cantidad)";
        if ($conn->query($sql) === TRUE) {
            echo json_encode(["success" => true, "message" => "Venta procesada correctamente"]);
        } else {
            echo json_encode(["success" => false, "message" => "Error: " . $sql . "<br>" . $conn->error]);
        }
    } else {
        echo json_encode(["success" => false, "message" => "No hay suficiente stock"]);
    }
}

$conn->close();
?>