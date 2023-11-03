<?php

/*
261generaContrasenya.php: Crea una función que a partir de un tamaño, 
genere una contraseña aleatoria compuesta de letras y dígitos de manera aleatoria.
*/

function contraseñaAleatoria(int $tam): string
{
    $arrayAbecedario = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'ñ', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    $numeroLetras = count($arrayAbecedario);

    $stringGenerado = [];

    for ($i = 0; $i < $tam; $i++) {
        if (mt_rand(0, 1) == 0) { //Vamos a insertar una letra
            if (mt_rand(0, 1) == 0) { //Minúscula
                $stringGenerado[$i] = $arrayAbecedario[mt_rand(0, $numeroLetras - 1)];
            } else { //Mayúscula
                $stringGenerado[$i] = strtoupper($arrayAbecedario[mt_rand(0, $numeroLetras - 1)]);
            }
        } else { //Vamos a insertar un número
            $stringGenerado[$i] = mt_rand(0, 9);
        }
    }
    return implode($stringGenerado);
}


//Prueba de la función

echo contraseñaAleatoria(10) . "<br>";
echo contraseñaAleatoria(8) . "<br>";
echo contraseñaAleatoria(15) . "<br>";
echo contraseñaAleatoria(40) . "<br>";