<?php

if (!isset($_GET['numero'])){
    echo "Parámetros insuficientes";
}else{
    $numero = $_GET['numero'];
    echo "<form action='224sumarDatos.php' method='post'>";
    for ($i=1;$i<=$numero;$i++){
        echo "<label for=input$i>Introduce el numero$i</label>";
        echo "<input type='text' name='input$i' id='inputUsuario$i' placeholder='Introduce el numero $i'></br>";
    }
    echo "<input type='hidden' name='cantidad' value='" . $numero . "'>";
    echo "<button type='submit'>Pulsa para enviar los datos</button>";
    echo "</form>";
}
