import { pedirCarta, valorCarta, crearCartaHtml } from './'; 
/** turno de la computadora
 * 
 * @param { Number } puntosMinimos puntos minimos q la computadora nesesita para ganar
 * @param { HTMLElemt } puntosHTML elemento HTML para mostrar los puntos
 * @param { HTMLElemt } divComputadora elemento HTML para mostrar laas cartas
 * @param { Array <String> } deck 
 */
export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck = [] ) => {

    if( !puntosMinimos ) throw new Error('Puntos minimos es nesesario');
    if( !puntosHTML ) throw new Error('Argumento puntosHTML es nesesario');

    let puntosComputadora = 0; 

    do {
        const carta = pedirCarta( deck );

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        const imgCarta = crearCartaHtml( carta );
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Javier Justiniano Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}