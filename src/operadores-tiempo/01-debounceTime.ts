import { debounceTime, distinctUntilChanged, fromEvent, map } from "rxjs";

const click$ = fromEvent<MouseEvent>(document, 'click');

//Es util para controlar observables que emiten una gran cantidad de mensajes muy rapido

click$
    .pipe(debounceTime(3000))
    .subscribe()

const input = document.createElement('input')
document.querySelector('body').append(input)

const input$ = fromEvent(input, 'keyup');

input$
    .pipe(
        debounceTime(1000),
        map(keyEvent => (keyEvent.target as HTMLInputElement).value),
        distinctUntilChanged()
    )
    .subscribe(console.log)