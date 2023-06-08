import { fromEvent, map, takeWhile } from "rxjs";

const click$ = fromEvent<MouseEvent>(document, 'click');

click$
.pipe(
    map( ({x,y}) => ({x,y}) ),
    //El ultimo argumento significa que el es el ultimo valor que rompe la condición del takeWhile 
    takeWhile( ({y}) => y <= 150, true )
)
.subscribe({
    next: val => console.log('next',val),
    complete: () => console.log('complete')
})