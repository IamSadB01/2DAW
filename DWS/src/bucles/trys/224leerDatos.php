<?php

if (!isset($_GET['numero'])) {
    echo "Cantidad de parámetros inválida.";
} else {
    $numero = $_GET['numero'];

    echo "<form action='224sumarDatos.php' method='post'>";
    for ($i = 0; $i = $numero; $i++) {
        echo "<label for=numero$i>Introduce el numero $i</label>";
        echo "<input type='number' name='numero$i' placeholder='Número $i aquí'/> <br>";
    }
    echo "<input type='hidden' name='cantidad' value='" . $numero . "'>";
    echo "<input type='submit' value='Obtener total'>";
    echo "</form>";
}