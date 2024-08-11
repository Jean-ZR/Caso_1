<?php
if (!empty($_FILES['archivos']['name'][0])) {
    foreach ($_FILES['archivos']['name'] as $key => $name) {
        $tmp_name = $_FILES['archivos']['tmp_name'][$key];
        $uploadDir = 'uploads/'; // Cambia esto según sea necesario
        $uploadFile = $uploadDir . basename($name);

        if (move_uploaded_file($tmp_name, $uploadFile)) {
            echo "El archivo " . basename($name) . " se ha subido correctamente.\n";
        } else {
            echo "Error al subir el archivo " . basename($name) . ".\n";
        }
    }
} else {
    echo "No se seleccionaron archivos para subir.";
}
?>
