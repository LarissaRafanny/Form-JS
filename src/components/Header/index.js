

import { useNavigate } from "react-router-dom";
import Dropdown from "./Dropdown";
import { logout } from "../../utils/acesso";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";

function Header({busca, setBusca}) {
    const navigate = useNavigate();

    const {usuarioLogado} = useContext(GlobalContext);

    const handleLongout = () => {
        logout()
        navigate("/")
    }

    const opcoes = [
        {icone:"ni ni-sigle-02", texto: "meu perfil", onclick: () => navigate("/perfil")},
        {icone:"ni ni-settings-gear-65", texto: "Configurações", onclickk: () => navigate("/configuracoes")},
        {icone:"ni ni-calendar-grid-58", texto: "Atividades", onclick: () => navigate("/atividades")},
        {icone:"ni ni-support-16", texto: "Suporte", onclick: () => navigate("/suporte")},
        {icone:"ni ni-user-run", texto: "Sair", onclick: handleLongout},
    ]
    
  

    return (
        <> {/** BARRA DE NAVEGAÇÃO  */}
            <div className="main-content fixed-top" id="header">
                <nav className="navbar navbar-top navbar-expand navbar-dark bg-primary border-bottom">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            {/** FORM DE PESQUISA */}
                            <form className="navbar-search navbar-search-light form-inline mr-sm-3" id="navbar-search-main">
                                <div className="form-group mb-0">
                                    <div className="input-group input-group-alternative input-group-merge">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fas fa-search"></i></span>
                                        </div>
                                        <input 
                                            className="form-control" 
                                            placeholder="Pesquisar" 
                                            type="text"
                                            defaultValue={busca}
                                            onChange={(event) => setBusca((event).target.value)} />
                                    </div>
                                </div>
                                <button type="button" className="close" data-action="search-close" data-target="#navbar-search-main" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </form>

                            <ul className="navbar-nav align-items-center ml-md-auto ">
                                <li className="nav-item dropdown">
                                    <a className="nav-link pr-0" href=" " role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <div className="media align-items-center">
                                            <span className="avatar avatar-sm rounded-circle">
                                                <img alt="placeholder" src="https://avatars.githubusercontent.com/u/134737534?v=4" />
                                            </span>
                                            <div className="media-body  ml-2  d-none d-lg-block">
                                                <span className="mb-0 text-sm  font-weight-bold text-white">{usuarioLogado?.email}</span>
                                            </div>
                                        </div>
                                    </a>
                                    <Dropdown titulo={"Bem-vindo!"} opcoes={opcoes}/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

        </>
    );
}

export default Header;