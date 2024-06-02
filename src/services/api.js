import axios from "axios";


export const api = axios.create({
    baseURL: "http://localhost:3001"
})

export async function listarCasas(setCasasApi) {
    await api.get("/casas").then((response) => setCasasApi(response.data)).catch((error) => alert(error))

}

export async function listarUsuarios(setUsuarios){
    await api.get("/usuarios").then((response) => setUsuarios(response.data)).catch((error) => alert(error))
}