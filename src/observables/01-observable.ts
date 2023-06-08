import {Observable, Observer} from 'rxjs'

//Observer es una interfaz
const observer: Observer<any> = {
    next: value => console.log('Next [next]: ', value),
    error: error => console.error('Error [error]: ', error),
    complete: () => console.info('Completed [completed]')
}

// Crear observables

// const obs$ = Observable.create()
const obs$ = new Observable<string>( subs => {
    subs.next('Hola')
    subs.next('Mundo')

    subs.complete();
    subs.next('Holaa')

});

/**
 * Forma de llamar un observer
 */
// obs$.subscribe(resp => {
//     console.log(resp)  
// })

// obs$.subscribe({ 
//     next: next => console.log('Next: ', next), 
//     error: error => console.warn('Error: ', error), 
//     complete: () => console.log('COMPLETE')
// });

obs$.subscribe(observer)