<?php
$array = [
    "alumno1" => ["nombre" => "juan", "edad" => "5"],
    "alumno2" => ["nombre" => "carlitos", "edad" => "3"],
    "alumno3" => ["nombre" => "maría", "edad" => "4"]
];

$buscarNombre = "carlitos";

foreach ($array as $clave => $alumno) {
    if (isset($alumno["nombre"]) && $alumno["nombre"] === $buscarNombre) {
        unset($array[$clave]);
    }
}

print_r($array);