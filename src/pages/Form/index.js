import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { calcularPrecoImovel } from "../../utils/calculadora";

function Form() {
    const [descricao, setDescricao] = useState("");
    const [imagem, setImagem] = useState();
    const [cep, setCep] = useState();
    const [endereco, setEndereco] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");
    const [numero, setNumero] = useState (0);
    const [complemento, setComplemento] = useState("");
    const [quartos, setQuartos] = useState(0);
    const [banheiros, setBanheiros] = useState(0);
    const [vagasGaragem, setVagasGaragem] = useState(0);
    const [areaConstuida, setAreaConstruida] = useState(0);
    const [areaTerreno, setAreaTerreno] = useState(0);
    const [preco, setPreco] = useState(0);

    useEffect(() => {
        const precoImovel = calcularPrecoImovel(quartos, banheiros, vagasGaragem, areaConstuida, areaTerreno)
        setPreco(precoImovel)
        console.log(preco)
    }, [quartos, banheiros, vagasGaragem, areaConstuida, areaTerreno])

    const salvarDados = () => {
        console.log({descricao, imagem, cep, endereco, cidade, 
            estado, numero, complemento, quartos, banheiros, 
            vagasGaragem, areaConstuida, areaTerreno, preco })
        //chamar dados
    }

    //

    
    return (
        <>
            <Header />
            <div className="container-fluid mt-4 d-flex justify-content-center" id="cadastro">


                <div className="col-xl-8 order-xl-1">
                    <div className="card">
                        <div className="card-header">
                            <div className="row align-items-center">
                                <div className="col-8">
                                    <h3 className="mb-0">Formulário de Cadastro de Imóvel</h3>
                                </div>
                                <div className="col-4 text-right">
                                    <a href="#!" 
                                        className="btn btn-sm btn-primary"
                                        onChange={salvarDados}>Salvar</a>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <form>
                                <h6 className="heading-small text-muted mb-4">Sobre o Imóvel</h6>
                                <div className="pl-lg-4">
                                    <div className="form-group">
                                        <textarea
                                            rows="4"
                                            className="form-control"
                                            placeholder="Descreva brevemente o imóvel ..."
                                            defaultValue={descricao}
                                            onChange={(event) => setDescricao(event.target.value)}
                                        />
                                    </div>
                                </div>
                                <hr className="my-4" />

                                <h6 className="heading-small text-muted mb-4"> Imagens</h6>
                                <div className="pl-lg-4">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">

                                                <input 
                                                    id="input-images" 
                                                    type="file" 
                                                    className="form-control"
                                                    defaultValue={imagem}
                                                    onChange={(event) => setImagem(event.target)} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr className="my-4" />

                                <h6 className="heading-small text-muted mb-4">Endereço</h6>
                                <div className="pl-lg-4">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label className="form-control-label" htmlFor="input-cep">CEP</label>
                                                <input 
                                                    id="input-address" 
                                                    className="form-control" 
                                                    placeholder="00.000-000" 
                                                    defaultValue={cep}
                                                    onChange={(event) => setCep(event.target.value)}
                                                    type="number" 
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="form-group">
                                                <label className="form-control-label" htmlFor="input-endereco">Logradouro</label>
                                                <input 
                                                    id="input-endereco" 
                                                    className="form-control" 
                                                    placeholder="Rua.." 
                                                    defaultValue={endereco} 
                                                    onChange={(event) => setEndereco(event.target.value)}
                                                    type="text" 
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <label className="form-control-label" htmlFor="input-numero">Número</label>
                                                <input 
                                                    type="number" 
                                                    id="input-postal-code" 
                                                    className="form-control" 
                                                    placeholder="100" 
                                                    defaultValue={numero}
                                                    onChange={(event) => setNumero(event.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <label className="form-control-label" htmlFor="input-complemento">Complemento</label>
                                                <input 
                                                    type="text" 
                                                    id="input-postal-code" 
                                                    className="form-control" 
                                                    placeholder=" Complemento" 
                                                    defaultValue={complemento}
                                                    onChange={(event) => setComplemento(event.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <label className="form-control-label" htmlFor="input-cidade">Cidade</label>
                                                <input 
                                                    type="text" 
                                                    id="input-city" 
                                                    className="form-control" 
                                                    placeholder="City" 
                                                    defaultValue={cidade}
                                                    onChange={(event) => setCidade(event.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <label className="form-control-label" htmlFor="input-estado">Estado</label>
                                                <input 
                                                    type="text" 
                                                    id="input-country" 
                                                    className="form-control" 
                                                    placeholder="Estapo" 
                                                    defaultValue={estado}
                                                    onChange={(event) => setEstado(event.target.value)}
                                                />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <hr className="my-4" />

                                <h6 className="heading-small text-muted mb-4">Características do Imóvel</h6>
                                <div className="pl-lg-4">
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div className="form-group">
                                                <label className="form-control-label" htmlFor="input-nquartos">Nº Quartos</label>
                                                <input 
                                                    type="number" 
                                                    min={0} 
                                                    id="input-nquartos" 
                                                    className="form-control" 
                                                    placeholder="3" 
                                                    defaultValue={quartos}
                                                    onChange={(event) => setQuartos(event.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="form-group">
                                                <label className="form-control-label" htmlFor="input-nbanheiros">Nº Banheiros</label>
                                                <input 
                                                    type="number" 
                                                    min={0} 
                                                    id="input-nbanheiros" 
                                                    className="form-control" 
                                                    placeholder="2" 
                                                    defaultValue={banheiros}
                                                    onChange={(event) => setBanheiros(event.target.value)}
                                                />
                                            </div>
                                        </div>


                                        <div className="col-lg-4">
                                            <div className="form-group">
                                                <label className="form-control-label" htmlFor="input-vagasgaragem">Nº Vagas Garagem</label>
                                                <input 
                                                    type="number" 
                                                    min={0} 
                                                    max={3} 
                                                    id="input-vagasgaragem" 
                                                    className="form-control" 
                                                    placeholder=" 1" 
                                                    defaultValue={vagasGaragem}
                                                    onChange={(event) => setVagasGaragem(event.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </div>


                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div className="form-group">
                                                <label className="form-control-label" htmlFor="input-area-construida">Área Construída (m²)</label>
                                                <input 
                                                    type="number" 
                                                    min={0} 
                                                    id="input-area-construida" 
                                                    className="form-control" 
                                                    placeholder="110" 
                                                    defaultValue={areaConstuida}
                                                    onChange={(event) => setAreaConstruida(event.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="form-group">
                                                <label className="form-control-label" htmlFor="input-area-terreno">Área do Terreno (m²)</label>
                                                <input 
                                                    type="number" 
                                                    min={0} 
                                                    id="input-area-terreno" 
                                                    className="form-control" 
                                                    placeholder="200" 
                                                    defaultValue={areaTerreno}
                                                    onChange={(event) => setAreaTerreno(event.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="form-group">
                                                <h2>Preço(R$): {preco}</h2>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>


                        </div>
                    </div>

                </div>
            </div >
       

            <Footer />

        </>
    )
}

export default Form;