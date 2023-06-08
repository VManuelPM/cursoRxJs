import { fromEvent, map, mapTo, pluck } from 'rxjs';


/**
 * map
 */

// range(1, 5).pipe(
//     map<number, string>(val => (val*10).toString() )
// ).subscribe(console.log)

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');
const keyupCode$ = keyup$.pipe(map(event => event.code));

/**
 * pluck
 */
//deprecated
const keyupPluck$ = keyup$.pipe(pluck('target', 'baseURI'));


/**
 * mapTo
 */
//deprecated
const keyupMapTo$ = keyup$.pipe(mapTo('tecla presioanda'));

keyupCode$.subscribe(code => console.log('map', code));
keyupPluck$.subscribe(code => console.log('pluck', code));
keyupMapTo$.subscribe(code => console.log('mapTo', code));