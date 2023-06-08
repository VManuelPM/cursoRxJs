import {Observable, Observer} from 'rxjs'


const observer: Observer<any> = {
    next: value => console.log('Next [next]: ', value),
    error: error => console.error('Error [error]: ', error),
    complete: () => console.info('Completed [completed]')
}

//Emitir valor cada x tiempo
const intervalos$ = new Observable<number>(subs => {
    let contador = 0
    const interval = setInterval( () => {
        subs.next(contador++)
    }, 1000)

    //se ejecuta en el unsubscribe
    return () => {
        clearInterval(interval)
        console.log('Intervalo destruido')
    }
})

const subs1 = intervalos$.subscribe(num => console.log(num))
const subs2 = intervalos$.subscribe(num => console.log(num))
const subs3 = intervalos$.subscribe(num => console.log(num))

//add se utiliza para añadir una subscripcion hija
subs1.add(subs2)
subs1.add(subs3)

setTimeout(() => {
    //Un solo unsubscribe debería limpiar todos los intervalos
    subs1.unsubscribe()
    console.log('Completado timeout')
}, 3000)