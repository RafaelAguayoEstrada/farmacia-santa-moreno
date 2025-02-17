<?php
$servername = "localhost"; // Servidor de la base de datos
$username = "root"; // Usuario de la base de datos
$password = ""; // Contraseña de la base de datos
$dbname = "farmacia_crm"; // Nombre de la base de datos

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}
?>