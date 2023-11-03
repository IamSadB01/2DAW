<?php

    if (!array_key_exists($usuario,$usuarios)){
        echo "el usuario que ha introducido no existe en la base de datos";
    }else{
        echo "La contraseña introducida es incorrecta";
    }