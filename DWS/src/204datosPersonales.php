<?php

    /*$nombre=$_POST['nombre'];
    $apellidos=$_POST['apellidos'];
    $email=$_POST['email'];
    $anyo=$_POST['anyo'];
    $telefono=$_POST['telefono'];*/

    $salida = "<html lang='es'>";
    $salida.="<head><title>Datos Personales del Usuario".$_POST['nombre']."</title></head>";
    $salida.="<body>
                 <table>
                    <tr>
                        <td>Nombre</td><td>".$_POST['nombre']."</td>
                    </tr>
                    <tr>
                        <td>Apellidos</td><td>".$_POST['apellidos']."</td>
                    </tr>
                    <tr>
                        <td>Email</td><td>".$_POST['email']."</td>
                    </tr>
                    <tr>
                        <td>Año</td><td>".$_POST['anyo']."</td>
                    </tr>
                    <tr>
                        <td>Teléfono</td><td>".$_POST['telefono']."</td>
                    </tr>
                 </table>
              </body>
          </html>";

    echo $salida;
    // echo $nombre."<br>".$apellidos."<br>".$email."<br>".$anyo."<br>".$telefono."<br>";

    // print recursivo que muestra lo que hay en el método POST
        //print_r($_POST);
?>