<?php
/*
 * Muestra 3 frases, cada una en un párrafo
 * utilizando las tres posibilidades que existen de
 * mostrar contenido. Tras ello, introduce dos
 * comentarios, uno de bloque y otro de una línea.
 */

$mensaje="Va a ser apasionante";
?>

<html lang="es">
<head>
    <title>Ejercicio 1</title>
</head>
<body>
    <p><?=$mensaje?></p>

    <?php
        echo "Bienvenidos a 2º de DAW";
        echo "<br><br>";
        print("Vais a morir");
    ?>
</body>
</html>