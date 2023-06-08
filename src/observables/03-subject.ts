import { Observable, Observer, Subject } from 'rxjs'

const observer: Observer<any> = {
    next: value => console.log('Next [next]: ', value),
    error: error => console.error('Error [error]: ', error),
    complete: () => console.info('Completed [completed]')
}

//Subject

const intervalo$ = new Observable<number>(subs => {
    const intervalID = setInterval(() => {
        subs.next(Math.random())
    }, 1000)

    return () => clearInterval(intervalID)
});

/**
 * 1. Casteo múltiple
 * 2. Es un observer
 * 3. Next, Error y Complete
 */
const subject$ = new Subject();
const subscription = intervalo$.subscribe(subject$)

// const subs2 = intervalo$.subscribe(rnd => console.log("random 1: ", rnd))
// const subs1 = intervalo$.subscribe(rnd => console.log("random 2: ", rnd))

const subs2 = subject$.subscribe(rnd => console.log("random 1: ", rnd))
const subs1 = subject$.subscribe(rnd => console.log("random 2: ", rnd))

setTimeout( () => {
    subject$.next(10)
    subject$.complete()
    subscription.unsubscribe()
}, 3500)