import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Table from "../../components/Table";
import { useCasas } from "../../hooks/useCasas";


function Home() {
    const casasApi = useCasas([]);
    const [casas, setCasas] = useState([]);
    const [busca, setBusca] = useState("");

    useEffect(() => {

        const casasFiltradas = casasApi.filter((casa) => casa.endereco.toLowerCase().includes(busca.toLowerCase()))
        setCasas(casasFiltradas)
    }, [busca, casasApi])
    return (
        <>
            <Header busca={busca} setBusca={setBusca} />
            <div className="container-fluid mt-2 ml-4" id="painel">
                <h1> Avaliação de Imóveis</h1>

                <Table 
                    titulo={"Casas Cadastradas"}
                    linhas={casas}
                    colunas={["ID", "Endereço", "Quartos", "Banheiros", "Vagas Garagem", " "]}
                />
            </div>
            <Footer />
        </>
    )
}

export default Home;