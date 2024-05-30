import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Table from "../../components/Table";
import { listarCasas } from "../../services/api";


function Home() {
    const [casasApi, setCasasApi] = useState([]);
    const [casas, setCasas] = useState([]);
    const [busca, setBusca] = useState("");

    useEffect(() => {
        listarCasas();
        const casasFiltradas = CASAS.filter((casa) => casa.endereco.toLowerCase().includes(busca.toLowerCase()));
        setCasas(casasFiltradas)
    }, [busca])
    return (
        <>
            <Header busca={busca} setBusca={setBusca}/>
            <div className="container-fluid mt-2">
                <h1> Avaliação de Imóveis</h1>
            </div>
            <Table titulo={"Imóveis Cadastrados"}
                linhas={casas}
                colunas={["ID", "Endereço", "Quartos", "Banheiros", "Vagas Garagem", " "]}
            />
            <Footer />
        </>
    )
}

export default Home;