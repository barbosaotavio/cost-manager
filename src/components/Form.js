function Form() {

    function cadastrarUsuario(e) {
        e.PreventDefault()
        console.log ('cadastrou o usuario')
    }
    
    return(
        <div>
            <h1>Meu cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
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