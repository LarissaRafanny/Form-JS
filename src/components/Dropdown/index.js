function Dropdown({opcoes}) {
    return (
        <div className="dropdown">
            <a className="btn btn-sm btn-icon-only text-light" href=" " role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fas fa-ellipsis-v"></i>
            </a>
            <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                {opcoes.map((opcao, indice) =>
                    <a key={indice} className="dropdown-item" href=" ">{opcao}</a>
                )}
            </div>
        </div>

    )
}

export default Dropdown;