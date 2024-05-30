
import { useNavigate } from "react-router-dom";
import Dropdown from "../Dropdown";

function Table({titulo, linhas, colunas}) {
  const navigate = useNavigate();

  const handleNovaCasa = () =>{
    navigate("/cadastro")
  }

  return (
    <div className="container-fluid mt-3">
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-header border-0">
              <div className="d-flex justify-content-between">
                <h3 className="mb-0">{titulo}</h3>
                <button 
                  type="button" 
                  className="btn btn-primary"
                  onClick={handleNovaCasa}> 
                  Nova Casa
                </button>
              </div>
              
            </div>
            <div className="table-responsive">
              <table className="table align-items-center table-flush">
                <thead className="thead-light">
                  <tr>
                    {colunas.map((coluna, indice) =>(
                      <th key={indice} scope="col" className="sort">{coluna}</th>
                    ))}                    
                  </tr>
                </thead>
                <tbody className="list">
                  {linhas.map((casa) => {
                      return (
                        <tr key={casa.id}>
                          <th scope="row">
                            <div className="media-body">
                              <span className="name mb-0 text-sm">{casa.id}</span>
                            </div>
                          </th>
                          <td>{casa.endereco}</td>
                          <td>{casa.quartos}</td>
                          <td>{casa.banheiros}</td>
                          <td>{casa.vagas_garagem}</td>
                          <td className="text-right">
                            <Dropdown opcoes={["Ver detalhes", "Editar Dados", "Deletar Casa"]} />
                          </td>
                        </tr>
                      )
                    })
                  }

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Table;