export function login(email, senha, checked, setUsuarioLogado){
    const dados = {email, senha}

    //TODO: Verificar se o email e a senha existem e se são válidas
    //se for válida: setUsuarioLogado({usuario})
    //se não for válida: alert("Usuario não encontrado")
   
    sessionStorage.setItem("usuarioLogado", JSON.stringify(dados))
    if (checked){
        localStorage.setItem("usuarioLogado", JSON.stringify(dados))

    }
}

export function logout(){
    localStorage.clear()
    sessionStorage.removeItem("usuarioLogado") // remove item  pela key
    sessionStorage.clear()                    // remove todos os itens
}