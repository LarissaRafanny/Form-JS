import { useContext, useState } from "react";
import Footer from "../../components/Footer";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { login } from "../../utils/acesso";
import { GlobalContext } from "../../contexts/GlobalContext";

function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [checked, setChecked] = useState(true);
    const [exibirSenha, setExibirSenha] = useState(false);

    const navigate = useNavigate();

    const {setUsuarioLogado} = useContext(GlobalContext);

    const handleAcessar = () => {
        
        // CHAMADA A API EXTERNA
        login(email, senha, checked, setUsuarioLogado)
        
        navigate("/home")
    }

    return (
        <>
            <div className="main-content bg-primary">
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-5 col-md-7">
                            <div className="card bg-secondary border-0 mb-0">
                                <div className="card-body px-lg-5 py-lg-5">
                                    <div className="text-center text-muted mb-4">
                                        <small>Insira suas credenciais de acesso</small>
                                    </div>

                                    <div className="form-group mb-3">
                                        <div className="input-group input-group-merge input-group-alternative">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i className="ni ni-email-83"></i></span>
                                            </div>
                                            <input
                                                className="form-control"
                                                placeholder="Email"
                                                type="email"
                                                defaultValue={email}
                                                onChange={(event) => setEmail(event.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="input-group input-group-merge input-group-alternative">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i className="ni ni-lock-circle-open"></i></span>
                                            </div>
                                            <input
                                                className="form-control"
                                                placeholder="Senha"
                                                type={exibirSenha ? "text" : "password"}
                                                defaultValue={senha}
                                                onChange={(event) => setSenha(event.target.value)}
                                            />

                                            <div className="input-group-prepend">
                                                <span className="input-group-text" onClick={() => setExibirSenha(!exibirSenha)} >
                                                    {exibirSenha ? <IoIosEyeOff /> : <IoIosEye />}

                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-control custom-control-alternative custom-checkbox">
                                        <input
                                            className="custom-control-input"
                                            id=" customCheckLogin" type="checkbox"
                                            defaultChecked={checked}
                                            onChange={() => setChecked(!checked)}
                                        />

                                        <label className="custom-control-label" htmlFor=" customCheckLogin">
                                            <span className="text-muted">Matenha-me conectado</span>
                                        </label>
                                    </div>
                                    <div className="text-center">
                                        <button 
                                            type="submit" 
                                            className="btn btn-primary my-4" 
                                            onClick={handleAcessar}>Entrar</button>
                                    </div>


                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-6">
                                    <a href=" " className="text-light"><small>Esqueceu a senha?</small></a>
                                </div>
                                <div className="col-6 text-right">
                                    <a href=" " className="text-light"><small>Criar nova conta</small></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

            <Footer />

            <script src="../assets/vendor/jquery/dist/jquery.min.js"></script>
            <script src="../assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
            <script src="../assets/vendor/js-cookie/js.cookie.js"></script>
            <script src="../assets/vendor/jquery.scrollbar/jquery.scrollbar.min.js"></script>
            <script src="../assets/vendor/jquery-scroll-lock/dist/jquery-scrollLock.min.js"></script>

            <script src="../assets/js/argon.js?v=1.2.0"></script>

        </>
    )
}

export default Login;