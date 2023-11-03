<?php

/*
242matematicas.php: Añade las siguientes funciones:

digitos(int $num): int → devuelve la cantidad de dígitos de un número.
digitoN(int $num, int $pos): int → devuelve el dígito que ocupa, empezando por la izquierda, la posición $pos.
quitaPorDetras(int $num, int $cant): int → le quita por detrás (derecha) $cant dígitos.
quitaPorDelante(int $num, int $cant): int → le quita por delante (izquierda) $cant dígitos.
Para probar las funciones, haz uso tanto de paso de argumentos posicionales como argumentos con nombre.

*/

function digitos(int $num):int{
    $digitos=0;
    while ($num/10>1){
        $digitos++;
        $num=intval($num/10);
    }
    return $digitos+1;
}


function digitoN(int $num, int $pos):int{
    $numeroString = strval($num);
    return intval($numeroString[$pos-1]);
}

function quitaPorDetras(int $num, int $cant): int{
    $numeroString = strval($num);
    $dondeCortar = strlen($numeroString)-$cant;
    $salida=substr($numeroString,0,$dondeCortar);
    return intval($salida);
}

function quitaPorDelante(int $num, int $cant): int{
    $numeroString = strval($num);
    $salida=substr($numeroString,$cant,strlen($numeroString));
    return intval($salida);
}

//Prueba de las funciones


echo digitos(10);
echo "<br>";
echo digitos(0);
echo "<br>";
echo digitos(PHP_INT_MAX);
echo "<br>";

echo digitoN(54796578910,3);
echo "<br>";

$num=54678598;
echo quitaPorDetras($num,4);
echo "<br>";

echo quitaPorDelante(54678598,4);
echo "<br>";
