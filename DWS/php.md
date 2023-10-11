## Código embebido
* Los bloques de código se escriben entre **<?php** y **?>**, mientras que las sentencias se separan mediante **;**.

* Tenemos tres posibilidades a la hora de generar contenido en nuestros documentos PHP:
  * echo expresion;
  * print(expresion);
  * <?=expresion ?>

* Comentarios
  * /* txt */

* Errores
  * Si hay un error de ejecución, se produce un Fatal Error.

* Variables
  * No es necesario declararlas previamente
  * Comienzan por **$**, seguido de una letra **minúscula** o **_**
  * Case sensitive
  * Tipado dinámico (no se declara el tipo)
  * Conveniente iniciarlas, sino dan error.

```php
<?php
	$nombre = "Aitor";
	$nombreCompleto = "Aitor Medrano";
	$numero = 123;
	$numero2 = 456;
	$pi = 3.14;
	$suerte = true;
	$sinValor;
	
	echo $sinValor;
?>
```

* Tipos de variables
  * boolean, integer, float, string
  * array, object, callable, iterable
  * null

* Constantes
  * define(NOMBRE, valor);
  * const NOMBRE;
  * Se declaran en **mayúsculas**
  * Hay variables predefinidas (*magic constants*)

```php
<?php
	define("PI", 3.1416);
	const IVA = 0.21;
	
	echo PI, " ", IVA; // No se pone el símbolo dolar
?>
```

* Operadores
  * Negación: -$a
  * Suma: $a + $b
  * Resta: $a - $b
  * Multiplicación: $a * $b
  * División: $a / $b
  * Módulo / Resto: $a % $b
  * Potencia: $a ** $b

* Para concatenar cadenas, operador **.**

```php
<?php
	$x = 33;
	$y = 11;
	$z = $x + $y;
	echo "La suma de 33 y 11 es ".44."<br />";
	echo "La suma de ".$x." y ".$y." es ".(33 + 11)."<br />";
	echo "La suma de ".$x." y ".$y." es ".$z."<br />";
?>
```

* Comparación
  * ...

* Lógicos
  * ...

* Asignación
  * ...

* 