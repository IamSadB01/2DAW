<?php
    $dinero = $_GET['dinero'];
    $billetes = [500,200,100,50,20,10,5];
    $monedas = [2,1];

    foreach ($billetes as $billete) {
        $restoEntero = intdiv($dinero,$billete);
        if ($restoEntero>=1) {
            echo "$restoEntero billete/s de $billete <br>";
        }
        $dinero -= ($billete*$restoEntero);
    }

    foreach ($monedas as $moneda) {
        $restoEntero = intdiv($dinero,$moneda);
        if ($restoEntero>=1) {
            echo "$restoEntero moneda/s de $moneda <br>";
        }
        $dinero -= ($moneda*$restoEntero);
    }
