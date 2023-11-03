<?php

/*
261generaContrasenya.php: Crea una función que a partir de un tamaño,
genere una contraseña aleatoria compuesta de letras y dígitos de manera aleatoria.
*/

function contraseñaAleatoria(int $tam): string {
    $arrayAbecedario = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'ñ', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    $contAbecedario = count($arrayAbecedario);

    $contrasenya=[];

    for ($i = 0; $i < $tam; $i++) {
        if (mt_rand(0, 1) == 0) { //letra
            if (mt_rand(0, 1) == 0) { //minus
                $contrasenya[$i] = $arrayAbecedario[mt_rand(0, $contAbecedario - 1)];
            } else { //mayus
                $contrasenya[$i] = strtoupper($arrayAbecedario[mt_rand(0, $contAbecedario - 1)]);
            }
        } else { //num
            $contrasenya[$i] = mt_rand(0, 9);
        }
    }

    return implode($contrasenya);
}

echo contraseñaAleatoria(20) . "<br>";
echo contraseñaAleatoria(8) . "<br>";
echo contraseñaAleatoria(40) . "<br>";