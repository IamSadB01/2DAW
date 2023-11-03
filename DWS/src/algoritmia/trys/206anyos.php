<?php
/*
Tras leer la edad de una persona, mostrar la edad que tendrá dentro de 10 años y hace 10 años.
Además, muestra qué año será en cada uno de los casos.
Finalmente, muestra el año de jubilación suponiendo que trabajarás hasta los 67 años.
En este caso, no hace falta que previamente crees un formulario, puedes probar el ejercicio via URL.
*/

    $edadActual = $_GET['edad'];
    $yearActual = date("Y");
    $yearJubilacion = 67;

    echo "Dentro de 10 años tendrás " . ($edadActual + 10) . " años, y estaremos en el " . ($yearActual + 10) . "<br>";
    echo "Hace 10 años tenías " . ($edadActual - 10) . " años, y estábamos en el " . ($yearActual - 10) . "<br>";
    echo "Te jubilarás en el " . (($yearJubilacion - $edadActual) + $yearActual);