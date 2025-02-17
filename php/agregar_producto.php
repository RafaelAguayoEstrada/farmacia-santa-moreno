<?php
include 'conexion.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['nombre'];
    $precio = $_POST['precio'];
    $stock = $_POST['stock'];

    $sql = "INSERT INTO productos (nombre, precio, stock) VALUES ('$nombre', '$precio', '$stock')";

    if ($conn->query($sql) === TRUE) {
        echo json_encode(["success" => true, "message" => "Producto agregado correctamente"]);
    } else {
        echo json_encode(["success" => false, "message" => "Error: " . $sql . "<br>" . $conn->error]);
    }
}

$conn->close();
?>