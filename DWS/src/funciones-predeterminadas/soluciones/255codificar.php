<?php

/*
255codificar.php: Utilizando las funciones para trabajar con caracteres, a partir de una cadena y un desplazamiento:
Si el desplazamiento es 1, sustituye la A por B, la B por C, etc.
El desplazamiento no puede ser negativo
Si se sale del abecedario, debe volver a empezar
Hay que respetar los espacios, puntos y comas.
*/



function codificarFrase(string $frase,int $desplazamiento):string{
    $arrayAbecedario=array('a','b','c','d','e','f','g','h','i','j','k','l','m','ñ','n','o','p','q','r','s','t','u','v','w','x','y','z');
    $numeroLetras= count($arrayAbecedario);
    $frase=strtolower($frase);
    for ($i=0;$i<(strlen($frase));$i++){

        if ($frase[$i]!=' ' && $frase[$i]!='.' && $frase[$i]!=','){
            $claveAntigua = array_search($frase[$i],$arrayAbecedario);
            $claveNueva=0;
            if ($claveAntigua+$desplazamiento >= $numeroLetras){
                $claveNueva = ($claveAntigua+$desplazamiento)%$numeroLetras;
            }else{
                $claveNueva = $claveAntigua+$desplazamiento;
            }
            $frase[$i]=$arrayAbecedario[$claveNueva];
        }
    }
    return $frase;
}

//Prueba de la función
echo codificarFrase("x",1). "<br>";
echo codificarFrase("Mary, tenía un corderito. Y era un cordero muy bonito",1);
