import { combineLatest, fromEvent, pluck } from "rxjs";


const keyup$ = fromEvent(document, 'keyup');
const click$ = fromEvent(document, 'click');

combineLatest([keyup$, click$])
    .subscribe(console.log);