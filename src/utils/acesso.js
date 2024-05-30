export function login(email, senha, checked, setUsuarioLogado){
    const dados = {email, senha}
    setUsuarioLogado(dados)

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