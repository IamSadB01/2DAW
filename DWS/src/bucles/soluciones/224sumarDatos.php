<?php

$acumulador=0;
for ($i=1;$i<=$_POST['cantidad'];$i++){
    $acumulador+=$_POST["input$i"];
}

echo "El total de todos los inputs es: $acumulador";