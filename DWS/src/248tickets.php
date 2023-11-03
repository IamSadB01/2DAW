<?php

if(isset($_GET['cantidad'])) {
    $cantidad = $_GET['cantidad'];
    $limite = $_GET['limite'] ?? 1;
    $catalogo = [
        'cafe'=>1,
        'tostada'=>1.50,
        'agua'=>1,
        'coca-cola'=>2,
        'cerveza'=>2,
        'bravas'=>5,
        'ensaladilla'=>4.50,
        'pan'=>1,
        'bocadillo'=>3,
        'aceitunas/ud'=>0.10
    ];
    $tickets = generarTickets($catalogo, $cantidad, $limite);

    foreach($tickets as $ticket) {
        imprimirTicket($ticket);
    }
}

function generarTickets($catalogo, $cantidad, $limiteParam = 1):array {
    $tickets = [];

    // Define los límites basados en el límiteParam
    switch($limiteParam) {
        case 1:
            $minimo = 1;
            $maximo = 5;
            break;
        case 2:
            $minimo = 5;
            $maximo = 10;
            break;
        case 3:
            $minimo = 20;
            $maximo = 70;
            break;
        default:
            $minimo = 1;
            $maximo = 5;
    }

    while ($cantidad > 0) {
        $ticketTotal = 0;
        $ticketConceptos = [];

        while ($ticketTotal < $minimo || ($ticketTotal + min($catalogo) <= $maximo && $ticketTotal < $cantidad)) {
            $nombre = array_rand($catalogo);
            $precio = $catalogo[$nombre];

            if ($ticketTotal + $precio <= $maximo && $ticketTotal + $precio <= $cantidad) {
                $ticketTotal += $precio;
                $indice = array_search($nombre, array_column($ticketConceptos, 'nombre'));

                if ($indice !== false) {
                    $ticketConceptos[$indice]['cantidad'] += 1;
                    $ticketConceptos[$indice]['total'] += $precio;
                } else {
                    $ticketConceptos[] = ['nombre' => $nombre, 'cantidad' => 1, 'total' => $precio];
                }
            }
        }

        $tickets[] = ['total' => $ticketTotal, 'conceptos' => $ticketConceptos];
        $cantidad -= $ticketTotal;
    }

    return $tickets;
}

function imprimirTicket($ticket):void
{
    echo "<pre>";
    echo str_repeat('*', 50) . "\n";
    echo str_repeat('*', 50) . "\n";
    echo "*****             Bar los Lentos             *****\n";
    echo "*****           Av. de Madrid, 25            *****\n";
    echo "*****                                        *****\n";
    echo "*****  Concepto              Uds    Total    *****\n";
    echo "***** -------------------------------------- *****\n";

    foreach ($ticket['conceptos'] as $concepto) {
        $nombre = str_pad($concepto['nombre'], 20);
        $cantidad = str_pad($concepto['cantidad'], 5, ' ', STR_PAD_LEFT);
        $total = str_pad($concepto['total'], 8, ' ', STR_PAD_LEFT);
        echo "*****  $nombre  $cantidad  $total *****\n";
    }

    echo "*****                                        *****\n";
    $total = str_pad($ticket['total'], 5, ' ', STR_PAD_LEFT);
    $iva = str_pad(number_format($ticket['total'] * 0.21, 2), 7, ' ', STR_PAD_LEFT);

    echo "*****                       Total:  $total    *****\n";
    echo "*****                       Iva Inc:$iva  *****\n";
    echo "*****                                        *****\n";
    echo "***** La atendió Sergio                      *****\n";
    echo "***** Gracias por su visita                  *****\n";
    echo str_repeat('*', 50) . "\n";
    echo str_repeat('*', 50) . "\n";
    echo "</pre>";
}