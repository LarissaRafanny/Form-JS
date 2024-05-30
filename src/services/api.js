import axios from "axios";


export const api = axios.create({
    baseURL: "http://localhost:3001"
})

export async function listarCasas() {
    await api.get("/casas").then((response) => console.log(response))

}