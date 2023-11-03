<?php

/*
226cuadrado.php: Basándote en el ejercicio anterior, rellena la tabla de manera que solo los bordes tengan contenido, 
quedándose el resto de celdas en blanco.
*/

if (!isset($_POST['filas']) || !isset($_POST['columnas'])){
    echo "Los parámetros no se han recibido de forma correcta";
}else{
    $filas=$_POST['filas'];
    $columnas = $_POST['columnas'];

    //Creamos la cabecera de la tabla y la etiqueta del cuerpo
    echo "<table id='table'>";
    echo "<tbody>";
    

    for ($x=1;$x<=$filas;$x++){
        echo "<tr>";
        for($y=1;$y<=$columnas;$y++){
            if ($x==1 || $y==1 || $x==$filas || $y==$columnas){
                echo "<td>($x,$y)</td>";
            }else{
                echo "<td></td>";
            }
            
        }
        echo "</tr>";
    }
    echo "</tbody>";
    echo "</table>";
}
echo "<style>
body {
background-color: ghostwhite;
}

#table {
    border: 2px solid red;
}

tr, td {
    border: 2px solid green;
}
</style>";