<?php

/*
213ecuacion2g.php: Crea un programa que resuelva una ecuación de 2º grado del tipo ax² + bx + c = 0.
Ten en cuenta que puede tener 2, 1 o no tener solución dependiendo del valor del discriminante b²-4ac.

Tip: Para calcular la raíz cuadrada deberás utilizar la función sqrt()
*/

    if (!isset($_GET['a']) && !isset($_GET['b']) && !isset($_GET['c'])) {
        echo "No se han pasado los suficientes parámetros";
    } else {
        $a = $_GET['a'];
        $b = $_GET['b'];
        $c = $_GET['c'];

        if ($b**2 - 4*$a*$c == 0) {
            echo "x = " . -$b / (2 * $a);
        } else if ($b**2 - 4*$a*$c > 0) {
            echo "x1 = " . (-$b + sqrt($b**2 - 4 * $a * $c)) / (2 * $a) . "<br>";
            echo "x2 = " . (-$b - sqrt($b**2 - 4 * $a * $c)) / (2 * $a) . "<br>";
        } else {
            echo "La ecuación no tiene solución";
        }
    }