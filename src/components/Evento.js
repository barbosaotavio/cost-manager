import Button from './evento/Button'

function Evento () {
function meuEvento() {
    console.log (`Ativando primeiro evento!`)
}
 function segundoEvento() {
    console.log ('Ativando segundo evento!')
 }

    return(
        <div>
            <p>Clique para desparar um evento:</p>
            <Button event={meuEvento}text= 'Primeiro Evento' />
            <Button event={segundoEvento}text= 'segundo Evento' />
        </div>
    )

}

export default Evento