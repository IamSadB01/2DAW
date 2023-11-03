<?php

/*
236personas.php: Mediante un array bidimensional, almacena el nombre, altura y email de 5 personas. 
Para ello, crea un array de personas, siendo cada persona un array asociativo: [ ['nombre'=>'Aitor', 'altura'=>182, 'email'=>'aitor@correo.com'],[…],… ] 
Posteriormente, recorre el array y muéstralo en una tabla HTML.
*/

$arrayBidimensionalPersonas = array();

$arrayBidimensionalPersonas[0]=array('nombre'=>'miguel','altura'=>180,'email'=>'migueltomas.informatica@iespacomolla.es');
$arrayBidimensionalPersonas[1]=array('nombre'=>'alba','altura'=>160,'email'=>'albanavarro.informatica@iespacomolla.es');
$arrayBidimensionalPersonas[2]=array('nombre'=>'inma','altura'=>170,'email'=>'inmacliment.informatica@iespacomolla.es');
$arrayBidimensionalPersonas[3]=array('nombre'=>'elena','altura'=>156,'email'=>'elenamartinez.informatica@iespacomolla.es');
$arrayBidimensionalPersonas[4]=array('nombre'=>'juanjo','altura'=>182,'email'=>'juanjovidal.informatica@iespacomolla.es');

echo "<table style='border:1px solid black;'>";
echo "<thead>";
echo "<tr>";
foreach ($arrayBidimensionalPersonas[0] as $clave=>$valor){
    echo "<td>$clave</td>";
}
echo "</tr>";
echo "</thead>";

foreach ($arrayBidimensionalPersonas as $datosPersona){
    echo "<tr>";
    foreach ($datosPersona as $propiedad => $valor){
        echo "<td>$valor</td>";
    }
    echo "</tr>";
}

echo "</table>";