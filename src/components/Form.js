function Form() {

    function CadastrarUsuario(e) {
        e.preventDefault()
        console.log('cadastrou o usuario!')
    }
    
    return(
        <div>
            <h1>Meu cadastro:</h1>
            <form onSubmit={CadastrarUsuario}>
                <div>
                    <input type="txt" placeholder="Digite o seu nome"/>
                </div>
                <div>
                    <input type="submit" value="cadastrar"/>
                </div>
            </form>
        </div>

    )
}

export default Form