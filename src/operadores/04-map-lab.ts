import { fromEvent, map, tap } from "rxjs";

const texto = document.createElement('div')
texto.innerHTML = `Incididunt nostrud proident dolore aliquip duis ex. Irure magna <br></br>
deserunt nostrud aliqua ipsum ullamco officia sint reprehenderit magna cupidatat exercitation. Veniam amet et consectetur exercitation l <br></br>
aboris. Voluptate eu sunt id voluptate. Deserunt anim sunt aliquip laboris culpa ut consectetur duis pariatur. Ut anim elit commodo et. <br></br>
aboris. Voluptate eu sunt id voluptate. Deserunt anim sunt aliquip laboris culpa ut consectetur duis pariatur. Ut anim elit commodo et. <br></br>
aboris. Voluptate eu sunt id voluptate. Deserunt anim sunt aliquip laboris culpa ut consectetur duis pariatur. Ut anim elit commodo et. <br></br>
aboris. Voluptate eu sunt id voluptate. Deserunt anim sunt aliquip laboris culpa ut consectetur duis pariatur. Ut anim elit commodo et. <br></br>
Excepteur culpa exercitation consequat quis mollit sint est Lorem duis laborum. Minim pariatur eiusmod sunt minim cillum ut labore fugiat amet labore. Aute sint sit excepteur deserunt officia eu ut non aliqua. Consequat duis sunt tempor nisi ullamco occaecat nisi duis dolor mollit. Est irure duis aute et culpa anim.
<br></br>
Fugiat et cupidatat ut consectetur mollit Lorem sunt. Velit irure ex culpa nostrud ut irure commodo enim magna nostrud eiusmod eiusmod aute. Pariatur pariatur labore irure adipisicing nulla aliqua proident ipsum. Id voluptate enim aliqua deserunt officia in incididunt veniam elit minim occaecat id.
<br></br>
Nisi adipisicing aliqua qui ea ad ad excepteur veniam velit enim anim. Duis esse qui ad quis adipisicing ea consequat adipisicing veniam incididunt consequat adipisicing esse. Ullamco tempor elit magna adipisicing deserunt excepteur. Anim sint amet tempor qui magna velit tempor reprehenderit fugiat minim nulla. Sunt cupidatat eiusmod do nulla pariatur est do ea amet non aute.
<br></br>
Nisi excepteur in fugiat esse est laboris officia nulla qui sunt fugiat ea cupidatat cupidatat. Lorem enim et excepteur Lorem ullamco. Fugiat pariatur deserunt dolor anim. In consequat consequat eiusmod laboris.
<br></br>
Exercitation quis consectetur non ea reprehenderit sint ipsum aute deserunt. Tempor velit amet sunt ullamco enim. Sint quis voluptate ea reprehenderit reprehenderit sit ad ad nulla sint ullamco ad elit laborum. Aute velit elit labore eiusmod occaecat aliqua reprehenderit qui cupidatat ea duis laborum nostrud. Dolor proident Lorem exercitation dolore sit quis exercitation. Sit qui do consequat excepteur quis labore enim nisi culpa duis consectetur. Velit eiusmod est irure tempor id nisi ut.
`  

const body = document.querySelector('body');
body.append(texto);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar)

// función que haga el calculo 
const calcularPorcentajeScroll = (event) => {
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;
    return (scrollTop / (scrollHeight-clientHeight)) * 100;
}


// Streams
const scroll$ = fromEvent(document, 'scroll');

// scroll$.subscribe(console.log)

const progress$ = scroll$.pipe(
    map(event => calcularPorcentajeScroll(event)),
    tap(console.log)
);

progress$.subscribe(porcentaje => {
    progressBar.style.width = `${porcentaje}%`
})