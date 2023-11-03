<?php

/*
207dinero.php: 
A partir de una cantidad de dinero, mostrar su descomposición en billetes (500, 200, 100, 50, 20, 10, 5) y monedas (2, 1), 
para que el número de elementos sea mínimo. 
No se puede utilizar ninguna instrucción condicional. Por ejemplo, al introducir 139 debe mostrar:

Tip: Puedes forzar a realizar la división entera mediante la función intdiv($dividendo, $divisor)
o pasar un número flotante a entero puedes usar la función intval()

1 billete de 100
0 billete de 50
1 billete de 20
1 billete de 10
1 billete de 5
2 moneda de 2


*/

$dinero = $_GET['cantidad'];
$billetes = [500,200,100,50,20,10,5];
$monedas = [2,1];


    //Descomposición en billetes
    foreach ($billetes as $billete){
        $restoEntero = intdiv($dinero,$billete);
        if ($restoEntero>=1){
            echo "$restoEntero billetes de $billete<br>";
        }
        $dinero -= $billete*$restoEntero;
    }

    //Descomposición en monedas
    foreach ($monedas as $moneda){

        $restoEntero = intdiv($dinero,$moneda);
        if ($restoEntero >=1 ){
            echo "$restoEntero monedas de $moneda<br>";
        }
        $dinero -= $billete*$restoEntero;
    }