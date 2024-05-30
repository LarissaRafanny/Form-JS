function Dropdown({titulo, opcoes}) {
    return (
        <>
            <div className="dropdown-menu  dropdown-menu-right ">
                <div className="dropdown-header noti-title">
                    <h6 className="text-overflow m-0">{titulo}</h6>
                </div>
                {
                    opcoes?.map((opcao, indice) => (
                        <a role="button" className="dropdown-item" onClick={opcao.onClick} href="." key={indice}>
                            <i className={opcao.icone}></i>
                            <span>{opcao.texto}</span>

                        </a>
                    ))
                }                
               
            </div>
        </>
    )
}

export default Dropdown;