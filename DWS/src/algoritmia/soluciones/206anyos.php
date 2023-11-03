<?php

/*
206anyos.php: Tras leer la edad de una persona, mostrar la edad que tendrá dentro de 10 años y hace 10 años. 
Además, muestra qué año será en cada uno de los casos. Finalmente, muestra el año de jubilación suponiendo que trabajarás hasta los 67 años. 
En este caso, no hace falta que previamente crees un formulario, puedes probar el ejercicio via URL: 206anyos.php?edad=33.
*/

$edad=$_GET['edad'];
$anyoActual = date("Y");
$anyosJubilacion = 67;

echo "Dentro de 10 años su edad será: " . ($edad + 10) . (" y será el año " . ($anyoActual + 10)) ."<br>";
echo "Hace 10 años usted tenía: " . ($edad - 10) . (" y era el año " . ($anyoActual - 10)) ."<br>";
echo "Cuando se jubile a los 67 años será el año " . (($anyosJubilacion - $edad) + $anyoActual);