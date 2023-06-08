import { delay, forkJoin, interval, of, take } from "rxjs";

//of es sincrono
const numeros$ = of(1, 2, 3, 4)
const intervalos$ = interval(1000).pipe(take(3))
const letras$ = of('a', 'c', 'd').pipe(delay(3500))

//forkJoin(numeros$, intervalos$, letras$).subscribe(console.log)

// forkJoin({ numeros$, intervalos$, letras$ }).subscribe(resp => {
//     console.log(resp)
// })

forkJoin({ num: numeros$, int: intervalos$, let: letras$ }).subscribe(resp => {
    console.log(resp)
})