<?php

$acumulador = 0;
for ($i = 1; $i <= $_POST['cantidad']; $i++) {
    $acumulador+=$_POST["numero$i"];
}

echo "Total obtenido: " . $acumulador;