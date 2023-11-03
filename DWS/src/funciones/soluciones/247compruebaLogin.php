<?php

/*
    247compruebaLogin.php: recibe los datos y comprueba si son correctos (los usuarios se guardan en un array asociativo) pasando el control mediante el uso de include a:
        247ok.php: El usuario introducido es correcto
        247ko.php: El usuario es incorrecto. Informar si ambos están mal o solo la contraseña. Volver a mostrar el formulario de acceso.
*/

$usuarios = ['miguel'=>'12345','alba'=>'12345','inma'=>'12345','juanjo'=>'12345'];

if (!isset($_POST['usuario']) || !isset($_POST['password'])){
    echo "No se han recibido los parámetros correctos";
}else{
    $usuario = $_POST['usuario'];
    $contrasenya = $_POST['password'];

    if (array_key_exists($usuario,$usuarios) && $usuarios[$usuario]==$contrasenya) {
        include './247ok.php';
    } else {
        include './247ko.php';
    }
}