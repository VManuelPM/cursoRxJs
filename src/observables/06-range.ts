import { asyncScheduler, of, range, scheduled } from "rxjs";
 
// const src$ = of(1, 2, 3, 4, 5, 6);
// const src$ = range(1, 5, asyncScheduler);
 
console.log('inicio');
// src$.subscribe(console.log);
scheduled(range(1, 5), asyncScheduler).subscribe(console.log);
console.log('fin');