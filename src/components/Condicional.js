import {useState} from 'react'

function Condicional() {
    function enviarEmail(e) {
        e.preventDefault()
        console.log('testando')
    }

    return(
        <div>
            <h2>Cadastre o seu e-mail:</h2>
            <form>
                <input type='email' placeholder='Digite o seu e-mail...'/>
                <button type='onSubmit' onClick={enviarEmail}>Enviar-email</button>
            </form>
        </div>
    )
}
export default Condicional