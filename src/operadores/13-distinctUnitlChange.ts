import { distinctUntilKeyChanged, from } from "rxjs";

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
        distinctUntilKeyChanged('nombre')
    )
    .subscribe(console.log)