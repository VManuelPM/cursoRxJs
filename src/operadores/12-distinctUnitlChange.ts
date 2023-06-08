import { distinctUntilChanged, from, of } from "rxjs";

const numeros$ = of(1, 1, 1, 3, 3, 2, 2, 4, 4, 5, 5, 3, 1);

numeros$
    .pipe(
        distinctUntilChanged()
    )
    .subscribe({
        next: value => console.log('next', value),
        complete: () => console.log('complete')
    })

interface Personaje {
    nombre: string
}

const personajes: Personaje[] = [
    { nombre: 'Megaman' },
    { nombre: 'Zero' },
    { nombre: 'Megaman' },
    { nombre: 'Hulk' },
    { nombre: 'Megaman' },
    { nombre: 'Flash' },
    { nombre: 'Flash' },
]

from(personajes)
    .pipe(
        distinctUntilChanged( (ant, act) => ant.nombre === act.nombre)
    )
    .subscribe(console.log)