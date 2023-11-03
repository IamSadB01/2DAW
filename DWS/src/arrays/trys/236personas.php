<?php

    $infoPersonas = [
        ['nombre' => 'miguel', 'altura' => 180, 'email' => 'mito@gmail.com'],
        ['nombre' => 'miguel2', 'altura' => 170, 'email' => 'mito2@gmail.com'],
        ['nombre' => 'miguel3', 'altura' => 160, 'email' => 'mito3@gmail.com'],
        ['nombre' => 'miguel4', 'altura' => 150, 'email' => 'mito4@gmail.com'],
        ['nombre' => 'miguel5', 'altura' => 140, 'email' => 'mito5@gmail.com']
    ];

echo "<table style='border:1px solid black;' rules='all'>";
echo "<thead>";

echo "<tr>";
foreach ($infoPersonas[0] as $clave => $valor) {
    echo "<td>$clave</td>";
}
echo "</tr>";

echo "</thead>";

foreach ($infoPersonas as $persona) {
    echo "<tr style='border:3px;'>";
    foreach ($persona as $valor) {
        echo "<td>$valor</td>";
    }
    echo "</tr>";
}

echo "</table>";
