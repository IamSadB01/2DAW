<?php

/*
247login.php: el formulario de entrada, que solicita el usuario y contraseña.
*/

echo "<form method='post' action='247compruebaLogin.php'>";
echo "<label for=usuario>Introduzca su usuario</label>";
echo "<input type='text' name='usuario' id=inputUsuario placeholder='Introduzca el usuario' alt='Introducir usuario'><br>";
echo "<label for=password>Introduzca su contraseña</label>";
echo "<input type='pass' name='password' id=inputPassword alt='Introducir contraseña'><br>";
echo "<button type='submit'>Presione para enviar</button>";