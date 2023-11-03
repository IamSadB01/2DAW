<?php
function digitos(int $num):int {
    return strlen(strval($num));
}

echo digitos(1);
echo "<br />";

function digitoN(int $num, int $pos):int {
    $numeroString = strval($num);
    return intval($numeroString[$pos-1]);
}

echo digitoN(154654664560,4);
echo "<br />";

function quitaPorDetras(int $num, int $cant):int {
    $numeroString = strval($num);
    $dondeCortar = strlen($numeroString) - $cant;
    $salida = substr($numeroString, 0, $dondeCortar);
    return intval($salida);
}

echo quitaPorDetras(15465466,4);
echo "<br />";

function quitaPorDelante(int $num, int $cant):int {
    $numeroString = strval($num);
    $salida = substr($numeroString, $cant, strlen($numeroString));
    return intval($salida);
}

echo quitaPorDelante(15465466,4);